import {
  AfterViewInit,
  Component,
  ElementRef,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { OllamaService } from '../core/services/ollama.service';
import { BaseButtonComponent } from '../shared/components/base-button/base-button.component';
import { BaseInputComponent } from '../shared/components/base-input/base-input.component';
import { PacmanComponent } from '../shared/components/icons/pacman/pacman.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatMessageService } from './services/chat-message.service';

@Component({
  selector: 'chat',
  imports: [
    BaseButtonComponent,
    BaseInputComponent,
    ChatMessageComponent,
    PacmanComponent,
  ],
  templateUrl: './chat.component.html',
})
export class ChatComponent implements AfterViewInit {
  private ollamaServiceService = inject(OllamaService);
  private chatMessageService = inject(ChatMessageService);
  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('panelChat');

  private inputValue = signal<string>('');
  public inputMessage = new FormControl('');

  public get messages() {
    return this.chatMessageService.getMessages();
  }

  constructor() {
    effect(() => {
      const messages = this.chatMessageService.getMessages();
      if (messages().length > 0) {
        this.scrollToBottom();
      }
    });
  }

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  public aiResponse = rxResource<any, string>({
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

  private scrollToBottom(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (scrollDiv) {
      setTimeout(() => {
        scrollDiv.scrollTop = scrollDiv.scrollHeight;
      }, 0);
    }
  }
}
