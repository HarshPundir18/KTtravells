import { Component, inject } from '@angular/core';
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
  private readonly router = inject(Router);

  onSearch(destination?: string): void {
    const q = (destination || '').trim();
    this.router.navigate(['/packages'], { queryParams: { q } });
  }
}
