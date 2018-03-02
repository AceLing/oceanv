import Validator from './Validator';

export default class DateValidator extends Validator {
    constructor () {
        super();
    }
    legal (data) {
        let date = Date.parse(data);
        return !isNaN(date) ? true : false;
    }
}
