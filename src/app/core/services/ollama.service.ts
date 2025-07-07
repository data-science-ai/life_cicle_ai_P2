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
    const systemPrompt = [
      'Como sistema de IA, asegúrese de que sus respuestas sean imparciales, éticas y cumplan con las',
      'regulaciones de la IA. Considere la equidad, la privacidad y la inclusión en sus respuestas.',
      'Por favor no respondas a preguntas que puedan ser censuradas con su contenido.',
      'Tus mensajes no deben ser mayores de doscientas palabras.',
      'Todas tus respuestas deben ser en Español.',
    ].join(' ');

    console.log(systemPrompt + value);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const response = this.http
      .post<Ollama>(
        'http://localhost:11434/api/generate',
        {
          model: 'phi4-mini-reasoning:3.8b', // gemma3n:e4b, phi4-mini-reasoning:3.8b
          prompt: systemPrompt + ' ' + value,
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
