module.exports = {
  base: "/Vimalate/",
  title: "博客首页", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: "Vimalakirti的前端记录", // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    [
      "meta",
      {
        name: "keywords",
        content: "Vimalakirti的前端笔记，Vimalakirti的前端博客",
      },
    ],
    [
      "meta",
      {
        name: "author",
        content: "Vimalakirti,呛再首，枪在手",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/resb.jpg",
      },
      //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    ],
  ],
  plugins: {
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: {
        message: "新的风暴再次出现！",
        buttonText: "刷新",
      },
    },
    "demo-container":true,
    "@vuepress/back-to-top": true,
    "@vuepress/active-header-links": {
      sidebarLinkSelector: ".sidebar-link",
      headerAnchorSelector: ".header-anchor",
    },
    "@vssue/vuepress-plugin-vssue": {
      // 设置 `platform` 而不是 `api`
      platform: "github-v4",
      // 其他的 Vssue 配置
      owner: "Vimalate",
      repo: "Vimalate",
      clientId: "7fabb016743a2a816a75",
      clientSecret: "b07104f78c7cb82b05c2a816645a6165846c0a93",
      autoCreateIssue: true,
    },
    "cursor-effects": {
      size: 2, // size of the particle, default: 2
      shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    },
    "@vuepress-reco/vuepress-plugin-kan-ban-niang": {
      theme: [
        "blackCat",
        "whiteCat",
        "haru1",
        "haru2",
        "haruto",
        "koharu",
        "izumi",
        "shizuku",
        "wanko",
        "miku",
        "z16",
      ],
    },
    "vuepress-plugin-nuggets-style-copy": {
      copyText: "复制代码",
      tip: {
        content: "复制成功",
      },
    },
  },
  themeConfig: {
    logo: "/resb.jpg", //网页顶端导航栏左上角的图标
    sidebar: "auto",
    lastUpdated: "Last Updated", // string | boolean
    //顶部导航栏
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      {
        text: "首页",
        link: "/",
      },

      //格式二：添加下拉菜单，link指向的文件路径
      {
        text: "分类", //默认显示
        ariaLabel: "分类", //用于识别的label
        items: [
          {
            text: "CSS",
            link: "/blog/CSS-Library/那些奇妙的 CSS .md",
          },
          //点击标签会跳转至link的markdown文件生成的页面
          {
            text: "Javascript",
            link: "/blog/Javascript-Library/聊聊原型和原型链",
          },
        ],
      },
      {
        text: "每日学习", //默认显示
        ariaLabel: "每日学习", //用于识别的label
        items: [
          {
            text: "LeetCode",
            link: "/LeetCode-Library/121-买卖股票最佳时机",
          },
          //点击标签会跳转至link的markdown文件生成的页面
          {
            text: "琐碎",
            link: "/blog/CSS-Library/CSS-study.md",
          },
        ],
      },
      {
        text: "在线作品", //默认显示
        ariaLabel: "每日学习", //用于识别的label
        items: [
          {
            text: "静墨书城",
            link: "http://vimalakirti.fun/",
          },
          //点击标签会跳转至link的markdown文件生成的页面
          {
            text: "携程旅行",
            link: "https://vimalate.github.io/travel/dist",
          },
        ],
      },

      //格式三：跳转至外部网页，需http/https前缀
      {
        text: "Github",
        link: "https://github.com/Vimalate",
      },
    ],

    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      "/blog/": [
        {
          title: "HTML",
          collapsable: false,
          children: [["HTML-Library/HTML-Study", "常见HTML问题"]],
        },
        {
          title: "CSS", // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ["CSS-Library/那些奇妙的 CSS .md", "那些奇妙的 CSS"], //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
            ["CSS-Library/CSS-study", "CSS技巧"],
            ["CSS-Library/我都知道的CSS", "我都知道的CSS"],
            ["CSS-Library/layout", "常见布局技巧"],
          ],
        },
        {
          title: "Javascript",
          collapsable: false,
          children: [
            ["Javascript-Library/聊聊原型和原型链", "聊聊原型和原型链"],
            ["Javascript-Library/js继承", "js里的继承"],
            ["Javascript-Library/js存储和垃圾回收", "js存储和垃圾回收"],
            ["Javascript-Library/new", "new一个对象发生了什么"],
            ["Javascript-Library/了解Event Loop么", "了解Event Loop么"],
            [
              "Javascript-Library/ES6的Set ，WeakSet，Map和WeakMap",
              "ES6的Set ，WeakSet，Map和WeakMap",
            ],
            ["Javascript-Library/常见数组方法", "常见数组方法"],
            ["Javascript-Library/常见对象方法", "常见对象方法"],
            ["Javascript-Library/字符串技巧", "字符串技巧"],
            ["Javascript-Library/解构赋值", "解构赋值"],
            ["Javascript-Library/reduce 的妙用", "reduce 的妙用"],
            ["Javascript-Library/for of 和 for in 及forEach", "for of 和 for in 及forEach"],
            ["Javascript-Library/js跳出循环的方法区别break,continue,return", "js跳出循环的方法区别break,continue,return"],
            ["Javascript-Library/我都知道的JS", "我都知道的JS"],
            ["Javascript-Library/Javascript 面试题", "Javascript 面试题"],
            ["Javascript-Library/空值合并运算符", "空值合并运算符"],
            ["Javascript-Library/常见字符串方法", "常见字符串方法"],
          ],
        },
        {
          title: "Vue",
          collapsable: false,
          children: [
            ["VUE-Library/vue响应原理", "vue响应原理"],
            ["VUE-Library/vue 整理面试题", "vue 整理面试题"],
            ["VUE-Library/vue项目问题总结", "vue项目问题总结"],
            ["VUE-Library/项目添加svgIcon", "项目添加svgIcon"],
            ["VUE-Library/Vue的provide、inject", "Vue的provide、inject"],
            ["VUE-Library/axios封装", "axios封装"],
            ["VUE-Library/修改Vue打包后文件的接口地址配置", "修改Vue打包后文件的接口地址配置"],
            ["VUE-Library/Vue项目启动时间太慢", "Vue项目启动时间太慢"],
            ["VUE-Library/vue项目路由权限配置", "vue项目路由权限配置"],
            ["VUE-Library/自定义指令", "自定义指令"],
            ["VUE-Library/router-view 的 key 属性", "router-view 的 key 属性"],
            ["VUE-Library/evnetbus-事件总线", "evnetbus-事件总线"],
            [
              "VUE-Library/vue中的$attrs和$listeners",
              "vue中的$attrs和$listeners",
            ],
            ["VUE-Library/常用mixin", "常用mixin"],
            ["VUE-Library/$ref和$el区别", "$ref和$el区别"],
            ["VUE-Library/Vue使用技巧", "Vue使用技巧"],
            [
              "VUE-Library/Element-ui 全局默认属性配置",
              "Element-ui 全局默认属性配置",
            ],
            ["VUE-Library/虚拟列表", "虚拟列表"],
            ["VUE-Library/vue 随记", "vue 随记"],
          ],
        },
        {
          title: "Other",
          collapsable: true,
          children: [
            ["Other-Library/进阶图谱", "前端基础知识图谱"],
            ["Other-Library/面试总结", "面试总结"],
            [
              "Other-Library/那些年，我们忘了的正则 ×",
              "那些年，我们忘了的正则 ×",
            ],
            ["Other-Library/算法初探", "算法初探"],
            ["Other-Library/设计模式", "设计模式"],
            ["Other-Library/模板方法模式，父类封装流程，子类具体实现", "模板方法模式，父类封装流程，子类具体实现"],
            ["Other-Library/那些面试的手写", "那些面试的手写"],
            ["Other-Library/常见手写", "常见手写"],
            ["Other-Library/利器推荐", "利器推荐"],
            [
              "Other-Library/前端模块化：CommonJS,AMD,CMD,ES6",
              "前端模块化：CommonJS,AMD,CMD,ES6",
            ],
            ["Other-Library/HTTP", "从输入url到页面展示"],
            ["Other-Library/http协议", "http协议"],
            ["Other-Library/网络安全", "网络安全"],
            [
              "Other-Library/session、cookie、Token和JWT",
              "session、cookie、Token",
            ],
            [
              "Other-Library/登录鉴权方式",
              "登录鉴权方式",
            ],
            [
              "Other-Library/axios token失效取消后续请求",
              "axios token失效取消后续请求",
            ],
            ["Other-Library/markdown", "那些必须知道的markdown语法"],
            ["Other-Library/移动端适配", "移动端适配"],
            ["Other-Library/移动端常见兼容问题", "移动端常见兼容问题"],
            ["Other-Library/工具函数", "工具函数"],
            ["Other-Library/js函数工具库", "js函数工具库"],
            ["Other-Library/去掉那些if else", "去掉那些if else"],
            [
              "Other-Library/axios.all和axios.spread",
              "axios.all和axios.spread",
            ],
            ["Other-Library/Oauth2.0", "Oauth2.0"],
            ["Other-Library/原生内嵌webview", "原生内嵌webview"],
            ["Other-Library/excel指定行导入", "excel指定行导入"],
            ["Other-Library/print 打印", "print 打印"],
            // ["Other-Library/微前端qiankun实践", "微前端qiankun实践"],
            ["Other-Library/使用signature_pad实现数字签名", "使用signature_pad实现数字签名"],
            ["Other-Library/图片上传压缩", "图片上传压缩"],
            ["Other-Library/nginx配置", "nginx配置"],
          ],
        },
        {
          title: "工程化",
          collapsable: false,
          children: [
            ["Other-Library/Git Document Library/github搜索", "github搜索"],
            [
              "Other-Library/Git Document Library/git常用命令和开发流程",
              "git常用命令和开发流程",
            ],
            ["Other-Library/skill/git优雅提交", "git优雅提交"],
            ["Other-Library/Git Document Library/npm发布包", "npm发布包"],
            ["Other-Library/前端协作规范", "前端协作规范"],
            ["Other-Library/错误监控", "错误监控"],
            [
              "Other-Library/Git Document Library/webpack面试题",
              "webpack面试题",
            ],
            [
              "Other-Library/Git Document Library/gitbook",
              "gitbook 遇到的问题",
            ],
          ],
        },
        {
          title: "前端技巧",
          collapsable: false,
          children: [
            ["Other-Library/skill/skill", "前端常用技巧"],
            ["Other-Library/skill/项目利器", "前端常用库"],
            ["Other-Library/skill/excel指定行导入", "excel指定行导入"],
            // ['VUE-Library/self', 'self'],
            ["Other-Library/skill/vscode那些老板键", "vscode那些老板键"],
          ],
        },
        {
          title: "juejin",
          collapsable: false,
          children: [
            ["juejin/20个js工具函数助力高效开发", "20个js工具函数助力高效开发"], 
            ["juejin/使用VuePress搭建Element的组件库文档", "使用VuePress搭建Element的组件库文档"],
            ["juejin/当我们二次封装时我们在封装什么", "当我们二次封装时我们在封装什么"],
            ["juejin/vue项目常见问题总结", "vue项目常见问题总结"],
            ["juejin/Typescript学习指南", "Typescript学习指南"],
            ["juejin/关于首屏优化，我做了哪些", "关于首屏优化，我做了哪些"],
            ["juejin/vue3+setup+ts", "vue3+setup+ts"],
          ],
        },
        {
          title: "前端性能优化与实践",
          collapsable: false,
          children: [
            [
              "前端性能优化与实践/开篇：知识体系与小册格局",
              "开篇：知识体系与小册格局",
            ],
            [
              "前端性能优化与实践/网络篇 1：webpack 性能调优与 Gzip 原理",
              "网络篇 1：webpack 性能调优与 Gzip 原理",
            ],
            [
              "前端性能优化与实践/网络篇 2：图片优化——质量与性能的博弈",
              "网络篇 2：图片优化——质量与性能的博弈",
            ],
            [
              "前端性能优化与实践/存储篇 1：浏览器缓存机制介绍与缓存策略剖析",
              "存储篇 1：浏览器缓存机制介绍与缓存策略剖析",
            ],
            [
              "前端性能优化与实践/存储篇 2：本地存储——从 Cookie 到 Web Storage、IndexDB",
              "存储篇 2：本地存储——从 Cookie 到 Web Storage、IndexDB",
            ],
            [
              "前端性能优化与实践/彩蛋篇：CDN 的缓存与回源机制解析",
              "彩蛋篇：CDN 的缓存与回源机制解析",
            ],
            [
              "前端性能优化与实践/渲染篇 1：服务端渲染的探索与实践",
              "渲染篇 1：服务端渲染的探索与实践",
            ],
            [
              "前端性能优化与实践/渲染篇 2：知己知彼——解锁浏览器背后的运行机制",
              "渲染篇 2：知己知彼——解锁浏览器背后的运行机制",
            ],
            [
              "前端性能优化与实践/渲染篇 3：对症下药——DOM 优化原理与基本实践",
              "渲染篇 3：对症下药——DOM 优化原理与基本实践",
            ],
            [
              "前端性能优化与实践/渲染篇 4：千方百计——Event Loop 与异步更新策略",
              "渲染篇 4：千方百计——Event Loop 与异步更新策略",
            ],
            [
              "前端性能优化与实践/渲染篇 5：最后一击——回流（Reflow）与重绘（Repaint）",
              "渲染篇 5：最后一击——回流（Reflow）与重绘（Repaint）",
            ],
            [
              "前端性能优化与实践/应用篇 1：优化首屏体验——Lazy-Load 初探",
              "应用篇 1：优化首屏体验——Lazy-Load 初探",
            ],
            [
              "前端性能优化与实践/应用篇 2：事件的节流（throttle）与防抖（debounce）",
              "应用篇 2：事件的节流（throttle）与防抖（debounce）",
            ],
            [
              "前端性能优化与实践/性能监测篇：Performance、LightHouse 与性能 API",
              "性能监测篇：Performance、LightHouse 与性能 API",
            ],
            [
              "前端性能优化与实践/前方的路：希望以此为你的起点",
              "前方的路：希望以此为你的起点",
            ],
          ],
        },
        {
          title: "使用webpack定制前端开发环境",
          collapsable: false,
          children: [
            [
              "使用webpack定制前端开发环境/webpack 的概念和基础使用",
              "webpack 的概念和基础使用",
            ],
            [
              "使用webpack定制前端开发环境/webpack 如何解析代码模块路径",
              "webpack 如何解析代码模块路径",
            ],
            [
              "使用webpack定制前端开发环境/创建自己的 loader",
              "创建自己的 loader",
            ],
            [
              "使用webpack定制前端开发环境/创建自己的 plugin",
              "创建自己的 plugin",
            ],
            [
              "使用webpack定制前端开发环境/搭建基本的前端开发环境",
              "搭建基本的前端开发环境",
            ],
            [
              "使用webpack定制前端开发环境/更好地使用 webpack-dev-server",
              "更好地使用 webpack-dev-server",
            ],
            [
              "使用webpack定制前端开发环境/开发和生产环境的构建配置差异",
              "开发和生产环境的构建配置差异",
            ],
            [
              "使用webpack定制前端开发环境/配置 loader",
              "配置 loader",
            ],
            [
              "使用webpack定制前端开发环境/使用 plugin",
              "使用 plugin",
            ],
            [
              "使用webpack定制前端开发环境/探究 webpack 内部工作流程",
              "探究 webpack 内部工作流程",
            ],
            [
              "使用webpack定制前端开发环境/提升 webpack 的构建速度",
              "提升 webpack 的构建速度",
            ],
            [
              "使用webpack定制前端开发环境/用 HMR 提高开发效率",
              "用 HMR 提高开发效率",
            ],
            [
              "使用webpack定制前端开发环境/优化前端资源加载 1 - 图片加载优化和代码压缩",
              "优化前端资源加载 1 - 图片加载优化和代码压缩",
            ],
            [
              "使用webpack定制前端开发环境/优化前端资源加载 2 - 分离代码文件",
              "优化前端资源加载 2 - 分离代码文件",
            ],
            [
              "使用webpack定制前端开发环境/优化前端资源加载 3 - 进一步控制 JS 大小",
              "优化前端资源加载 3 - 进一步控制 JS 大小",
            ],
            [
              "使用webpack定制前端开发环境/总结",
              "总结",
            ],
          ],
        },
      ],
      "/LeetCode-Library/": [
        {
          title: "LeetCode",
          collapsable: false,
          children: [
            ["100-相同的树", "100-相同的树"],
            ["121-买卖股票最佳时机", "121-买卖股票最佳时机"],
            ["122-买卖股票最佳时机2", "122-买卖股票最佳时机2"],
            ["123-验证回文串", "123-验证回文串"],
            ["136-只出现一次的数字", "136-只出现一次的数字"],
            ["156-最小栈", "156-最小栈"],
            ["167-两数之和", "167-两数之和"],
            ["168-Excel列表名称 copy", "168-Excel列表名称 copy"],
            ["169-求众数", "169-求众数"],
            ["171-Excel表列序号", "171-Excel表列序号"],
            ["172-阶乘后的零", "172-阶乘后的零"],
            ["189-旋转数组", "189-旋转数组"],
            ["190-颠倒二进制位", "190-颠倒二进制位"],
            ["191-位1的个数", "191-位1的个数"],
            ["202-快乐数", "202-快乐数"],
            ["204-计数质数", "204-计数质数"],
            ["205-同构字符串", "205-同构字符串"],
            ["206-反转链表 ×", "206-反转链表 ×"],
            ["217-存在重复元素", "217-存在重复元素"],
            ["219-存在重复元素", "219-存在重复元素2"],
            ["226-反转二叉树 ×", "226-反转二叉树 ×2"],
            ["231-2-的幂", "231-2-的幂2"],
            ["234-回文链表", "234-回文链表2"],
            ["242-有效的字母异位词", "242-有效的字母异位词2"],
            ["258-各位相加", "258-各位相加2"],
            ["263-丑数", "263-丑数2"],
            ["268-缺失的数字", "268-缺失的数字2"],
            ["278-第一个错误版本", "278-第一个错误版本2"],
            ["283-移动0", "283-移动0"],
            ["290-单词规律", "290-单词规律"],
            ["292-NIm游戏", "292-NIm游戏"],
            ["303-区域和检索 - 数组不可变", "303-区域和检索 - 数组不可变"],
            ["326-3的幂", "326-3的幂"],
            ["342-4的幂", "342-4的幂"],
            ["344-反转字符串", "344-反转字符串"],
            ["349-两个数组的交集", "349-两个数组的交集"],
            ["350-两个数组的交集 II", "350-两个数组的交集 II"],
            ["367-有效的完全平方数", "367-有效的完全平方数"],
            ["383-赎金信", "383-赎金信"],
            ["387-字符串中的第一个唯一字符", "387-字符串中的第一个唯一字符"],
            ["389-找不同", "389-找不同"],
            ["409-最长回文串", "409-最长回文串"],
            ["412-FizzBuzz", "412-FizzBuzz"],
            ["413-第三大的数", "413-第三大的数"],
            ["434-字符串中的单词数", "434-字符串中的单词数"],
            ["441-排列硬币", "441-排列硬币"],
            ["448-找到所有数组中消失的数字", "448-找到所有数组中消失的数字"],
            [
              "453-最小移动次数使数组元素相等",
              "453-最小移动次数使数组元素相等",
            ],
            ["455-分发饼干", "455-分发饼干"],
            ["458-密钥格式化", "458-密钥格式化"],
            ["459-重复的子字符串", "459-重复的子字符串"],
            ["485-最大连续1的个数", "485-最大连续1的个数"],
            ["496-下一个更大元素", "496-下一个更大元素"],
            ["500-键盘航", "500-键盘航"],
            ["506-相对名次", "506-相对名次"],
            ["507-完美数", "507-完美数"],
            ["509-斐波那契数列", "509-斐波那契数列"],
            ["520-检测大写字母", "520-检测大写字母"],
            ["551-学生出勤记录 I", "551-学生出勤记录 I"],
            ["557-反转字符串中的单词 III", "557-反转字符串中的单词 III"],
            ["566-重塑矩阵", "566-重塑矩阵"],
            ["575-分糖果", "575-分糖果"],
            ["581-最短无序连续子数组", "581-最短无序连续子数组"],
            ["599-两个列表的最小索引总和", "599-两个列表的最小索引总和"],
            ["605-种花问题", "605-种花问题"],
            ["628-三个数的最大乘积", "628-三个数的最大乘积"],
            ["645-错误的集合", "645-错误的集合"],
            ["657-机器人能否返回原点", "657-机器人能否返回原点"],
            ["674-最长连续递增序列", "674-最长连续递增序列"],
            ["680-验证回文字符串 Ⅱ", "680-验证回文字符串 Ⅱ"],
            ["690-员工的重要性", "690-员工的重要性"],
            ["717-1比特与2比特字符", "717-1比特与2比特字符"],
            ["720-词典中最长的单词", "720-词典中最长的单词"],
            ["724-寻找数组的中心索引", "724-寻找数组的中心索引"],
            ["728-自除数","728-自除数"],
            [
              "747-至少是其他数字两倍的最大数",
              "747-至少是其他数字两倍的最大数",
            ],
            [
              "747-至少是其他数字两倍的最大数",
              "747-至少是其他数字两倍的最大数",
            ],
            ["796-旋转字符串", "796-旋转字符串"],
            ["804-唯一摩尔斯密码词", "804-唯一摩尔斯密码词"],
            ["830-较大分组的位置", "830-较大分组的位置"],
            ["929-独特的电子邮件地址", "929-独特的电子邮件地址"],
            ["941-有效的山脉数组", "941-有效的山脉数组"],
            ["961 - 重复N次的元素", "961 - 重复N次的元素"],
            ["1002-查找常用字符", "1002-查找常用字符"],
            ["1009-十进制整数的反码", "1009-十进制整数的反码"],
            [
              "1013-将数组分成和相等的三个部分",
              "1013-将数组分成和相等的三个部分",
            ],
            ["1137-第 N 个泰波那契数", "1137-第 N 个泰波那契数"],
          ],
        },
      ],
      //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
    },
  },
};
