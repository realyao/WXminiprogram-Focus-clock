// pages/setmore/setmore.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        vibison: false,
        appId: "wx8abaf00ee8c3202e",   
        topTips: false,
        tophide: false,
    },

    changeWorkTime: function (e) {
        wx.setStorage({
          key: 'workTime',
          data: e.detail.value
        })
      },
      changeRestTime: function (e) {
        wx.setStorage({
          key: 'restTime',
          data: e.detail.value
        })
      },
      changevib: function (e) { //震动控制
        wx.setStorage({
          key: 'vibison',
          data: e.detail.value
        })
    if(e.detail.value==true){
      this.setData({
        topTips: true
    });
    setTimeout(() => {
      this.setData({
        tophide: true
    });
    setTimeout(() => {
        this.setData({
            topTips: false,
            tophide: false,
        });
    }, 300);
    }, 1200);
    }
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        wx.setNavigationBarTitle({
          title: '设置'
        })
        this.setData({
          workTime: wx.getStorageSync('workTime'),
          restTime: wx.getStorageSync('restTime'),
          vibison: wx.getStorageSync('vibison')
        })

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

    }
})