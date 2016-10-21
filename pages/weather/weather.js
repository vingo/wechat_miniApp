//获取应用实例
var app = getApp();
Page({
  data:{
     text:"这是一个页面",
    weather: {}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
     console.log(' weather onLoad.....');
     var that = this;
    //加载天气预报数据
      wx.request({
        url: 'http://www.toutiao.com/stream/widget/local_weather/data/?city=',
        headers: {
          'Content-Type': 'application/json'
        },success:function(res){//res.data.data.weather;
          
          // 更新数据
           that.setData({
                      weather:res.data.data.weather
               });
        }
      });
  },
  onReady:function(){
    // 页面渲染完成
     console.log(' weather 【onReady】.....');
      this.setData({
        a:1
     });
  },
  onShow:function(){
    // 页面显示
     console.log(' weather 【onShow】.....');
     this.setData({
        b:1
     });
  },
  onHide:function(){
    // 页面隐藏
     console.log(' weather 【onHide】.....');
    
  },
  onUnload:function(){
    // 页面关闭
     console.log(' weather 【onUnload】.....');
    
  }
})