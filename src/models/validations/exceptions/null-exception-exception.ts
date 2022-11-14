import { Exception } from '@the-standard/exceptions';

export class NullExceptionException extends Exception {
    constructor() {
        super('Exception is null.');
    }
}
