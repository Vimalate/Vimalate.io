(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{938:function(e,n,t){"use strict";t.r(n);var a=t(13),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"使用-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-plugin"}},[e._v("#")]),e._v(" 使用 plugin")]),e._v(" "),t("p",[e._v("webpack 中的 plugin 大多都提供额外的能力，它们在 webpack 中的配置都只是把插件实例添加到 "),t("code",[e._v("plugins")]),e._v(" 字段的数组中。不过由于需要提供不同的功能，不同的插件本身的配置比较多样化。")]),e._v(" "),t("p",[e._v("社区中有很多 webpack 插件可供使用，而优秀的插件基本上都提供了详细的使用说明文档。更多的插件可以在这里查找："),t("a",{attrs:{href:"https://github.com/webpack-contrib/awesome-webpack#webpack-plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("plugins in awesome-webpack"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("下面通过介绍几个常用的插件来了解插件的使用方法。")]),e._v(" "),t("h2",{attrs:{id:"defineplugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#defineplugin"}},[e._v("#")]),e._v(" DefinePlugin")]),e._v(" "),t("p",[e._v("DefinePlugin 是 webpack 内置的插件，可以使用 "),t("code",[e._v("webpack.DefinePlugin")]),e._v(" 直接获取。")]),e._v(" "),t("p",[e._v("这个插件用于创建一些在编译时可以配置的全局常量，这些常量的值我们可以在 webpack 的配置中去指定，例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module.exports = {\n  // ...\n  plugins: [\n    new webpack.DefinePlugin({\n      PRODUCTION: JSON.stringify(true), // const PRODUCTION = true\n      VERSION: JSON.stringify('5fa3b9'), // const VERSION = '5fa3b9'\n      BROWSER_SUPPORTS_HTML5: true, // const BROWSER_SUPPORTS_HTML5 = 'true'\n      TWO: '1+1', // const TWO = 1 + 1,\n      CONSTANTS: {\n        APP_VERSION: JSON.stringify('1.1.2') // const CONSTANTS = { APP_VERSION: '1.1.2' }\n      }\n    }),\n  ],\n}\n\n")])])]),t("p",[e._v("有了上面的配置，就可以在应用代码文件中，访问配置好的变量了，如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('console.log("Running App version " + VERSION);\n\nif(!BROWSER_SUPPORTS_HTML5) require("html5shiv");\n\n')])])]),t("p",[e._v("上面配置的注释已经简单说明了这些配置的效果，这里再简述一下整个配置规则。")]),e._v(" "),t("ul",[t("li",[e._v("如果配置的值是字符串，那么整个字符串会被当成代码片段来执行，其结果作为最终变量的值，如上面的 "),t("code",[e._v('"1+1"')]),e._v("，最后的结果是 "),t("code",[e._v("2")])]),e._v(" "),t("li",[e._v("如果配置的值不是字符串，也不是一个对象字面量，那么该值会被转为一个字符串，如 "),t("code",[e._v("true")]),e._v("，最后的结果是 "),t("code",[e._v("'true'")])]),e._v(" "),t("li",[e._v("如果配置的是一个对象字面量，那么该对象的所有 key 会以同样的方式去定义")])]),e._v(" "),t("p",[e._v("这样我们就可以理解为什么要使用 "),t("code",[e._v("JSON.stringify()")]),e._v(" 了，因为 "),t("code",[e._v("JSON.stringify(true)")]),e._v(" 的结果是 "),t("code",[e._v("'true'")]),e._v("，"),t("code",[e._v('JSON.stringify("5fa3b9")')]),e._v(" 的结果是 "),t("code",[e._v('"5fa3b9"')]),e._v("。")]),e._v(" "),t("p",[e._v("社区中关于 DefinePlugin 使用得最多的方式是定义环境变量，例如 "),t("code",[e._v("PRODUCTION = true")]),e._v(" 或者 "),t("code",[e._v("__DEV__ = true")]),e._v(" 等。部分类库在开发环境时依赖这样的环境变量来给予开发者更多的开发调试反馈，例如 "),t("code",[e._v("react")]),e._v(" 等。")]),e._v(" "),t("blockquote",[t("p",[e._v("建议使用 process.env.NODE_ENV: ... 的方式来定义 process.env.NODE_ENV，而不是使用 process: { env: { NODE_ENV: ... } } 的方式，因为这样会覆盖掉 process 这个对象，可能会对其他代码造成影响。")])]),e._v(" "),t("h2",{attrs:{id:"copy-webpack-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy-webpack-plugin"}},[e._v("#")]),e._v(" copy-webpack-plugin")]),e._v(" "),t("p",[e._v("这个插件看名字就知道它有什么作用，没错，就是用来复制文件的。")]),e._v(" "),t("p",[e._v("我们一般会把开发的所有源码和资源文件放在 src/ 目录下，构建的时候产出一个 build/ 目录，通常会直接拿 build 中的所有文件来发布。有些文件没经过 webpack 处理，但是我们希望它们也能出现在 build 目录下，这时就可以使用 CopyWebpackPlugin 来处理了。")]),e._v(" "),t("p",[e._v("我们来看下如何配置这个插件：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const CopyWebpackPlugin = require('copy-webpack-plugin')\n\nmodule.exports = {\n  // ...\n  plugins: [\n    new CopyWebpackPlugin([\n      { from: 'src/file.txt', to: 'build/file.txt', }, // 顾名思义，from 配置来源，to 配置目标路径\n      { from: 'src/*.ico', to: 'build/*.ico' }, // 配置项可以使用 glob\n      // 可以配置很多项复制规则\n    ]),\n  ],\n}\n\n")])])]),t("blockquote",[t("p",[e._v("glob 用法可以参考 "),t("a",{attrs:{href:"https://github.com/isaacs/node-glob#glob-primer",target:"_blank",rel:"noopener noreferrer"}},[e._v("glob-primer"),t("OutboundLink")],1),e._v("。")])]),e._v(" "),t("p",[e._v("上述的配置日常应用已经足够，更多的配置内容可以参考 "),t("a",{attrs:{href:"https://github.com/webpack-contrib/copy-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("copy-webpack-plugin"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"extract-text-webpack-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extract-text-webpack-plugin"}},[e._v("#")]),e._v(" extract-text-webpack-plugin")]),e._v(" "),t("p",[e._v("extract-text-webpack-plugin 之前的章节有简单介绍过，我们用它来把依赖的 CSS 分离出来成为单独的文件。这里再看一下使用 extract-text-webpack-plugin 的配置：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const ExtractTextPlugin = require('extract-text-webpack-plugin')\n\nmodule.exports = {\n  // ...\n  module: {\n    rules: [\n      {\n        test: /\\.css$/,\n        // 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader\n        use: ExtractTextPlugin.extract({ \n          fallback: 'style-loader',\n          use: 'css-loader',\n        }), \n      },\n    ],\n  },\n  plugins: [\n    // 引入插件，配置文件名，这里同样可以使用 [hash]\n    new ExtractTextPlugin('index.css'),\n  ],\n}\n\n")])])]),t("p",[e._v("在上述的配置中，我们使用了 index.css 作为单独分离出来的文件名，但有的时候构建入口不止一个，extract-text-webpack-plugin 会为每一个入口创建单独分离的文件，因此最好这样配置：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("plugins: [\n  new ExtractTextPlugin('[name].css'),\n],\n\n")])])]),t("p",[e._v("这样确保在使用多个构建入口时，生成不同名称的文件。")]),e._v(" "),t("p",[e._v("这里再次提及 extract-text-webpack-plugin，一个原因是它是一个蛮常用的插件，另一个原因是它的使用方式比较特别，除了在 "),t("code",[e._v("plugins")]),e._v(" 字段添加插件实例之外，还需要调整 loader 对应的配置。")]),e._v(" "),t("p",[e._v("在这里要强调的是，在 webpack 中，loader 和 plugin 的区分是很清楚的，针对文件模块转换要做的使用 loader，而其他干涉构建内容的可以使用 plugin。 ExtractTextWebpackPlugin 既提供了 plugin，也提供了 extract 方法来获取对应需要的 loader。")]),e._v(" "),t("h2",{attrs:{id:"provideplugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#provideplugin"}},[e._v("#")]),e._v(" ProvidePlugin")]),e._v(" "),t("p",[e._v("ProvidePlugin 也是一个 webpack 内置的插件，我们可以直接使用 "),t("code",[e._v("webpack.ProvidePlugin")]),e._v(" 来获取。")]),e._v(" "),t("p",[e._v("该组件用于引用某些模块作为应用运行时的变量，从而不必每次都用 "),t("code",[e._v("require")]),e._v(" 或者 "),t("code",[e._v("import")]),e._v("，其用法相对简单：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("new webpack.ProvidePlugin({\n  identifier: 'module',\n  // ...\n})\n\n// 或者\nnew webpack.ProvidePlugin({\n  identifier: ['module', 'property'], // 即引用 module 下的 property，类似 import { property } from 'module'\n  // ...\n})\n\n")])])]),t("p",[e._v("在你的代码中，当 "),t("code",[e._v("identifier")]),e._v(" 被当作未赋值的变量时，module 就会被自动加载了，而 "),t("code",[e._v("identifier")]),e._v(" 这个变量即 module 对外暴露的内容。")]),e._v(" "),t("p",[e._v("注意，如果是 ES 的 "),t("code",[e._v("default export")]),e._v("，那么你需要指定模块的 "),t("code",[e._v("default")]),e._v(" 属性："),t("code",[e._v("identifier: ['module', 'default'],")]),e._v("。")]),e._v(" "),t("p",[e._v("更多使用例子可以查看官方文档 "),t("a",{attrs:{href:"https://doc.webpack-china.org/plugins/provide-plugin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProvidePlugin"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"ignoreplugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ignoreplugin"}},[e._v("#")]),e._v(" IgnorePlugin")]),e._v(" "),t("p",[e._v("IgnorePlugin 和 ProvidePlugin 一样，也是一个 webpack 内置的插件，可以直接使用 "),t("code",[e._v("webpack.IgnorePlugin")]),e._v(" 来获取。")]),e._v(" "),t("p",[e._v("这个插件用于忽略某些特定的模块，让 webpack 不把这些指定的模块打包进去。例如我们使用 "),t("a",{attrs:{href:"http://momentjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("moment.js"),t("OutboundLink")],1),e._v("，直接引用后，里边有大量的 i18n 的代码，导致最后打包出来的文件比较大，而实际场景并不需要这些 i18n 的代码，这时我们可以使用 IgnorePlugin 来忽略掉这些代码文件，配置如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module.exports = {\n  // ...\n  plugins: [\n    new webpack.IgnorePlugin(/^\\.\\/locale$/, /moment$/)\n  ]\n}\n\n")])])]),t("p",[e._v("IgnorePlugin 配置的参数有两个，第一个是匹配引入模块路径的正则表达式，第二个是匹配模块的对应上下文，即所在目录名。")]),e._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),t("p",[e._v("本小节介绍了几个相对常见的 webpack plugin 的使用：")]),e._v(" "),t("ul",[t("li",[e._v("DefinePlugin")]),e._v(" "),t("li",[e._v("copy-webpack-plugin")]),e._v(" "),t("li",[e._v("extract-text-webpack-plugin")]),e._v(" "),t("li",[e._v("ProvidePlugin")]),e._v(" "),t("li",[e._v("IgnorePlugin")])]),e._v(" "),t("p",[e._v("更多其他组件的使用就请有兴趣的同学自行摸索了："),t("a",{attrs:{href:"https://github.com/webpack-contrib/awesome-webpack#webpack-plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("plugins in awesome-webpack"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[e._v("#")]),e._v(" 例子")]),e._v(" "),t("p",[e._v("本小节提及的一些简单的 Demo 可以在 "),t("a",{attrs:{href:"https://github.com/teabyii/webpack-examples",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack-examples"),t("OutboundLink")],1),e._v(" 找到。")])])}),[],!1,null,null,null);n.default=r.exports}}]);