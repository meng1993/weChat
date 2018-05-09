var app = getApp()
Page({
  data: {
    imgUrls: [
      {
        link: '/pages/index/index',
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      }, {
        link: '/pages/logs/logs',
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
      }, {
        link: '/pages/test/test',
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    userInfo: {},
    circular: true
  },
  onLoad: function () {
    console.log('onLoad test');
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh(),
    wx.showNavigationBarLoading() //在标题栏中显示加载
  },
  onShareAppMessage: function(){
    return {
      title: '自定义转发标题'
    }
  }
})  
