import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OllamaService {
  private http = inject(HttpClient);

  public sendPrompt(value: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const response = this.http.post(
      'http://localhost:11434/api/generate',
      {
        model: 'gemma3n:e4b',
        prompt: value,
        stream: false,
        max_tokens: 150,
      },
      {
        headers,
        responseType: 'json',
      }
    );

    return response;
  }
}
