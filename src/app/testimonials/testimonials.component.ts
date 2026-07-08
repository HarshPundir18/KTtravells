import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/seo.service';
import { testimonials } from '../shared/travel-data';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit {
  readonly testimonials = testimonials;

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMeta(
      'Testimonials',
      'Read genuine stories from guests who traveled with KT Travels.',
    );
  }
}
