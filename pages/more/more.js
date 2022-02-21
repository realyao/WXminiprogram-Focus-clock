// pages/more/more.js
let interstitialAd = null
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad() {

  },

  onLoad: function (options) {
 
  },

  data:{
    　　extraData: {
    　　　　from: ''
    　　}
    },
    
    toMiniProgramSuccess(res){
        //从其他小程序返回的时候触发
        wx.showToast({
          title: '通过超链接跳转其他小程序成功返回了'
        })
    },
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '更多好用'});
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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
  onShareAppMessage: function () {

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