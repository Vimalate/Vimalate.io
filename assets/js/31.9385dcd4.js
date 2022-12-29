(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{747:function(t,s,n){"use strict";n.r(s);var a=n(13),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("strong",[t._v("原题")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("给定一个整数 n，返回 n! 结果尾数中零的数量。\n\n示例 1:\n\n输入: 3\n输出: 0\n解释: 3! = 6, 尾数中没有零。\n示例 2:\n\n输入: 5\n输出: 1\n解释: 5! = 120, 尾数中有 1 个零.\n说明: 你算法的时间复杂度应为 O(log n) 。\n")])])]),n("p",[n("strong",[t._v("解 ：")])]),t._v(" "),n("p",[t._v("找阶乘后的零，很简单的，我们发现，当 n 为 5 的因数时，就会有"),n("code",[t._v("5*2 、10*1")]),t._v(" ,阶乘后末尾就会有零，所以我们列出一些情况。")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("n")]),t._v(" "),n("th",[t._v("零的个数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("5")]),t._v(" "),n("td",[t._v("1")])]),t._v(" "),n("tr",[n("td",[t._v("10")]),t._v(" "),n("td",[t._v("2")])]),t._v(" "),n("tr",[n("td",[t._v("15")]),t._v(" "),n("td",[t._v("3")])]),t._v(" "),n("tr",[n("td",[t._v("20")]),t._v(" "),n("td",[t._v("4")])]),t._v(" "),n("tr",[n("td",[t._v("25")]),t._v(" "),n("td",[t._v("6")])]),t._v(" "),n("tr",[n("td",[t._v("30")]),t._v(" "),n("td",[t._v("7")])]),t._v(" "),n("tr",[n("td",[t._v("35")]),t._v(" "),n("td",[t._v("8")])]),t._v(" "),n("tr",[n("td",[t._v("40")]),t._v(" "),n("td",[t._v("9")])]),t._v(" "),n("tr",[n("td",[t._v("45")]),t._v(" "),n("td",[t._v("10")])]),t._v(" "),n("tr",[n("td",[t._v("50")]),t._v(" "),n("td",[t._v("12")])])])]),t._v(" "),n("p",[t._v("我们发现，当 n 为5 的倍数时，逐渐增长，但当 n 为25 ，50 时出现了意外，稍加思索就会发现，当 n 为 25 的倍数时，阶乘时会有 "),n("code",[t._v("25*4")]),t._v(" 出现两个零")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("trailingZeroes")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//只要还为5的倍数，就继续相加")]),t._v("\n        sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);