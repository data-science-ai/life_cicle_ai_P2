import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OllamaService } from './services/ollama.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly ollamaService = inject(OllamaService);
  protected title = 'chat-ollama';
  public text = signal<string | null>(null);
  public response = signal<string>('');

  public async onSendOllama() {
    console.log({ text: this.text() });
    if (!this.text()) return;
    const a = await this.ollamaService.sendPrompt(this.text()!).subscribe({
      next: (data) => {
        console.log({ data });
        this.response.set(data.response);
      },
      error: (error) => {},
    });
  }
}
