import { JoinPartialClasses } from '@the-standard/partials';
import { ValidationServiceExceptions } from './validation-service.exceptions';
import { ValidationServiceValidations } from './validation-service.validations';

export class ValidationServiceOperations extends JoinPartialClasses(
    ValidationServiceExceptions,
    ValidationServiceValidations
) {}
