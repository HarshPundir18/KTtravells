import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../shared/seo.service';
import { packages } from '../shared/travel-data';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [SectionHeadingComponent, RouterLink],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss',
})
export class PackagesComponent implements OnInit {
  readonly packages = packages;

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMeta(
      'Tour Packages',
      'Browse KT Travels package deals for premium India and international journeys.',
    );
  }
}
