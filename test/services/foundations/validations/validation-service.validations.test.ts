import { Exception } from '@the-standard/exceptions';
import { ValidationStep } from '../../../../src';
import { IllegalValidationStepListException } from '../../../../src/models/validations/exceptions/illegal-validation-step-list-exception';
import { NullExceptionException } from '../../../../src/models/validations/exceptions/null-exception-exception';
import NullValidationStepListException from '../../../../src/models/validations/exceptions/null-validation-step-list-exception';
import { ValidationServiceValidationException } from '../../../../src/services/foundations/validations/exceptions/validation-service-validation-exception';
import { ValidationService } from '../../../../src/services/foundations/validations/validation-service';

describe('Validation Service Validations Test Suite', () => {
    const service = new ValidationService();

    describe('validate', () => {
        test('Should throw a validation service exception when the given exception is null', () => {
            const inputException = null as any;
            const inputSteps: ValidationStep[] = [];
            const nullException = new NullExceptionException();
            const expectedException = new ValidationServiceValidationException(
                nullException
            );

            const action = () => service.validate(inputException, inputSteps);
            expect(action).toThrowException(expectedException);
        });

        test('Should throw a validation exception when the given steps are null', () => {
            const inputException = new Exception();
            const inputSteps: ValidationStep[] = null as any;
            const nullException = new NullValidationStepListException();
            const expectedException = new ValidationServiceValidationException(
                nullException
            );

            const action = () => service.validate(inputException, inputSteps);
            expect(action).toThrowException(expectedException);
        });

        test('Should throw a validation exception when a step is null', () => {
            const inputException = new Exception();
            const inputSteps: ValidationStep[] = [null as any];
            const illegalException = new IllegalValidationStepListException(
                new Map([
                    ['validationStepList[0]', ['Validation step is null']],
                ])
            );
            const expectedException = new ValidationServiceValidationException(
                illegalException
            );

            const action = () => service.validate(inputException, inputSteps);
            expect(action).toThrowException(expectedException);
        });

        test('Should throw a validation exception when a step has a null rule', () => {
            const inputException = new Exception();
            const inputSteps: ValidationStep[] = [
                new ValidationStep('name', null as any),
            ];
            const illegalException = new IllegalValidationStepListException(
                new Map([
                    ['validationStepList[0].rule', ['Validation rule is null']],
                ])
            );
            const expectedException = new ValidationServiceValidationException(
                illegalException
            );

            const action = () => service.validate(inputException, inputSteps);
            expect(action).toThrowException(expectedException);
        });
    });
});
