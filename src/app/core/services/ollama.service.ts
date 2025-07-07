import { HttpClient, HttpHeaders, httpResource } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ChatMessageService } from '../../chat/services/chat-message.service';
import { Ollama } from '../../common/interfaces/ollama.interface';
import { v4 as uuidv4 } from 'uuid';

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
            id: uuidv4(),
            me: false,
            message: res.response,
          });
        })
      );

    return response;
  }
}
