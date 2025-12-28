import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UrlService } from '../../core/services/url.service';

@Component({
  selector: 'app-shorten-url',
  standalone: true,
    imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './shorten-url.component.html',
  styleUrl: './shorten-url.component.css'
})
export class ShortenUrlComponent {
  longUrl = '';
  shortUrl = '';
  loading = false;
  error = '';

  constructor(private urlService: UrlService) {}

  createShortUrl() {
    if (!this.longUrl) return;

    this.loading = true;
    this.error = '';

    this.urlService.shortenUrl(this.longUrl).subscribe({
      next: (code) => {
        this.shortUrl = `https://localhost:5001/api/url/${code}`;
        this.loading = false;
      },
      error: () => {
        this.error = 'Something went wrong';
        this.loading = false;
      }
    });
  }
}
