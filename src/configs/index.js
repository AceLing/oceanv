export default {
    reg: {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        phoneCode: {
            886:{
                text: '台灣886',
                // 10位
                reg: /^\d{10}$/
            },
            852:{
                text: '香港852',
                // 8位
                reg: /^\d{8}$/
            },
            853:{
                text: '澳門853',
                // 8位
                reg: /^\d{8}$/
            },
            86:{
                text: '中國大陸86',
                // 11位
                reg: /^\d{11}$/
            },
            60:{
                text: '馬來西亞60',
                // 1.首位是0，总长度10-11位
                // 2.首位非0，总长度9-10位
                reg: /(^0{1}[0-9]{9,10}$)|(^[1-9]{1}[0-9]{8,9}$)/
            },
            65:{
                text: '新加坡65',
                // 8位
                reg: /^\d{8}$/
            },
            66:{
                text: '泰國66',
                // 首位是0，总长度10位
                // 首位非0，总长度9位
                reg: /(^0{1}[0-9]{9}$)|(^[1-9]{1}[0-9]{8}$)/
            },
            84:{
                text: '越南84',
                // 1.首位是0，总长度10-11位
                // 2.首位非0，总长度9-10位
                reg: /(^0{1}[0-9]{9,10}$)|(^[1-9]{1}[0-9]{8,9}$)/
            },
            64:{
                text: '新西蘭64',
                reg: /^\-?([0-9]\d*|0)(\.\d+)?$/
            },
            1:{
                text: '美國1',
                // 10位
                reg: /^\d{10}$/
            },
            61:{
                text: '澳大利亞61',
                reg: /^\-?([0-9]\d*|0)(\.\d+)?$/
            },
            1:{
                text: '加拿大1',
                reg: /^\-?([0-9]\d*|0)(\.\d+)?$/
            },
            63:{
                text: '菲律賓63',
                reg: /^\d{10}$/
            },
            81:{
                text: '日本81',
                reg: /^\-?([0-9]\d*|0)(\.\d+)?$/
            },
            44:{
                text: '英國44',
                // 10位或0开头后面再加10位
                reg: /^0?[0-9]{10}$/
            },
            855:{
                text: '柬埔寨855',
                // 8位
                reg: /^\d{8}$/
            },
            91:{
                text: '印度91',
                reg: /^\-?([0-9]\d*|0)(\.\d+)?$/
            },
            62:{
                text: '印度尼西亞62',
                // 9-12位
                reg: /^\d{9,12}$/
            },
            82:{
                text: '韓國82',
                reg: /^\-?([0-9]\d*|0)(\.\d+)?$/
            },
            49:{
                text: '德國49',
                reg: /^\-?([0-9]\d*|0)(\.\d+)?$/
            },
            0:{
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