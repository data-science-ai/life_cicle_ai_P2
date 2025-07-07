import { JsonPipe, NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'shared-base-button',
  // imports: [NgClass, JsonPipe],
  templateUrl: './base-button.component.html',
  styleUrl: './base-button.component.css',
})
export class BaseButtonComponent {
  public buttonType = input<'button' | 'submit'>('button');
  public label = input<string>();
  public color = input<'primary' | 'secondary'>('primary');
  public customClass = input<string>();
  public onClick = output();

  private get buttonColor() {
    return {
      'btn btn-primary': this.color() === 'primary',
      'btn btn-secondary': this.color() === 'secondary',
    };
  }

  protected get buttonClass() {
    return {
      ...this.buttonColor,
      [this.customClass() ?? '']: this.customClass() !== null,
    };
  }
}
