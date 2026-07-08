import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/seo.service';
import { gallery } from '../shared/travel-data';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  readonly gallery = gallery;

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMeta(
      'Gallery',
      'See a curated collection of signature moments from KT Travels journeys.',
    );
  }
}
