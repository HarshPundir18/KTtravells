import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { packages, PackageItem } from '../shared/travel-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-package-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss'],
})
export class PackageDetailComponent implements OnInit {
  pkg?: PackageItem;

  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.pkg = packages.find((p) => p.slug === slug);
  }
}
