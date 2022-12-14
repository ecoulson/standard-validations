import { Exception } from '@the-standard/exceptions';
import { ValidationClient } from './clients/validations/validation-client';
import { ValidationRule } from './models/validations/validation-rule';
import { ValidationStep } from './models/validations/validation-step';

const client = new ValidationClient();

export function validate(
    exception: Exception,
    validationSteps: ValidationStep[]
): void {
    client.validate(exception, validationSteps);
}

export { ValidationStep, ValidationRule };
