import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../shared/seo.service';
import { packages, PackageItem } from '../shared/travel-data';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [SectionHeadingComponent, RouterLink],
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {
  readonly packages: PackageItem[] = packages;
  get displayPackages(): PackageItem[] {
    return this.packages;
  }

  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setMeta(
      'Pilgrimage Packages',
      'Browse KT Travels pilgrimage and Dham-focused packages.',
    );
  }
}
