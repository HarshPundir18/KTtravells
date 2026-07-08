import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent) },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'packages',
    loadComponent: () => import('./packages/packages.component').then((m) => m.PackagesComponent),
  },
  {
    path: 'packages/:slug',
    loadComponent: () =>
      import('./packages/package-detail.component').then((m) => m.PackageDetailComponent),
  },
  {
    path: 'gallery',
    loadComponent: () => import('./gallery/gallery.component').then((m) => m.GalleryComponent),
  },
  {
    path: 'services',
    loadComponent: () => import('./services/services.component').then((m) => m.ServicesComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
