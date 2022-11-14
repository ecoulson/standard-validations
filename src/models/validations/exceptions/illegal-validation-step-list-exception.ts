import { Exception } from '@the-standard/exceptions';
import { ExceptionData } from '@the-standard/exceptions/lib/models/exceptions/exception-data';
import { Nullable } from '@the-standard/types';

export class IllegalValidationStepListException extends Exception {
    constructor(data: Nullable<ExceptionData> = null) {
        super('Illegal validation step list, see details.', null, data);
    }
}
