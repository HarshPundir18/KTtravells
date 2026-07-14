import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private readonly router = inject(Router);

  readonly menuItems: { label: string; path: string; fragment?: string }[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Packages', path: '/packages' },
    { label: 'Services', path: '/services' },
    { label: 'Cabs', path: '/services', fragment: 'cab-selection' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  get isHome(): boolean {
    return this.router.url === '/';
  }
}
