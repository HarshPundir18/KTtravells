import { Component, OnInit, inject } from '@angular/core';
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
  private readonly seo = inject(SeoService);

  readonly testimonials = testimonials;

  ngOnInit(): void {
    this.seo.setMeta(
      'Testimonials',
      'Read genuine stories from guests who traveled with KT Travels.',
    );
  }
}
