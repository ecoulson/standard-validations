import { Exception } from '@the-standard/exceptions';

export default class NullValidationStepListException extends Exception {
    constructor() {
        super('Null validation steps list.');
    }
}
