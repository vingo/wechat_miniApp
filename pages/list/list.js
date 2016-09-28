//list.js
//获取应用实例
var app = getApp();
var arr=[{name:'vingo',id:1,avatar:''},{name:'hello',id:2,avatar:''},{name:'cat',id:3,avatar:''},{name:'andor',id:4,avatar:''},{name:'daniel',id:5,avatar:''}];
Page({
  data: {
    name: 'user list',
    users: arr
  },
  //事件处理函数
  /*bindViewTap: function() {   
    wx.navigateTo({
      url: '../logs/logs'
    })
  },*/
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
