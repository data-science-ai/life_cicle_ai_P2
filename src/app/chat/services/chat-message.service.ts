import { computed, Injectable, signal } from '@angular/core';
import { ChatMessage } from '../interfaces/chat-message.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ChatMessageService {
  private messages = signal<ChatMessage[]>([]);

  getMessages() {
    return computed(() => this.messages());
  }

  addMessage(message: ChatMessage) {
    const id: string = uuidv4();
    const date = new Date();
    const hour = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    this.messages.update((messages) => [
      ...messages,
      { ...message, id, date: `${hour}:${minutes}` },
    ]);
  }
}
