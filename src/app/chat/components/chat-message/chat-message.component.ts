import { Component, input, signal } from '@angular/core';
import { ChatMessage } from '../../interfaces/chat-message.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'chat-message',
  imports: [NgClass],
  templateUrl: './chat-message.component.html',
})
export class ChatMessageComponent {
  public chatMessage = input<ChatMessage>({
    me: false,
    message: '',
  });
}
