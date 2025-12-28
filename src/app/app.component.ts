import { Component } from '@angular/core';
import { ShortenUrlComponent } from './features/shorten-url/shorten-url.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShortenUrlComponent],
  template: `<app-shorten-url></app-shorten-url>`
})
export class AppComponent {}
