import oceanv from './index.js';
const data = {
    name: "oc@gm99.com",
    password: "12345612312421432431",
    verificationCode: '',
    phone: '15914314707123',
    team: 1,
    date: '2016-01-01 00:00:99'
};
const regulation = {
    name: {
        label: "用户名",
        len: {
            reg: '5,10',
            msg: "${label}长度必须为5到10个字符"
        },
        format: {
            reg: /^oc\.*/,
            msg: "${label}必须以 oc 开头"
        },
        email: {
            reg: '1',
            msg: '${label}必须是邮箱'
        },
        number: {
            reg: '1',
            msg: '${label}必须是数字'
        },
        string: {
            reg: '1',
            msg: '${label}必须是字符串'
        },
        numStr: {
            reg: '1',
            msg: '${label}必须是数字字符串'
        }
    },
    password: {
        label: "密码",
        len: {
            reg: '6,8',
            msg: "${label}长度必须为6到8个字符"
        }
    },
    phone: {
        label: '电话号码',
        phone: {
            reg: /^\d{11}$/,
            msg: '${label}必须是电话号码'
        }
    },
    verificationCode: {
        label: '验证码',
        presence: {
            reg: '1',
            msg: '必须填写验证码'
        }
    },
    team: {
        label: '队伍',
        exclude: {
            reg: [1,2,3,4,5],
            msg: '必须不能是1,2,3,4,5之一'
        }
    },
    date: {
        label: '日期',
        date: {
            reg: '1',
            msg: '必须是日期'
        }
    }
};

// let format = (txt, compress) => {
//     /* 格式化JSON源码(对象转换为JSON文本) */
//     var indentChar = '    ';
//     if(/^\s*$/.test(txt)){
//         alert('数据为空,无法格式化! ');
//         return;
//     }
//     try {
//         var data = eval('('+txt+')');
//     }
//     catch(e){
//         alert('数据源语法错误,格式化失败! 错误信息: '+e.description,'err');
//         return
//     };
//     var draw=[],last=false,This=this,line=compress?'':'\n',nodeCount=0,maxDepth=0;
       
//     let notify = (name, value, isLast, indent, formObj) => {
//         nodeCount++;/*节点计数*/
//         for (var i=0,tab='';i<indent;i++ )tab+=indentChar;/* 缩进HTML */
//         tab=compress?'':tab;/*压缩模式忽略缩进*/
//         maxDepth=++indent;/*缩进递增并记录*/
//         if(value&&value.constructor==Array){/*处理数组*/
//             draw.push(tab+(formObj?('"'+name+'":'):'')+'['+line);/*缩进'[' 然后换行*/
//             for (var i=0;i<value.length;i++)
//                 notify(i,value[i],i==value.length-1,indent,false);
//             draw.push(tab+']'+(isLast?line:(','+line)));/*缩进']'换行,若非尾元素则添加逗号*/
//         }else   if(value&&typeof value=='object'){/*处理对象*/  
//                 draw.push(tab+(formObj?('"'+name+'":'):'')+'{'+line);/*缩进'{' 然后换行*/
//                 var len=0,i=0;
//                 for(var key in value)len++;
//                 for(var key in value)notify(key,value[key],++i==len,indent,true);
//                 draw.push(tab+'}'+(isLast?line:(','+line)));/*缩进'}'换行,若非尾元素则添加逗号*/
//             }else{
//                     if(typeof value=='string')value='"'+value+'"';   
//                     draw.push(tab+(formObj?('"'+name+'":'):'')+value+(isLast?'':',')+line);
//             };
//     };
//     var isLast=true,indent=0;
//     notify('', data, isLast, indent, false);
//     return draw.join('');
// }

console.log('allError 为 false: ');
console.log(oceanv(data, regulation, false));
console.log('allError 为 true: ');
console.log(oceanv(data, regulation, true));
