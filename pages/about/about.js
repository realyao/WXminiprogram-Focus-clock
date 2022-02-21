// pages/about/about.js
let interstitialAd = null
//插屏广告
Page({
  data: {
    imgalist: ['https://s2.ax1x.com/2019/09/18/nTVJIg.png']
  },
// 在页面onLoad回调事件中创建插屏广告实例
onLoad() {
  if (wx.createInterstitialAd) {
    interstitialAd = wx.createInterstitialAd({
      adUnitId: 'adunit-720b41e17cd7e702'
    })
    // interstitialAd.onLoad(console.log("suc onload"))
    interstitialAd.onError((err) => {})
    // interstitialAd.onClose(console.log("suc onclose"))
  }
  setTimeout(() => {
    if (interstitialAd) {
      // console.log("11")
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }
  }, 1000);
},
onShow() {

},

previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({

      urls: this.data.imgalist 
    })

  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
      wx.showShareMenu({

            withShareTicket: true,    
            menus: ['shareAppMessage', 'shareTimeline']     
          })
      
    if (res.from ==='button') {
      // 来自页面内转发按钮
      console.log(res.target)
      return {
        title:'管理时间，保持专注，让自律成为习惯！',
         path: '/pages/index/index',
        imageUrl:'/image/about.png' //不设置则默认为当前页面的截图
      }
    }
  },
    onShareTimeline: function (res){
        return{  
          title: '管理时间，保持专注，让自律成为习惯！',
          query: {   
            // key: 'value' //要携带的参数 
          },  
          imageUrl: '/image/about.png'   
        }    
      }
   
 
})