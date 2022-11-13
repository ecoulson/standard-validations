import { Exception } from '@the-standard/exceptions';
import { ValidationStep } from '../../../models/validations/validation-step';

export interface IValidationService {
    validate(exception: Exception, validationStepList: ValidationStep[]): void;
}
