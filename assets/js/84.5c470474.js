(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{372:function(s,t,v){"use strict";v.r(t);var a=v(4),_=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),t("p",[s._v("请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。")]),s._v(" "),t("p",[t("strong",[s._v("数值")]),s._v("（按顺序）可以分成以下几个部分：")]),s._v(" "),t("ol",[t("li",[s._v("若干空格")]),s._v(" "),t("li",[s._v("一个 小数 或者 整数")]),s._v(" "),t("li",[s._v("（可选）一个 'e' 或 'E' ，后面跟着一个 整数")]),s._v(" "),t("li",[s._v("若干空格")])]),s._v(" "),t("p",[t("strong",[s._v("小数")]),s._v("（按顺序）可以分成以下几个部分：")]),s._v(" "),t("ol",[t("li",[s._v("（可选）一个符号字符（'+' 或 '-'）")]),s._v(" "),t("li",[s._v("下述格式之一：")])]),s._v(" "),t("ul",[t("li",[s._v("至少一位数字，后面跟着一个点 '.'")]),s._v(" "),t("li",[s._v("至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字")]),s._v(" "),t("li",[s._v("一个点 '.' ，后面跟着至少一位数字")])]),s._v(" "),t("p",[t("strong",[s._v("整数")]),s._v("（按顺序）可以分成以下几个部分：")]),s._v(" "),t("ol",[t("li",[s._v("（可选）一个符号字符（'+' 或 '-'）")]),s._v(" "),t("li",[s._v("至少一位数字")])]),s._v(" "),t("p",[s._v("部分数值列举如下：")]),s._v(" "),t("p",[t("code",[s._v('["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]')])]),s._v(" "),t("p",[s._v("部分非数值列举如下：")]),s._v(" "),t("p",[t("code",[s._v('["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]')])]),s._v(" "),t("p",[t("strong",[s._v("提示：")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("1 <= s.length <= 20")])]),s._v(" "),t("li",[t("code",[s._v("s 仅含英文字母（大写和小写），数字（0-9），加号 '+' ，减号 '-' ，空格 ' ' 或者点 '.'")]),s._v(" 。")])]),s._v(" "),t("h2",{attrs:{id:"测试用例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试用例"}},[s._v("#")]),s._v(" 测试用例")]),s._v(" "),t("p",[s._v("示例 1：")]),s._v(" "),t("ul",[t("li",[s._v("输入："),t("code",[s._v('s = "0"')])]),s._v(" "),t("li",[s._v("输出："),t("code",[s._v("true")])])]),s._v(" "),t("p",[s._v("示例 2：")]),s._v(" "),t("ul",[t("li",[s._v("输入："),t("code",[s._v('s = "e"')])]),s._v(" "),t("li",[s._v("输出："),t("code",[s._v("false")])])]),s._v(" "),t("p",[s._v("示例 3：")]),s._v(" "),t("ul",[t("li",[s._v("输入："),t("code",[s._v('s = "."')])]),s._v(" "),t("li",[s._v("输出："),t("code",[s._v("false")])])]),s._v(" "),t("p",[s._v("示例 4：")]),s._v(" "),t("ul",[t("li",[s._v("输入："),t("code",[s._v('s = " .1 "')])]),s._v(" "),t("li",[s._v("输出："),t("code",[s._v("true")])])]),s._v(" "),t("h2",{attrs:{id:"代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[s._v("#")]),s._v(" 代码实现")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("字符串从头到尾，因为我们要字符串完全匹配，所以要配置"),t("code",[s._v("^")]),s._v("和"),t("code",[s._v("$")]),s._v("定义匹配整个字符串")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("(\\+|\\-)?")]),s._v(" 表示正负号，可以有，但有的话只能有一个")])]),s._v(" "),t("li",[t("p",[s._v("小数分情况考虑，因为"),t("code",[s._v(".1, 0.1, 1.")]),s._v("三种情况都是符合要求的")])]),s._v(" "),t("li",[t("p",[s._v("把"),t("code",[s._v("0.1, 1.")]),s._v("作为一个情况考虑 —— "),t("code",[s._v("(\\d+(\\.\\d*)?)")]),s._v(" —— 小数点前必须有数字，后面必须接挨着有"),t("code",[s._v(".")]),s._v("，后面可以没有数字，所以用"),t("code",[s._v("*")]),s._v("，同时，小数点和数字这个组合可以有，但是有的话只能有一个（"),t("code",[s._v(".1.2.3")]),s._v("这种是不符合的），所以使用"),t("code",[s._v("?")]),s._v("来匹配")])]),s._v(" "),t("li",[t("p",[s._v("第二种情况匹配"),t("code",[s._v(".1")]),s._v(" —— "),t("code",[s._v("(\\.\\d+)")]),s._v("，除了"),t("code",[s._v(".11311")]),s._v("这种形式，其他状态都是不匹配的")])]),s._v(" "),t("li",[t("p",[s._v("最后就是e的情况 —— "),t("code",[s._v("([eE][+\\-]?\\d+)?")])]),s._v(" "),t("p",[s._v("表示匹配一个e(或 E)，紧接着一个"),t("code",[s._v("+")]),s._v("或者"),t("code",[s._v("-")]),s._v("号以及一个或多个数字，同时这个整体也是要么有一个，要么就没有，所以使用"),t("code",[s._v("？")]),s._v("（"),t("code",[s._v("1e21e21e2")]),s._v("这种是不符合的）")])])]),s._v(" "),t("p",[s._v("正则匹配")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {string} s\n * @return {boolean}\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("isNumber")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("s")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("trim")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" reg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^[+\\-]?((\\d+(\\.\\d*)?)|(\\.\\d+))([eE][+\\-]?\\d+)?$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" reg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);t.default=_.exports}}]);