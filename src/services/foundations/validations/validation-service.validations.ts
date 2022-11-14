import { isNil } from '@the-standard/conditions';
import { Exception } from '@the-standard/exceptions';
import { NullExceptionException } from '../../../models/validations/exceptions/null-exception-exception';
import { ValidationStep } from '../../../models/validations/validation-step';
import NullValidationStepListException from '../../../models/validations/exceptions/null-validation-step-list-exception';
import { IllegalValidationStepListException } from '../../../models/validations/exceptions/illegal-validation-step-list-exception';

export class ValidationServiceValidations {
    validateException(exception: Exception) {
        if (isNil(exception)) {
            throw new NullExceptionException();
        }
    }

    validateValidationStepList(validationStepList: ValidationStep[]) {
        if (isNil(validationStepList)) {
            throw new NullValidationStepListException();
        }
        const illegalListException = new IllegalValidationStepListException();
        validationStepList.forEach((step, i) => {
            if (isNil(step)) {
                illegalListException.addErrorMessages(
                    `validationStepList[${i}]`,
                    ['Validation step is null']
                );
            } else if (isNil(step.rule)) {
                illegalListException.addErrorMessages(
                    `validationStepList[${i}].rule`,
                    ['Validation rule is null']
                );
            }
        });
        illegalListException.throwIfContainsErrors();
    }
}
