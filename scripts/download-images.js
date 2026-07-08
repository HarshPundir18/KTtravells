const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

function slugify(s) {
  return s
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60);
}

const repoRoot = path.resolve(__dirname, '..');
const dataFile = path.join(repoRoot, 'src', 'app', 'shared', 'travel-data.ts');
const outDir = path.join(repoRoot, 'src', 'assets', 'images');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

let content = fs.readFileSync(dataFile, 'utf8');
const regex = /image:\s*['"]([^'"]+)['"]/g;
let match;
let replacements = [];
let count = 0;

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const req = proto.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // follow redirect
        return resolve(download(res.headers.location, dest));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get ${url} (status ${res.statusCode})`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', (err) => reject(err));
    });
    req.on('error', reject);
  });
}

(async () => {
  while ((match = regex.exec(content)) !== null) {
    const url = match[1];
    if (url.startsWith('assets/') || url.startsWith('./assets') || url.startsWith('src/assets')) {
      console.log('Skipping local asset:', url);
      continue;
    }
    // find a nearby title to name the file
    const idx = match.index;
    const before = content.slice(0, idx);
    const titlePos = before.lastIndexOf('title:');
    let baseName = `image-${++count}`;
    if (titlePos !== -1) {
      const titleSlice = content.slice(titlePos, idx);
      const tm = titleSlice.match(/title:\s*['"]([^'"]+)['"]/);
      if (tm && tm[1]) baseName = slugify(tm[1]);
    }
    // ensure unique filename
    let filename = `${baseName}.jpg`;
    let i = 1;
    while (fs.existsSync(path.join(outDir, filename))) {
      filename = `${baseName}-${i++}.jpg`;
    }
    const dest = path.join(outDir, filename);
    try {
      console.log('Downloading', url, '->', dest);
      await download(url, dest);
      replacements.push({ from: url, to: `assets/images/${filename}` });
    } catch (err) {
      console.error('Failed to download', url, err.message);
    }
  }

  if (replacements.length === 0) {
    console.log('No remote images found to download.');
    return;
  }

  // Replace URLs in the TS file
  let newContent = content;
  for (const r of replacements) {
    // replace all exact occurrences of the quoted url (single or double)
    const esc = r.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const qregex = new RegExp(`(['"])${esc}(['"])`, 'g');
    newContent = newContent.replace(qregex, `'$'`); // temporary marker to avoid re-escaping issues
    // now replace the temporary marker with the unquoted new path
    newContent = newContent.replace(/'\u007f'/g, `'${r.to}'`);
  }

  // If above method left markers, do a safer replace fallback
  // Fallback simple replace of exact URL occurrences
  for (const r of replacements) {
    newContent = newContent.split(r.from).join(r.to);
  }

  fs.writeFileSync(dataFile, newContent, 'utf8');
  console.log('Updated', dataFile, 'with local image paths.');
})();
