(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{672:function(t,s,a){t.exports=a.p+"assets/img/speed.f4c89732.png"},705:function(t,s,a){t.exports=a.p+"assets/img/cache.43f73502.png"},920:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("公司的后台管理项目是一个持续开发迭代好几年的项目了，随着功能模块的增加，代码的逐渐膨胀，单次项目的启动已经达到了惊人的2min之长。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(672),alt:""}})]),t._v(" "),e("p",[t._v("平时我们前端小伙伴的日常开发状态是这样，打开项目，输入命令：\n"),e("code",[t._v("npm run serve")]),t._v(",  然后就可以拿起茶杯去倒水，或者起身优哉游哉的去上个厕所了，正可谓合理摸鱼。")]),t._v(" "),e("p",[t._v("于是终于有一天，忍无可忍之下，我决定优化一下这个项目的启动时间。")]),t._v(" "),e("h2",{attrs:{id:"项目分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目分析"}},[t._v("#")]),t._v(" 项目分析")]),t._v(" "),e("p",[t._v("首先我们考虑的是哪些导致我们的项目启动耗时过慢，经过一顿搜索，找到了 "),e("code",[t._v("speed-measure-webpack-plugin")]),t._v(" 这个插件。这个插件可以测量你的 webpack 构建速度。")]),t._v(" "),e("h2",{attrs:{id:"安装-speed-measure-webpack-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-speed-measure-webpack-plugin"}},[t._v("#")]),t._v(" 安装 speed-measure-webpack-plugin")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i speed-measure-webpack-plugin -D\n")])])]),e("p",[t._v("然后我们在 vue.config.js 进行相应配置")]),t._v(" "),e("p",[t._v("vue.config.js")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" SpeedMeasurePlugin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"speed-measure-webpack-plugin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" smp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpeedMeasurePlugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outputFormat")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"human"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("configureWebpack")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" smp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wrap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("然后再次启动项目，就可以看到项目运行时间分析了：\n"),e("img",{attrs:{src:a(672),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"_1、使用自带的cache配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、使用自带的cache配置"}},[t._v("#")]),t._v(" 1、使用自带的cache配置")]),t._v(" "),e("p",[t._v("既然我们已经知道了项目耗时，那么首先想到的是能否利用缓存来提高构建速度。")]),t._v(" "),e("p",[t._v("很巧的是，webpack 正好提供了缓存机制")]),t._v(" "),e("p",[e("img",{attrs:{src:a(705),alt:""}})]),t._v(" "),e("p",[t._v("我们可以在 vue.config.js 中配置缓存机制：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cache")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("配置后我们进行重启，对比")]),t._v(" "),e("p",[e("img",{attrs:{src:"img/%E5%AF%B9%E6%AF%941.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"_2、使用-hard-source-webpack-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、使用-hard-source-webpack-plugin"}},[t._v("#")]),t._v(" 2、使用 hard-source-webpack-plugin")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("cnpm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" hard-source-webpack-plugin --save\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//然后我们在vue.config.js中设置：")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HardSourceWebpackPlugin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hard-source-webpack-plugin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("configureWebpack")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" smp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wrap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为模块提供中间缓存，缓存路径是：node_modules/.cache/hard-source")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HardSourceWebpackPlugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])]),e("blockquote",[e("p",[t._v("HardSourceWebpackPlugin 和 speed-measure-webpack-plugin 不能一起使用")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://hellowordjava.blog.csdn.net/article/details/119881095?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-119881095-blog-117809500.pc_relevant_sortByStrongTime&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-119881095-blog-117809500.pc_relevant_sortByStrongTime&utm_relevant_index=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://juejin.cn/post/6979879230297341989",target:"_blank",rel:"noopener noreferrer"}},[t._v("我是如何把vue项目启动时间从70s优化到7秒的"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://juejin.cn/post/6961203055257714702#comment",target:"_blank",rel:"noopener noreferrer"}},[t._v("一行可以让项目启动快70%以上的代码"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);