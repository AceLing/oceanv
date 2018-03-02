// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({8:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const _int = (data, reg) => {
  console.log('_int');
};
const _float = (data, reg) => {
  console.log('_float');
};
const _max = (data, reg) => {
  console.log('_max');
};
const _min = (data, reg) => {
  console.log('_min');
};
const _boolean = (data, reg) => {
  console.log('_boolean');
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
};
const equalTo = (data, reg) => {
  console.log('equalTo');
};
const notEqualTo = (data, reg) => {
  console.log('notEqualTo');
};
const moreThan = (data, reg) => {
  console.log('moreThan');
};
const lessThan = (data, reg) => {
  console.log('lessThan');
};
const notMoreThan = (data, reg) => {
  console.log('notMoreThan');
};
const notLessThan = (data, reg) => {
  console.log('notLessThan');
};
const _match = (data, _matchFn) => {
  console.log('_match');
};
const setMsg = options => {
  return false;
};

exports.default = {
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
},{}],9:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  reg: {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phoneCode: {
      886: {
        text: '台灣886',
        // 10位
        reg: /^\d{10}$/
      },
      852: {
        text: '香港852',
        // 8位
        reg: /^\d{8}$/
      },
      853: {
        text: '澳門853',
        // 8位
        reg: /^\d{8}$/
      },
      86: {
        text: '中國大陸86',
        // 11位
        reg: /^\d{11}$/
      },
      60: {
        text: '馬來西亞60',
        // 1.首位是0，总长度10-11位
        // 2.首位非0，总长度9-10位
        reg: /(^0{1}[0-9]{9,10}$)|(^[1-9]{1}[0-9]{8,9}$)/
      },
      65: {
        text: '新加坡65',
        // 8位
        reg: /^\d{8}$/
      },
      66: {
        text: '泰國66',
        // 首位是0，总长度10位
        // 首位非0，总长度9位
        reg: /(^0{1}[0-9]{9}$)|(^[1-9]{1}[0-9]{8}$)/
      },
      84: {
        text: '越南84',
        // 1.首位是0，总长度10-11位
        // 2.首位非0，总长度9-10位
        reg: /(^0{1}[0-9]{9,10}$)|(^[1-9]{1}[0-9]{8,9}$)/
      },
      64: {
        text: '新西蘭64',
        reg: /^\-?([0-9]\d*|0)(\.\d+)?$/
      },
      1: {
        text: '美國1',
        // 10位
        reg: /^\d{10}$/
      },
      61: {
        text: '澳大利亞61',
        reg: /^\-?([0-9]\d*|0)(\.\d+)?$/
      },
      1: {
        text: '加拿大1',
        reg: /^\-?([0-9]\d*|0)(\.\d+)?$/
      },
      63: {
        text: '菲律賓63',
        reg: /^\d{10}$/
      },
      81: {
        text: '日本81',
        reg: /^\-?([0-9]\d*|0)(\.\d+)?$/
      },
      44: {
        text: '英國44',
        // 10位或0开头后面再加10位
        reg: /^0?[0-9]{10}$/
      },
      855: {
        text: '柬埔寨855',
        // 8位
        reg: /^\d{8}$/
      },
      91: {
        text: '印度91',
        reg: /^\-?([0-9]\d*|0)(\.\d+)?$/
      },
      62: {
        text: '印度尼西亞62',
        // 9-12位
        reg: /^\d{9,12}$/
      },
      82: {
        text: '韓國82',
        reg: /^\-?([0-9]\d*|0)(\.\d+)?$/
      },
      49: {
        text: '德國49',
        reg: /^\-?([0-9]\d*|0)(\.\d+)?$/
      },
      0: {
        text: '其他',
        reg: /^\-?([0-9]\d*|0)(\.\d+)?$/
      }
    }
  },
  tips: {
    isLegal: '验证通过'
  },
  labelReg: /\$\{label\}/g
};
},{}],7:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Validator {
  constructor() {}
  validate(data, reg) {}
  equalTo(data) {
    console.log(data);
  }
  lessThan(data) {}
  moreThan(data) {}
}
exports.default = Validator;
},{}],3:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Validator = require("./Validator");

