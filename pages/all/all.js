//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    page:'all',
    list:[1,2,3,4],
    user:{id:1}
  },
  bindViewWeather: function() {
    wx.navigateTo({
      url: '../weather/weather'
    })
  },
  onLoad: function () {
    console.log(' all onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
    //   that.setData({
    //         user:{id:2}
    //   })
    })
  }
})
