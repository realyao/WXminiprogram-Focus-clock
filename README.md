<h2 align=center>WXminiprogram-Focus-clock</h2>
<h3 align=center>微信小程序：专注时钟（更新至v1.2.2__2022)</h3>

<!-- <div align=center>
![language](https://img.shields.io/badge/language-weapp-purple)
![build](https://img.shields.io/badge/build-passing-brightgreen)
![license](https://img.shields.io/badge/license-GPL-blue)
</div> -->

<p align="center">
  <img src="https://img.shields.io/badge/language-weapp-purple">
  <img src="https://img.shields.io/badge/build-passing-brightgreen">
  <img src="https://img.shields.io/github/stars/realyao/WXminiprogram-Focus-clock">
  <img src="https://img.shields.io/github/forks/realyao/WXminiprogram-Focus-clock">
  <img src="https://img.shields.io/github/issues/realyao/WXminiprogram-Focus-clock">
  <img src="https://img.shields.io/badge/license-GPL-blue">
</p>

<h4 align=center>这是微信小程序专注时钟的开源代码仓库，你可以在微信中搜索专注时钟，或微信扫码预览</h4>


<div align=center><img width='25%' src="https://s4.ax1x.com/2022/01/14/73a9bt.jpg"/></div>

##

<h3 align=center>【专注时钟】是一个帮助你放下手机，专注工作的小程序。</h3>

<h4 align=center>从每日计划到专注计时，借助专注时钟，你可以轻松将你的一天打理得井井有条，享受高效生活。</h4>

<div align=center><img width='80%' src="https://dcdn.it120.cc/2022/03/13/c6bfc2ff-701f-4bca-9444-1a659b780a0c.png"/></div>



## 🔎 功能
* 专注计时（cf. [番茄工作法](https://baike.baidu.com/item/%E7%95%AA%E8%8C%84%E5%B7%A5%E4%BD%9C%E6%B3%95/6353502)）
* 待办清单（ToDo List）
* 数据记录 图表分析
* 生成海报分享
* 白噪声背景声
* 排行榜
* more ...
  
#### 产品功能结构分析
<div><img width='50%' src="https://dcdn.it120.cc/2022/03/08/36534a91-d228-419e-994c-46c967b837d0.png"/></div>


## 🔜 ToDo
- **专注自习室（即将到来！）**
- 夜间模式、老龄模式、大屏适配
- 接入微信推送通知
- PC桌面端共享
- ~~需要一个美术设计拯救审美~~

## 🚀 快速开始
* **本微信小程序涉及基础的 JavaScript、WXML、CSS 等前端知识，以及常见的微信API和组件使用，适合新手学习入门。** 当你遇到问题时，I insist [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)。

* Base [timer](https://github.com/kraaas/timer)。页面基于[WEUI](https://github.com/Tencent/weui-wxss)组件库，微信原生视觉体验，支持在`app.json`中以拓展库方式引入：
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



## 📒 项目介绍

* 你可以在项目 [Wiki](https://github.com/realyao/WXminiprogram-Focus-clock/wiki/%E5%85%B3%E4%BA%8E-%E4%B8%93%E6%B3%A8%E6%97%B6%E9%92%9F-%E4%B8%93%E6%B3%A8%E8%87%AA%E4%B9%A0%E5%AE%A4-%E7%9A%84%E9%9C%80%E6%B1%82%E6%80%9D%E8%80%83) 中查看我对该产品做的部分 **需求分析** 和 **原型设计**。
  
* GPL license
  
* **Welcome `⭐star` & pull your requests**

## 部分页面原型设计展示
<div align=center><img width='50%' src="https://s4.ax1x.com/2022/01/17/7UGHNq.jpg"/>
<img width='40%' src="https://s4.ax1x.com/2022/01/17/7UGb40.jpg"/>
</div>

#### 专注自习室
<div align=center><img width='40%' src="https://dcdn.it120.cc/2022/03/13/7299f6c9-b68a-4086-8d52-12154bcedae5.jpg"/></div>

> --By 墨刀 & Figma，更多原型设计图将陆续更新至此，详见[Wiki](https://github.com/realyao/WXminiprogram-Focus-clock/wiki/%E5%85%B3%E4%BA%8E-%E4%B8%93%E6%B3%A8%E6%97%B6%E9%92%9F-%E4%B8%93%E6%B3%A8%E8%87%AA%E4%B9%A0%E5%AE%A4-%E7%9A%84%E9%9C%80%E6%B1%82%E6%80%9D%E8%80%83)。