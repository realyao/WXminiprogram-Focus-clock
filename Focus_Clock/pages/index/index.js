const util = require('../../utils/util.js')
const templateId = 'OFEAr11jqhgpU_imwX6A7xTy2ckcxRMNa3kE8-d7CQI'
const defaultLogName = {
  work: '工作',
  rest: '休息'
}
const actionName = {
  stop: '结束',
  start: '开始'
}
const initDeg = {
  left: 45,
  right: -45,
}

Page({

  data: {
    remainTimeText: '',
    timerType: 'work',
    log: {},
    completed: false,
    isRuning: false,
    leftDeg: initDeg.left,
    rightDeg: initDeg.right,
    vibison: ''
      },

  onLoad: function (options) {
  },

  onShow: function() {
    if (this.data.isRuning) return
    let workTime = util.formatTime(wx.getStorageSync('workTime'), 'HH')
    let restTime = util.formatTime(wx.getStorageSync('restTime'), 'HH')
    this.setData({
      workTime: workTime,
      restTime: restTime,
      remainTimeText: workTime + ':00'
    })
  },

  startTimer: function(e) {
    let startTime = Date.now()
    let startTimeShow = this.getTime() //（安卓与iOS时间显示不一致）转换时间为统一格式显示。
    let isRuning = this.data.isRuning
    let timerType = e.target.dataset.type
    let showTime = this.data[timerType + 'Time']
    let keepTime = showTime * 60 * 1000
    let logName = this.logName || defaultLogName[timerType]
    this.vibshort()
    if (!isRuning) {   
      this.timer = setInterval((function() {
        this.updateTimer()
        this.startNameAnimation()       
      }).bind(this), 1000)
    } else {
      this.stopTimer()
    }
   
    this.setData({
      isRuning: !isRuning,
      completed: false,
      timerType: timerType,
      remainTimeText: showTime + ':00',
      taskName: logName
    
    })

    this.data.log = {
      name: logName,
      startTime: Date.now(),
      startTimeShow: startTimeShow,
      keepTime: keepTime,
      endTime: keepTime + startTime,
      action: actionName[isRuning ? 'stop' : 'start'],
      type: timerType
    }
    this.saveLog(this.data.log)
  },

  startNameAnimation: function() {
    let animation = wx.createAnimation({
      duration: 450
    })
    animation.opacity(0.2).step()
    animation.opacity(1).step()
    this.setData({
      nameAnimation: animation.export()
    })
  },

  stopTimer: function() {
    // reset circle progress
    this.setData({
      leftDeg: initDeg.left,
      rightDeg: initDeg.right
    })
  this.viblong()    
  this.timer && clearInterval(this.timer)
  //  震动 ；clear timer
  },

viblong: function(){
  let vibison = wx.getStorageSync('vibison')//页面传参，以缓存形式
  this.setData({
    vibison: vibison
  })
if(vibison){     //振动功能的开闭
  wx.vibrateLong()
}else{
}
},

vibshort: function(){
  let vibison = wx.getStorageSync('vibison')//页面传参，以缓存形式
  this.setData({
    vibison: vibison
  })
if(vibison){     //振动功能的开闭
  wx.vibrateShort()
}else{
}
},

  updateTimer: function() {
    let log = this.data.log
    let now = Date.now()
    let remainingTime = Math.round((log.endTime - now) / 1000)
    let H = util.formatTime(Math.floor(remainingTime / (60 * 60)) % 24, 'HH')
    let M = util.formatTime(Math.floor(remainingTime / (60)) % 60, 'MM')
    let S = util.formatTime(Math.floor(remainingTime) % 60, 'SS')
    let halfTime

    // update text
    if (remainingTime > 0) {
      let remainTimeText = (H === "00" ? "" : (H + ":")) + M + ":" + S
      this.setData({
        remainTimeText: remainTimeText
      })
    } else if (remainingTime == 0) {
      this.setData({
        completed: true
      })
      this.stopTimer()
      return
    }

    // update circle progress
    halfTime = log.keepTime / 2
    if ((remainingTime * 1000) > halfTime) {
      this.setData({
        leftDeg: initDeg.left - (180 * (now - log.startTime) / halfTime)
      })
    } else {
      this.setData({
        leftDeg: -135
      })
      this.setData({
        rightDeg: initDeg.right - (180 * (now - (log.startTime + halfTime)) / halfTime)
      })
    }
  },

  changeLogName: function(e) {
    this.logName = e.detail.value
  },

  saveLog: function(log) {
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(log)
    wx.setStorageSync('logs', logs)
  },
  onShareAppMessage: function (res) {

    if (res.from ==='button') {
      // 来自页面内转发按钮
      console.log(res.target)
      return {
        title:'管理时间，保持专注！让自律成为习惯！',
         path: '/pages/index/index',
        imageUrl:'/image/share.jpg' //不设置则默认为当前页面的截图
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
    
      },


    getTime(){
      let date1=new Date();
      let year=this.appendZero(date1.getFullYear());
      let month=this.appendZero(date1.getMonth()+1)
      let day=this.appendZero(date1.getDate());
      let hours=this.appendZero(date1.getHours());
      let minutes=this.appendZero(date1.getMinutes());
      let seconds=this.appendZero(date1.getSeconds());
      return year+"年 "+month+"月"+day+'日 '+"\xa0\xa0\xa0"+hours+":"+minutes+":"+seconds
    },
    //过滤补0
    appendZero(obj) {
      if (obj < 10) {
        return "0" + obj;
      } else {
        return obj;
      }
    }

})
