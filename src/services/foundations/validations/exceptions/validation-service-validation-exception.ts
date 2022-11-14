import { Exception } from '@the-standard/exceptions';

export class ValidationServiceValidationException extends Exception {
    constructor(innerException: Exception) {
        super(
            'Validation service validation exception, contact support.',
            innerException
        );
    }
}
