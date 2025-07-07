import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CustomValidationForm } from '../../../utils/custom-validation-form';

@Component({
  selector: 'shared-base-input',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './base-input.component.html',
  styleUrl: './base-input.component.css',
})
export class BaseInputComponent {
  public inputType = input<'text' | 'number' | 'date'>('text');
  public placeholder = input<string>('Search');
  public label = input<string>();
  public control = input<FormControl>(new FormControl());
  public required = input<boolean>(false);
  public enterKey = output<void>();
  // @Output() enterKey = new EventEmitter<void>();

  public get invalidField() {
    return this.control().touched && this.control().invalid;
  }

  public get errorMessage(): string | null {
    if (!this.control()?.errors) return null;
    return CustomValidationForm.message(
      this.control()!.errors!,
      this.label() || ''
    );
  }

  onEnterKey(event: Event) {
    const keyboardEvent = event as KeyboardEvent;
    keyboardEvent.preventDefault();
    this.enterKey.emit();
  }
}
