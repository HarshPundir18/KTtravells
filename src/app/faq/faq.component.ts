import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/seo.service';
import { faqs } from '../shared/travel-data';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent implements OnInit {
  readonly faqs = faqs;
  openIndex = 0;

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMeta('FAQ', 'Find quick answers to common travel and booking questions.');
  }

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? -1 : index;
  }
}
