import { Exception, ExceptionData } from '@the-standard/exceptions';
import { Nullable } from '@the-standard/types';

export class IllegalValidationStepListException extends Exception {
    constructor(data?: Nullable<ExceptionData>) {
        super('Illegal validation step list, see details.', null, data);
    }
}
