<h2 align=center>WXminiprogram - Focus Clock</h2>
<h3 align=center>微信小程序：专注时钟   （更新至 <img src="https://img.shields.io/badge/Version-v1.2.2-informational">）</h3>

<!-- <div align=center>
![language](https://img.shields.io/badge/language-weapp-purple)
![build](https://img.shields.io/badge/build-passing-brightgreen)
![license](https://img.shields.io/badge/license-GPL-blue)
</div> -->

<p align="center">
  <img src="https://img.shields.io/badge/language-WeApp-blueviolet">
  <img src="https://img.shields.io/badge/build-passing-brightgreen">
  <img src="https://visitor-badge.glitch.me/badge?page_id=realyao.WXminiprogram-Focus-clock">
  <img src="https://img.shields.io/github/stars/realyao/WXminiprogram-Focus-clock">
  <img src="https://img.shields.io/github/forks/realyao/WXminiprogram-Focus-clock">
  <img src="https://img.shields.io/github/issues/realyao/WXminiprogram-Focus-clock">
  <img src="https://img.shields.io/badge/license-GPL-blue">
</p>

<h5 align=center>
导航：[<a href="#快速开始">代码部署</a>] [<a href="https://realyao.github.io/foclock/">FocusClock 主页</a>] [<a href="#部分原型设计预览">页面原型预览</a>] [<a href="https://github.com/realyao/WXminiprogram-Focus-clock/wiki">产品分析文档</a>] 
</h5>

<h4 align=center>这是微信小程序专注时钟的开源代码仓库，你可以在微信中搜索专注时钟，或微信扫码预览</h4>


<!-- <div align=center><img width='25%' src="https://s4.ax1x.com/2022/01/14/73a9bt.jpg"/></div> -->
<div align=center><img width='70%' src="https://dcdn.it120.cc/2022/05/11/3f59c7d4-f950-4151-a3f4-f91a5b20cd3a.png"/></div>



> <h3 align=center>『专注时钟』是你管理每日时间、提高学习工作效率、养成自律习惯的得力助手。</h3>
> 
> <h4 align=center>“集每日待办、专注计时、打卡、备忘、自习、白噪声等多种实用功能于一体，助你轻松将每一天打理得井井有条，享受高效生活。”</h4>

##

<div align=center><img width='80%' src="https://dcdn.it120.cc/2022/04/01/3691a1c3-9d9e-47c6-96f7-5794bbcc3924.jpg"/></div>


## 🔎Features
* 专注计时（cf. [番茄工作法](https://baike.baidu.com/item/%E7%95%AA%E8%8C%84%E5%B7%A5%E4%BD%9C%E6%B3%95/6353502)）
* 待办清单（ToDo List）
* 数据记录 图表分析
* 生成海报分享
* 白噪声背景声
* 排行榜
* more ...
  
#### 产品功能脑图（V-1.3）
<div><img width='50%' src="https://dcdn.it120.cc/2022/04/06/bc485bbe-f6ba-43d7-b562-1093bc23f1cf.png"/></div>


## 🔜ToDo
- **[专注自习室](#专注自习室)（即将到来！）**
- 语音待办（V-ToDo）
- 接入微信推送通知
- PC桌面端共享（Web版）
- 夜间模式、老龄模式、大屏适配
- ~~需要一个美术设计拯救审美~~

## 🚀快速开始
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



## 📒项目信息
* **如果该项目对您有帮助，欢迎点一个 `⭐star` & pull your requests**
  
* 你可以在项目 [Wiki](https://github.com/realyao/WXminiprogram-Focus-clock/wiki/%E5%85%B3%E4%BA%8E-%E4%B8%93%E6%B3%A8%E6%97%B6%E9%92%9F-%E4%B8%93%E6%B3%A8%E8%87%AA%E4%B9%A0%E5%AE%A4-%E7%9A%84%E9%9C%80%E6%B1%82%E6%80%9D%E8%80%83) 中查看我对该产品做的部分需求分析、原型设计和数据分析。
  
* GPL license

## 📱部分原型设计预览
<div align=center><img width='45%' src="https://s4.ax1x.com/2022/01/17/7UGHNq.jpg"/>
<img width='36%' src="https://s4.ax1x.com/2022/01/17/7UGb40.jpg"/>
</div>

##### 专注自习室
<div align=center><img width='30%' src="https://dcdn.it120.cc/2022/03/27/66c757b8-acaa-41d1-b409-e3af12ef2e9c.png"/>
<img width='30%' src="https://dcdn.it120.cc/2022/03/27/952eee7b-6e01-4285-b1c9-217d936b0c81.png"/>
</div>

> --By 墨刀 & Figma
