import { computed, Injectable, signal } from '@angular/core';
import { ChatMessage } from '../interfaces/chat-message.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatMessageService {
  private messages = signal<ChatMessage[]>([]);

  getMessages() {
    return computed(() => this.messages());
  }

  addMessage(message: ChatMessage) {
    this.messages.update((messages) => [...messages, message]);
  }
}
