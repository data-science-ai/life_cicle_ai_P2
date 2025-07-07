import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ChatMessageService } from '../../chat/services/chat-message.service';
import { Ollama } from '../../common/interfaces/ollama.interface';

@Injectable({
  providedIn: 'root',
})
export class OllamaService {
  private http = inject(HttpClient);
  private chatMessageService = inject(ChatMessageService);

  public sendPrompt(value: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const response = this.http
      .post<Ollama>(
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
      )
      .pipe(
        tap((res) => {
          console.log(res.response);
          this.chatMessageService.addMessage({
            me: false,
            message: res.response,
          });
        })
      );

    return response;
  }
}
