//list.js
//获取应用实例
var app = getApp();

var util = require('../../utils/util.js')
Page({
  data: {
    name: 'user list',
    users: []
  },
  //事件处理函数
  /*bindViewTap: function() {   
    wx.navigateTo({
      url: '../logs/logs'
    })
  },*/
  onLoad: function () {
    console.log('>>>>>>>>>>>list onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
        users:util.getUsers()   //获取用户的数据
      })
    })
  }
})
