import Validator from './Validator';

export default class NumStrValidator extends Validator {
    constructor () {
        super();
    }
    legal (data) {
        const reg = /^[-+]?[0-9]+$/;
        return typeof data === 'string' && reg.test(data);
    }
}
