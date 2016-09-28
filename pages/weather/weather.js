//获取应用实例
var app = getApp();
alert('weather......');
Page({
  data:{
    // text:"这是一个页面"
    weather: {city_name:'sh'}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
     console.log('onLoad');
     
     var that = this
     that.title = '天气预报';
    alert('load',weather);
    //加载天气预报数据
      wx.request({
        url: 'http://www.toutiao.com/stream/widget/local_weather/data/?city=',
        headers: {
          'Content-Type': 'application/json'
        },success:function(res){

            app.globalData.weather={};//res.data.weather;
               that.setData({
                      weather:res.data.weather
               });
        }
      });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})