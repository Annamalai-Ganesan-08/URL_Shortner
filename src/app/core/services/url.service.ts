import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private apiUrl = 'https://localhost:5001/api/url';

  constructor(private http: HttpClient) {}

  shortenUrl(longUrl: string) {
    return this.http.post<string>(
      `${this.apiUrl}/shorten`,
      longUrl
    );
  }
}
