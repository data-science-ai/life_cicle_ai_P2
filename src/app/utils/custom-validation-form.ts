import { ErrorInputInterface } from '../common/interfaces/error-input.interface';
import { ERROR_INPUT_MESSAGE } from '../common/constants/error-input-message';

export class CustomValidationForm {
  static message(
    errors: Record<string, string | ErrorInputInterface>,
    label?: string
  ): string | null {
    for (const key in errors) {
      if (Object.hasOwn(errors, key)) {
        const msg = ERROR_INPUT_MESSAGE[key];

        if (typeof errors[key] === 'object' && label) {
          const requiredLength = errors[key].requiredLength;
          return msg
            .replace('{{label}}', label)
            .replace('{{minlength}}', `${requiredLength}`)
            .replace('{{maxlength}}', `${requiredLength}`);
        }
        if (label) return msg.replace('{{label}}', label);
        return msg.replace('{{label}}', '');
      }
    }
    return null;
  }
}
