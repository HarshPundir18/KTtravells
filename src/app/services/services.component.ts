import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/seo.service';
import { cabOptions, services } from '../shared/travel-data';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
  readonly services = services;
  readonly cabOptions = cabOptions;

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMeta(
      'Services',
      'Browse the premium travel and booking services KT Travels offers.',
    );
  }
}
