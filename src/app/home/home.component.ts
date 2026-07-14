import { Component, OnInit, inject } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { PackagesComponent } from '../packages/packages.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { FaqComponent } from '../faq/faq.component';
import { ContactComponent } from '../contact/contact.component';
import { SeoService } from '../shared/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    PackagesComponent,
    GalleryComponent,
    TestimonialsComponent,
    FaqComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setMeta(
      'Home',
      'Premium tours, comfortable transfers and curated travel experiences with KT Travels.',
    );
  }
}