var _Validator2 = _interopRequireDefault(_Validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NumberValidator extends _Validator2.default {
  constructor() {
    super();
  }
  legal(data) {
    const reg = /^[-+]?[0-9]+$/;
    return typeof data === 'number' && reg.test(data);
  }
}
exports.default = NumberValidator;
},{"./Validator":7}],4:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Validator = require("./Validator");

var _Validator2 = _interopRequireDefault(_Validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NumStrValidator extends _Validator2.default {
  constructor() {
    super();
  }
  legal(data) {
    const reg = /^[-+]?[0-9]+$/;
    return typeof data === 'string' && reg.test(data);
  }
}
exports.default = NumStrValidator;
},{"./Validator":7}],5:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Validator = require("./Validator");

var _Validator2 = _interopRequireDefault(_Validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NumberValidator extends _Validator2.default {
  constructor() {
    super();
  }
  legal(data) {
    return typeof data === 'string';
  }
}
exports.default = NumberValidator;
},{"./Validator":7}],6:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Validator = require("./Validator");

var _Validator2 = _interopRequireDefault(_Validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DateValidator extends _Validator2.default {
  constructor() {
    super();
  }
  legal(data) {
    let date = Date.parse(data);
    return !isNaN(date) ? true : false;
  }
}
exports.default = DateValidator;
},{"./Validator":7}],2:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require("./src/utils");

var _utils2 = _interopRequireDefault(_utils);

var _configs = require("./src/configs");

var _configs2 = _interopRequireDefault(_configs);

var _NumberValidator = require("./src/class/NumberValidator");

var _NumberValidator2 = _interopRequireDefault(_NumberValidator);

var _NumStrValidator = require("./src/class/NumStrValidator");

var _NumStrValidator2 = _interopRequireDefault(_NumStrValidator);

var _StringValidator = require("./src/class/StringValidator");

var _StringValidator2 = _interopRequireDefault(_StringValidator);

var _DateValidator = require("./src/class/DateValidator");

var _DateValidator2 = _interopRequireDefault(_DateValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
};
const number = data => {
  const numberValidator = new _NumberValidator2.default();
  return numberValidator.legal(data);
};
const string = data => {
  const stringValidator = new _StringValidator2.default();
  return stringValidator.legal(data);
};
const numStr = data => {
  const numStrValidator = new _NumStrValidator2.default();
  return numStrValidator.legal(data);
};
const email = data => {
  return _configs2.default.reg.email.test(data);
};
const phone = (data, reg) => {
  if (!reg) {
    return;
  }
  return !!reg && reg.test(data);
};
const date = data => {
  const dateValidator = new _DateValidator2.default();
  return dateValidator.legal(data);
};
const presence = data => {
  let result = false;
  if (data === 0) {
    data = data.toString();
  }
  result = data ? true : false;
  return result;
};
const inside = (data, reg) => {
  let result = false;
  if (reg && data) {
    result = reg.indexOf(data) === -1 ? false : true;
  }
  return result;
};
const exclude = (data, reg) => {
  let result = false;
  if (reg && data) {
    result = reg.indexOf(data) === -1 ? true : false;
  }
  return result;
};
const format = (data, reg) => {
  let result = false;
  if (reg && data) {
    result = reg.test(data);
  }
  return result;
};

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
  for (let labelName in regulation) {
    if (regulation[labelName]) {
      value.msg[labelName] = new Array();
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
            configs: _configs2.default,
            regulation
          };
          switch (regType) {
            // 校验数据长度
            case 'len':
              regulation[labelName][regType].legal = oceanv[regType](data[labelName] ? data[labelName].length : 0, regulation[labelName][regType].reg);
              regFnOpt.isLegal = regulation[labelName][regType].legal;
              value = regFn(regFnOpt);
              if (allError && !isLegal) {
                return tempValue;
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
              if (allError && !isLegal) {
                return tempValue;
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
              if (allError && !isLegal) {
                return tempValue;
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

exports.default = oceanv;
},{"./src/utils":8,"./src/configs":9,"./src/class/NumberValidator":3,"./src/class/NumStrValidator":4,"./src/class/StringValidator":5,"./src/class/DateValidator":6}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://' + window.location.hostname + ':54459/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,2])