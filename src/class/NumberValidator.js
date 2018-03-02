import Validator from './Validator';

export default class NumberValidator extends Validator {
    constructor () {
        super();
    }
    legal (data) {
        const reg = /^[-+]?[0-9]+$/;
        return typeof data === 'number' && reg.test(data);
    }
}
