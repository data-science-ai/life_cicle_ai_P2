import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { OllamaService } from '../core/services/ollama.service';
import { BaseButtonComponent } from '../shared/components/base-button/base-button.component';
import { BaseInputComponent } from '../shared/components/base-input/base-input.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatMessageService } from './services/chat-message.service';

@Component({
  selector: 'chat',
  imports: [BaseButtonComponent, BaseInputComponent, ChatMessageComponent],
  templateUrl: './chat.component.html',
})
export class ChatComponent {
  private ollamaServiceService = inject(OllamaService);
  private chatMessageService = inject(ChatMessageService);

  private inputValue = signal<string>('');
  public inputMessage = new FormControl('', Validators.required);

  public a = rxResource<any, string>({
    params: () => this.inputValue(),
    stream: ({ params: query }) => {
      if (!query) return of(null);
      return this.ollamaServiceService.sendPrompt(query);
    },
  });

  public onClick() {
    if (this.inputMessage.invalid) {
      this.inputMessage.markAsTouched();
      return;
    }
    this.inputValue.set(this.inputMessage.value!);

    this.chatMessageService.addMessage({
      me: true,
      message: this.inputMessage.value!,
    });

    this.inputMessage.reset();
  }

  public get messages() {
    return this.chatMessageService.getMessages();
  }
}
