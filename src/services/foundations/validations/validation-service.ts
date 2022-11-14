import { Exception } from '@the-standard/exceptions';
import { ValidationStep } from '../../../models/validations/validation-step';
import { IValidationService } from './validation-service.interface';
import { ValidationServiceOperations } from './validation-service.operations';

export class ValidationService
    extends ValidationServiceOperations
    implements IValidationService
{
    validate(exception: Exception, validationStepList: ValidationStep[]) {
        this.validateExceptionHandler(() => {
            this.validateException(exception);
            this.validateValidationStepList(validationStepList);
            validationStepList.forEach(({ rule, name }) => {
                if (rule.condition) {
                    exception.upsertDataList(name, rule.message);
                }
            });
            exception.throwIfContainsErrors();
        });
    }
}
