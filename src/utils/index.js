const _int = (data, reg) => {
    console.log('_int');
}
const _float = (data, reg) => {
    console.log('_float');
}
const _max = (data, reg) => {
    console.log('_max');
}
const _min = (data, reg) => {
    console.log('_min');
}
const _boolean = (data, reg) => {
    console.log('_boolean');
    return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}
const equalTo = (data, reg) => {
    console.log('equalTo');
}
const notEqualTo = (data, reg) => {
    console.log('notEqualTo');
}
const moreThan = (data, reg) => {
    console.log('moreThan');
}
const lessThan = (data, reg) => {
    console.log('lessThan');
}
const notMoreThan = (data, reg) => {
    console.log('notMoreThan');
}
const notLessThan = (data, reg) => {
    console.log('notLessThan');
}
const _match = (data, _matchFn) => {
    console.log('_match');
}
const setMsg = (options) => {
    return false;
}

export default {
    _int: _int,
    _float: _float,
    _max: _max,
    _min: _min,
    _boolean: _boolean,
    equalTo: equalTo,
    notEqualTo: notEqualTo,
    moreThan: moreThan,
    lessThan: lessThan,
    notMoreThan: notMoreThan,
    notLessThan: notLessThan,
    _match: _match
};
