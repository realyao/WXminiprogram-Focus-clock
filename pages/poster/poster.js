// pages/haibao/haibao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lognum:'',
    imageUrl:'../../image/poster.jpg',
    imageWidth:0,
    imageHeight:0,
    canvasw:'',
    canvash:'',
    shareImageSrc:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
    let imgUrl=this.data.imageUrl;
    this.setData({
      lognum:options.lognum
    });
    wx.getImageInfo({
      src: imgUrl,
      success(res) {
        console.log(res);
        that.setData({
          imageWidth: res.width / 4.5,
          imageHeight: res.height / 4.5
        })
        that.drawing('myCanvas',{});
      }
    })

  },


  /**
   * 绘图
   */
  drawing(canvasId, thisObj){
    let that = this;
    wx.showToast({
      title: '打卡成功',
      icon: 'success',
      duration: 1500
    })
    
    let {target,imageUrl}=this.data;

    var w = that.data.imageWidth;
    var h = that.data.imageHeight;

    const ctx = wx.createCanvasContext(canvasId, thisObj)
    ctx.beginPath()
    ctx.fillRect(0, 0, w, h)
    ctx.drawImage(imageUrl, 0, 0, w, h) //海报底图
    ctx.save();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    ctx.setTextAlign('left')

    ctx.setFillStyle('#b2b2b2')
    // ctx.font='24px kaiti'
    ctx.setFontSize(24)
 
    ctx.fillText(`${this.getTime()}`, 0.05*w, 0.87 * h )
    ctx.setFillStyle('#000000')
    ctx.setFontSize(16)
    ctx.fillText(`已完成 ${this.data.lognum/2} 次专注`, 0.05*w, 0.95 * h )

    ctx.draw();

    //将图片保存在缓存里
    setTimeout(function() {
      //将cavas变成图片
      wx.canvasToTempFilePath({
        //通过id 指定是哪个canvas
        canvasId: canvasId,
        success(res) {
          that.setData({
            shareImageSrc: res.tempFilePath
          })
        }
      })
    }, 500)
  },
  savepic(){
    let that=this;
    const res = wx.getSystemInfoSync()
    // console.log(res);
    let sys=res.system;
    let version=res.SDKVersion;

    // wx.getSetting({
    //   success(res) {
    //     if (!res.authSetting['writePhotosAlbum']) {
    //       wx.authorize({
    //         scope: 'writePhotosAlbum',
    //         success () {
    //           // 用户已经同意小程序使用写相册功能，后续调用接口不会弹窗询问
    //         }
    //       })
    //     }
    //   }
    // })

    if(sys.indexOf("Android")>-1 && this.testVersion(version)){
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline'],
        success(res) {
          console.log('showShareMenu',res);
        },
        fail(err){
          console.log(err);
        }
      })
    }else{
      // wx.showModal({
      //   title: '提示',
      //   content: '手机系统不支持转发朋友圈，请保存图片后手动转发',
      //   success (res) {
      //     if (res.confirm) {
            that.saveImage();
      //     }
      //   }
      // })
    }


  },
  /**
   * 保存图片
   */
  saveImage() {
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.shareImageSrc,
      success: function(res) {
        wx.showToast({
          title: '图片保存至相册',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function(res) {}
    })
  },
  /**
   * 判断版本是否大于2.11.3
   * @param v
   */
  testVersion(v){
    let arr=v.split('.');
    if(parseInt(arr[0])<2) return false;
    if(parseInt(arr[1])<11) return false;
    return parseInt(arr[2]) >= 3;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
  getTime(){
    let date1=new Date();
    // let year=this.appendZero(date1.getFullYear());
    let month=date1.getMonth()+1
    let day=date1.getDate()
    // let hours=this.appendZero(date1.getHours());
    // let minutes=this.appendZero(date1.getMinutes());
    // let seconds=this.appendZero(date1.getSeconds());
    return month+"月"+day+'日'+'\xa0\xa0'+'打卡'
  },
  //过滤补0
  appendZero(obj) {
    if (obj < 10) {
      return "0" + obj;
    } else {
      return obj;
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   *
   */
  onShareTimeline:function () {

  }
})
