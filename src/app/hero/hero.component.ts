import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  constructor(private readonly router: Router) {}

  onSearch(destination?: string): void {
    const q = (destination || '').trim();
    this.router.navigate(['/packages'], { queryParams: { q } });
  }
}
