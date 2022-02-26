## WXminiprogram-Focus-clock
### 微信小程序：专注时钟（更新至v1.2.2__2022)

![language](https://img.shields.io/badge/language-weapp-purple)
![build](https://img.shields.io/badge/build-passing-brightgreen)
![license](https://img.shields.io/badge/license-GPL-blue)

这是微信小程序专注时钟的开源代码仓库，你可以在微信中搜索 **专注时钟**，或微信扫码预览

<div align=center><img width='30%' src="https://s4.ax1x.com/2022/01/14/73a9bt.jpg"/></div>


## 🔎功能
* 计时（cf. [番茄工作法](https://baike.baidu.com/item/%E7%95%AA%E8%8C%84%E5%B7%A5%E4%BD%9C%E6%B3%95/6353502)）
* 待办清单（ToDo List）
* 数据记录 图表分析
* 生成海报分享
* 白噪声背景声
* 排行榜
* more ...

## 🔜ToDo
- 夜间模式、老龄模式、大屏适配
- 接入微信推送通知
- 微信云开发
- PC桌面端共享
- ~~需要一个美术设计拯救审美~~

## 🚀快速开始 & 其他
* **本微信小程序涉及基础的 JavaScript、WXML、CSS 语法，以及常见的微信API和组件使用，适合新手学习入门。** 
当你遇到问题时，I insist [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)。

* Base [timer](https://github.com/kraaas/timer)。页面使用[WEUI](https://github.com/Tencent/weui-wxss)组件模块，**拟微信风格UI**，支持在`app.json`中以拓展库方式引入：
```json
"useExtendedLib": {
    "weui": true
},
``` 

* **部署源码：**
```
- git clone git@github.com:realyao/realyao/WXminiprogram-Focus-clock.git
- 修改你的appid
- 编译运行
```
* 微信基础库：>=`2.21.0`，页面适配 iPhone6 以上所有机型。
* GPL license
* Welcome `⭐star` & pull your requests


## 页面展示
<div align=center><img width='50%' src="https://s4.ax1x.com/2022/01/17/7UGHNq.jpg"/>
<img width='40%' src="https://s4.ax1x.com/2022/01/17/7UGb40.jpg"/>
</div>
