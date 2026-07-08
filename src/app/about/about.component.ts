import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/seo.service';
import { stats } from '../shared/travel-data';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  readonly stats = stats;

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMeta(
      'About Us',
      'Learn about KT Travels and the values that shape every premium journey.',
    );
  }
}
