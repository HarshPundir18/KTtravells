import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  isBookingModalVisible = false;
  hideBookingModalPermanently = false;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    const hidden = localStorage.getItem('kt_hideBookingModal');
    this.isBookingModalVisible = !hidden;
  }

  closeBookingModal(): void {
    if (this.hideBookingModalPermanently) {
      localStorage.setItem('kt_hideBookingModal', '1');
    }
    this.isBookingModalVisible = false;
  }

  onBookingSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const fd = new FormData(form);
    const name = (fd.get('name') as string) || '';
    const email = (fd.get('email') as string) || '';
    const phone = (fd.get('phone') as string) || '';
    const destination = (fd.get('destination') as string) || '';
    const message = (fd.get('message') as string) || '';

    const subject = `KT Travels Booking Inquiry: ${name || 'New Lead'}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDestination: ${destination}\n\nMessage:\n${message}`;
    const mailto = `mailto:hello@kttravels.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body,
    )}`;

    if (this.hideBookingModalPermanently) {
      localStorage.setItem('kt_hideBookingModal', '1');
    }
    this.isBookingModalVisible = false;
    window.location.href = mailto;
  }
}
