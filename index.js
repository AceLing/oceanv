import utils from './src/utils';
import configs from './src/configs';
import NumberValidator from './src/class/NumberValidator';
import NumStrValidator from './src/class/NumStrValidator';
import StringValidator from './src/class/StringValidator';
import DateValidator from './src/class/DateValidator';

/**
 * 校验是否符合 reg 规定的数据长度
 * @param  {String} data [数据内容]
 * @param  {String} reg  [校验规则]
 * @return {Boolean}      [校验结果]
 */
const length = (data, reg) => {
    const lengthInterval = reg.split(',');
    const MIN_LEN = lengthInterval[0] ? lengthInterval[0] : 0;
    const MAX_LEN = lengthInterval[1];
    let result = false;
    if (!data || !reg) {
        return result;
    }
    if (MAX_LEN) {
        result = data <= MAX_LEN;
    }
    result = result && data >= MIN_LEN;
    return result;
}
/**
 * 校验是否为 Number 类型
 * @param  {String} data [数据内容]
 * @return {Boolean}      [校验结果]
 */
const number = (data) => {
    const numberValidator = new NumberValidator();
    return numberValidator.legal(data);
}
/**
 * 校验是否为 String 类型
 * @param  {String} data [数据内容]
 * @return {Boolean}      [校验结果]
 */
const string = (data) => {
    const stringValidator = new StringValidator();
    return stringValidator.legal(data);
}
/**
 * 校验是否为 数字字符串 类型
 * @param  {String} data [数据内容]
 * @return {Boolean}      [校验结果]
 */
const numStr = (data) => {
    const numStrValidator = new NumStrValidator();
    return numStrValidator.legal(data);
}
/**
 * 校验是否符合邮箱地址格式
 * @param  {String} data [数据内容]
 * @return {Boolean}      [校验结果]
 */
const email = (data) => {
    return configs.reg.email.test(data);
}
/**
 * 校验是否符合 reg 规定的电话格式
 * @param  {String} data [数据内容]
 * @param  {String} reg  [校验规则]
 * @return {Boolean}      [校验结果]
 */
const phone = (data, reg) => {
    if (!reg) {
        return;
    }
    return !!reg && reg.test(data);
}
/**
 * 校验是否符合日期时间格式
 * @param  {String} data [数据内容]
 * @return {Boolean}      [校验结果]
 */
const date = (data) => {
    const dateValidator = new DateValidator();
    return dateValidator.legal(data);
}
/**
 * 校验是否存在 data 
 * @param  {String} data [数据内容]
 * @return {Boolean}      [校验结果]
 */
const presence = (data) => {
    let result = false;
    if (data === 0) {
        data = (data).toString();
    }
    result = data ? true : false;
    return result;
}
/**
 * 校验 reg 中是否存在 data 
 * @param  {String} data [数据内容]
 * @param  {Object} reg  [枚举类型数据项]
 * @return {Boolean}      [校验结果]
 */
const inside = (data, reg) => {
    let result = false;
    if (reg && data) {
        result = (reg).indexOf(data) === -1 ? false : true;
    }
    return result;
}
/**
 * 校验 reg 中是否不存在 data 
 * @param  {String} data [数据内容]
 * @param  {Object} reg  [枚举类型数据项]
 * @return {Boolean}      [校验结果]
 */
const exclude = (data, reg) => {
    let result = false;
    if (reg && data) {
        result = (reg).indexOf(data) === -1 ? true : false;
    }
    return result;
}
/**
 * 校验是否符合 reg 规定的格式（自定义）
 * @param  {String} data [数据内容]
 * @param  {String} reg  [正则表达式]
 * @return {Boolean}      [校验结果]
 */
const format = (data, reg) => {
    let result = false;
    if (reg && data) {
        result = reg.test(data);
    }
    return result;
}

/**
 * 主入口
 * oceanv(data,regulation,allError?)
 * @param  {Object}  data       [数据内容，字面量对象]
 * @param  {Object}  regulation [校验规则，字面量对象]
 * @param  {Boolean} allError   [是否校验所有的规则，默认值是否。true，校验的过程中会遍历每个数据项的所有规则，并且返回所有的异常。
 * false，校验的过程中遇到校验失败，则立即终止校验，并返回校验结果。]
 * @return {Object}             [isLegal，是否为符合校验规则的数据；msg，具体的校验信息]
 */
let oceanv = (data, regulation = {}, allError = false) => {
    let value = {
        isLegal: true,
        msg: {}
    };
    // 按照校验结果设置 isLegal 字段， msg 字段
    let regFn = ({
        labelName,
        regType,
        isLegal,
        value,
        configs,
        regulation
    }) => {
        if (isLegal) {
            value.isLegal = value.isLegal && true;
            value.msg[labelName][regType] = configs.tips.isLegal;
        } else {
            value.isLegal = value.isLegal && false;
            value.msg[labelName][regType] = regulation[labelName][regType].msg.replace(configs.labelReg, regulation[labelName].label);
        }
        return value;
    };
    // 按照数据项遍历校验规则
    for (let labelName in regulation) {
        if (regulation[labelName]) {
            value.msg[labelName] = new Array();
            // 按照校验类型遍历数据项
            for (let regType in regulation[labelName]) {
                // 过滤非校验类型
                if (regType === 'label') {
                    continue;
                }
                if (regulation[labelName][regType] && regulation[labelName][regType].reg) {
                    let regFnOpt = {
                        labelName,
                        regType,
                        value,
                        configs,
                        regulation
                    };
                    switch (regType) {
                        // 校验数据长度
                        case 'len':
                            regulation[labelName][regType].legal = oceanv[regType](data[labelName] ? data[labelName].length : 0, regulation[labelName][regType].reg);
                            regFnOpt.isLegal = regulation[labelName][regType].legal;
                            value = regFn(regFnOpt);
                            if (allError && !regFnOpt.isLegal) {
                                return value;
                            }
                            break;
                        // 校验数据格式
                        case 'format':
                        // 校验电话号码
                        case 'phone':
                        // 校验枚举种的一个数值
                        case 'inside':
                        // 校验枚举中的多个数值
                        case 'exclude':
                            regulation[labelName][regType].legal = oceanv[regType](data[labelName], regulation[labelName][regType].reg);
                            regFnOpt.isLegal = regulation[labelName][regType].legal;
                            value = regFn(regFnOpt);
                            if (allError && !regFnOpt.isLegal) {
                                return value;
                            }
                            break;
                        // 校验邮箱
                        case 'email':
                        // 校验数字
                        case 'number':
                        // 校验字符串
                        case 'string':
                        // 校验数字字符串
                        case 'numStr':
                        // 校验是否存在
                        case 'presence':
                        // 校验日期
                        case 'date':
                            regulation[labelName][regType].legal = oceanv[regType](data[labelName]);
                            regFnOpt.isLegal = regulation[labelName][regType].legal;
                            value = regFn(regFnOpt);
                            if (allError && !regFnOpt.isLegal) {
                                return value;
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
    return value;
};
// 注入对外调用的接口
oceanv.len = length;
oceanv.format = format;
oceanv.number = number;
oceanv.string = string;
oceanv.numStr = numStr;
oceanv.email = email;
oceanv.phone = phone;
oceanv.presence = presence;
oceanv.inside = inside;
oceanv.exclude = exclude;
oceanv.date = date;

export default oceanv;
