# WXminiprogram-Focus-clock
### 微信小程序：专注时钟（更新至v1.2.1)

![language](https://img.shields.io/badge/language-weapp-purple)
![build](https://img.shields.io/badge/build-passing-brightgreen)
![license](https://img.shields.io/badge/license-GPL-blue)

这是微信小程序专注时钟的开源代码仓库，你可以在微信中搜索**专注时钟**，或微信扫码预览

<div align=center><img width='30%' src="https://s4.ax1x.com/2022/01/14/73a9bt.jpg"/></div>


## 功能
* 计时（cf. [番茄工作法](https://baike.baidu.com/item/%E7%95%AA%E8%8C%84%E5%B7%A5%E4%BD%9C%E6%B3%95/6353502)）
* 待办清单（ToDo List）
* 记录分析，海报生成分享
* 白噪声
* 排行榜
* more ...

## ToDo
- 夜间模式、老龄模式、大屏适配
- 接入微信推送通知
- PC桌面端共享

## 快速开始 & 其他
* 本小程序base [timer](https://github.com/kraaas/timer)。页面基于[WEUI](https://github.com/Tencent/weui-wxss)组件模块，**拟微信风格UI**，支持在`app.jason`中以拓展库方式引入：
```
"useExtendedLib": {
    "weui": true
},
``` 
* 部署源码：
```
- git clone git@github.com:realyao/realyao/WXminiprogram-Focus-clock.git
- 修改你的appid
- 编译运行
```
* 微信基础库：>=`2.21.0`，页面适配iPhone6以上所有机型。
* GPL license
* Welcome `star` & pull your requests


## 页面展示
<div align=center><img width='50%' src="https://s4.ax1x.com/2022/01/17/7UGHNq.jpg"/>
<img width='40%' src="https://s4.ax1x.com/2022/01/17/7UGb40.jpg"/>
</div>