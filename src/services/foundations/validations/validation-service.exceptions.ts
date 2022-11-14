import { tryCatch } from '@the-standard/exception-handlers';
import { Action } from '@the-standard/types';
import { IllegalValidationStepListException } from '../../../models/validations/exceptions/illegal-validation-step-list-exception';
import { NullExceptionException } from '../../../models/validations/exceptions/null-exception-exception';
import NullValidationStepListException from '../../../models/validations/exceptions/null-validation-step-list-exception';
import { ValidationServiceValidationException } from './exceptions/validation-service-validation-exception';

export class ValidationServiceExceptions {
    validateExceptionHandler(logic: Action<void>) {
        return tryCatch(logic)
            .handle(
                [
                    IllegalValidationStepListException,
                    NullExceptionException,
                    NullValidationStepListException,
                ],
                (exception) =>
                    new ValidationServiceValidationException(exception)
            )
            .execute();
    }
}
