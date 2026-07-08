import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/seo.service';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMeta(
      'Contact',
      'Get in touch with KT Travels for bookings, queries and travel planning.',
    );
  }
}
