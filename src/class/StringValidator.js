import Validator from './Validator';

export default class NumberValidator extends Validator {
    constructor () {
        super();
    }
    legal (data) {
        return typeof data === 'string';
    }
}
