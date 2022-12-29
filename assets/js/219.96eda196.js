(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{940:function(e,t,n){"use strict";n.r(t);var r=n(13),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"优化前端资源加载-1-图片加载优化和代码压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优化前端资源加载-1-图片加载优化和代码压缩"}},[e._v("#")]),e._v(" 优化前端资源加载 1 - 图片加载优化和代码压缩")]),e._v(" "),n("p",[e._v("前面我们已经提及如何使用 webpack 来满足不同环境的构建需求，其中在生产环境构建时会做额外的一些工作，例如代码压缩等。这一部分的工作就是这一小节的主题，即优化前端资源的加载性能。")]),e._v(" "),n("p",[e._v("我们总是希望浏览器在加载页面时用的时间越短越好，所以构建出来的文件应该越少越小越好，一来减少浏览器需要发起请求的数量，二来减少下载静态资源的时间。")]),e._v(" "),n("p",[e._v("其实 webpack 把多个代码文件打包成几个必需的静态资源，已经很大程度减少了静态资源请求数量了，接下来我们来介绍下如何使用 webpack 实现更多的前端资源加载的优化需求。")]),e._v(" "),n("h2",{attrs:{id:"css-sprites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-sprites"}},[e._v("#")]),e._v(" CSS Sprites")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS Sprites"),n("OutboundLink")],1),e._v(" 技术是前端领域一种很常见的用于减少图片资源请求数的优化方式，这里不做详细的介绍。")]),e._v(" "),n("blockquote",[n("p",[e._v("在了解 webpack 配置之前，需要明白 CSS Sprites 的原理。")])]),e._v(" "),n("p",[e._v("如果你使用的 webpack 3.x 版本，需要 CSS Sprites 的话，可以使用 "),n("a",{attrs:{href:"https://github.com/mixtur/webpack-spritesmith",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack-spritesmith"),n("OutboundLink")],1),e._v(" 或者 "),n("a",{attrs:{href:"https://github.com/kezoo/sprite-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("sprite-webpack-plugin"),n("OutboundLink")],1),e._v("。")]),e._v(" "),n("p",[e._v("我们以 webpack-spritesmith 为例，先安装依赖：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm install webpack-spritesmith --save-dev\n\n")])])]),n("p",[e._v("在 webpack 的配置中应用该插件：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("module: {\n  loaders: [\n    // ... 这里需要有处理图片的 loader，如 file-loader\n  ]\n},\nresolve: {\n  modules: [\n    'node_modules', \n    'spritesmith-generated', // webpack-spritesmith 生成所需文件的目录\n  ],\n},\nplugins: [\n  new SpritesmithPlugin({\n    src: {\n      cwd: path.resolve(__dirname, 'src/ico'), // 多个图片所在的目录\n      glob: '*.png' // 匹配图片的路径\n    },\n    target: {\n      // 生成最终图片的路径\n      image: path.resolve(__dirname, 'src/spritesmith-generated/sprite.png'), \n      // 生成所需 SASS/LESS/Stylus mixins 代码，我们使用 Stylus 预处理器做例子\n      css: path.resolve(__dirname, 'src/spritesmith-generated/sprite.styl'), \n    },\n    apiOptions: {\n      cssImageRef: \"~sprite.png\"\n    },\n  }),\n],\n\n")])])]),n("p",[e._v("在你需要的样式代码中引入 "),n("code",[e._v("sprite.styl")]),e._v(" 后调用需要的 mixins 即可：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@import '~sprite.styl'\n\n.close-button\n    sprite($close)\n.open-button\n    sprite($open)\n\n")])])]),n("p",[e._v("更多的 webpack-spritesmith 配置可以参考："),n("a",{attrs:{href:"https://github.com/mixtur/webpack-spritesmith#config",target:"_blank",rel:"noopener noreferrer"}},[e._v("Config of webpack-spritesmith"),n("OutboundLink")],1),e._v("。")]),e._v(" "),n("p",[e._v("遗憾的是，上面提到的这两个 plugin 还没更新到支持 webpack 4.x 版本，如果你使用的是 webpack 4.x，你需要配合使用 "),n("a",{attrs:{href:"https://github.com/postcss/postcss",target:"_blank",rel:"noopener noreferrer"}},[e._v("postcss"),n("OutboundLink")],1),e._v(" 和 "),n("a",{attrs:{href:"https://github.com/2createStudio/postcss-sprites",target:"_blank",rel:"noopener noreferrer"}},[e._v("postcss-sprites"),n("OutboundLink")],1),e._v("，才能实现 CSS Sprites 的相关构建。")]),e._v(" "),n("h2",{attrs:{id:"图片压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图片压缩"}},[e._v("#")]),e._v(" 图片压缩")]),e._v(" "),n("p",[e._v("在一般的项目中，图片资源会占前端资源的很大一部分，既然代码都进行压缩了，占大头的图片就更不用说了。")]),e._v(" "),n("p",[e._v("我们之前提及使用 file-loader 来处理图片文件，在此基础上，我们再添加一个 "),n("a",{attrs:{href:"https://github.com/tcoopman/image-webpack-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("image-webpack-loader"),n("OutboundLink")],1),e._v(" 来压缩图片文件。简单的配置如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("module.exports = {\n  // ...\n  module: {\n    rules: [\n      {\n        test: /.*\\.(gif|png|jpe?g|svg|webp)$/i,\n        use: [\n          {\n            loader: 'file-loader',\n            options: {}\n          },\n          {\n            loader: 'image-webpack-loader',\n            options: {\n              mozjpeg: { // 压缩 jpeg 的配置\n                progressive: true,\n                quality: 65\n              },\n              optipng: { // 使用 imagemin-optipng 压缩 png，enable: false 为关闭\n                enabled: false,\n              },\n              pngquant: { // 使用 imagemin-pngquant 压缩 png\n                quality: '65-90',\n                speed: 4\n              },\n              gifsicle: { // 压缩 gif 的配置\n                interlaced: false,\n              },\n              webp: { // 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式\n                quality: 75\n              },\n          },\n        ],\n      },\n    ],\n  },\n}\n\n")])])]),n("p",[e._v("image-webpack-loader 的压缩是使用 "),n("a",{attrs:{href:"https://github.com/imagemin",target:"_blank",rel:"noopener noreferrer"}},[e._v("imagemin"),n("OutboundLink")],1),e._v(" 提供的一系列图片压缩类库来处理的，如果需要进一步了解详细的配置，可以查看对应类库的官方文档 "),n("a",{attrs:{href:"https://github.com/tcoopman/image-webpack-loader#usage",target:"_blank",rel:"noopener noreferrer"}},[e._v("usage of image-webpack-loader"),n("OutboundLink")],1),e._v("。")]),e._v(" "),n("h2",{attrs:{id:"使用-dataurl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-dataurl"}},[e._v("#")]),e._v(" 使用 DataURL")]),e._v(" "),n("p",[e._v("有的时候我们的项目中会有一些很小的图片，因为某些缘故并不想使用 CSS Sprites 的方式来处理（譬如小图片不多，因此引入 CSS Sprites 感觉麻烦），那么我们可以在 webpack 中使用 url-loader 来处理这些很小的图片。")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/webpack-contrib/url-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("url-loader"),n("OutboundLink")],1),e._v(" 和 "),n("a",{attrs:{href:"https://github.com/webpack-contrib/file-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("file-loader"),n("OutboundLink")],1),e._v(" 的功能类似，但是在处理文件的时候，可以通过配置指定一个大小，当文件小于这个配置值时，url-loader 会将其转换为一个 base64 编码的 DataURL，配置如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("module.exports = {\n  // ...\n  module: {\n    rules: [\n      {\n        test: /\\.(png|jpg|gif)$/,\n        use: [\n          {\n            loader: 'url-loader',\n            options: {\n              limit: 8192, // 单位是 Byte，当文件小于 8KB 时作为 DataURL 处理\n            },\n          },\n        ],\n      },\n    ],\n  },\n}\n\n")])])]),n("p",[e._v("更多关于 url-loader 的配置可以参考官方文档 "),n("a",{attrs:{href:"https://github.com/webpack-contrib/url-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("url-loader"),n("OutboundLink")],1),e._v("，一般情况仅使用 "),n("code",[e._v("limit")]),e._v(" 即可。")]),e._v(" "),n("h2",{attrs:{id:"代码压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码压缩"}},[e._v("#")]),e._v(" 代码压缩")]),e._v(" "),n("p",[e._v("webpack 4.x 版本运行时，mode 为 production 即会启动压缩 JS 代码的插件，而对于 webpack 3.x，使用压缩 JS 代码插件的方式也已经介绍过了。在生产环境中，压缩 JS 代码基本是一个必不可少的步骤，这样可以大大减小 JavaScript 的体积，相关内容这里不再赘述。")]),e._v(" "),n("p",[e._v("除了 JS 代码之外，我们一般还需要 HTML 和 CSS 文件，这两种文件也都是可以压缩的，虽然不像 JS 的压缩那么彻底（替换掉长变量等），只能移除空格换行等无用字符，但也能在一定程度上减小文件大小。在 webpack 中的配置使用也不是特别麻烦，所以我们通常也会使用。")]),e._v(" "),n("p",[e._v("对于 HTML 文件，之前介绍的 html-webpack-plugin 插件可以帮助我们生成需要的 HTML 并对其进行压缩：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("module.exports = {\n  // ...\n  plugins: [\n    new HtmlWebpackPlugin({\n      filename: 'index.html', // 配置输出文件名和路径\n      template: 'assets/index.html', // 配置文件模板\n      minify: { // 压缩 HTML 的配置\n        minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码\n        minifyJS: true // 压缩 HTML 中出现的 JS 代码\n      }\n    }),\n  ],\n}\n\n")])])]),n("p",[e._v("如上，使用 "),n("code",[e._v("minify")]),e._v(" 字段配置就可以使用 HTML 压缩，这个插件是使用 "),n("a",{attrs:{href:"https://github.com/kangax/html-minifier#options-quick-reference",target:"_blank",rel:"noopener noreferrer"}},[e._v("html-minifier"),n("OutboundLink")],1),e._v(" 来实现 HTML 代码压缩的，"),n("code",[e._v("minify")]),e._v(" 下的配置项直接透传给 html-minifier，配置项参考 html-minifier 文档即可。")]),e._v(" "),n("p",[e._v("对于 CSS 文件，我们之前介绍过用来处理 CSS 文件的 css-loader，也提供了压缩 CSS 代码的功能：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("module.exports = {\n  module: {\n    rules: [\n      // ...\n      {\n        test: /\\.css/,\n        include: [\n          path.resolve(__dirname, 'src'),\n        ],\n        use: [\n          'style-loader',\n          {\n            loader: 'css-loader',\n            options: {\n              minimize: true, // 使用 css 的压缩功能\n            },\n          },\n        ],\n      },\n    ],\n  }\n}\n\n")])])]),n("p",[e._v("在 css-loader 的选项中配置 "),n("code",[e._v("minimize")]),e._v(" 字段为 "),n("code",[e._v("true")]),e._v(" 来使用 CSS 压缩代码的功能。css-loader 是使用 "),n("a",{attrs:{href:"http://cssnano.co/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cssnano"),n("OutboundLink")],1),e._v(" 来压缩代码的，"),n("code",[e._v("minimize")]),e._v(" 字段也可以配置为一个对象，来将相关配置传递给 cssnano。更多详细内容请参考 "),n("a",{attrs:{href:"http://cssnano.co/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cssnano"),n("OutboundLink")],1),e._v(" 官方文档。")]),e._v(" "),n("h2",{attrs:{id:"小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),n("p",[e._v("由于优化前端资源加载这个主题相关的内容比较多，所以拆分成多个小节。本小节先介绍了比较基础的部分：CSS Sprites、图片压缩、使用 DataURL，以及基本的代码压缩，接下来的第 10、11 小节还会继续围绕前端资源加载优化的这个主题，介绍更加深入的内容。")]),e._v(" "),n("h2",{attrs:{id:"例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[e._v("#")]),e._v(" 例子")]),e._v(" "),n("p",[e._v("本小节提及的一些简单的 Demo 可以在 "),n("a",{attrs:{href:"https://github.com/teabyii/webpack-examples",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack-examples"),n("OutboundLink")],1),e._v(" 找到。")])])}),[],!1,null,null,null);t.default=a.exports}}]);