var p = getApp();
var j = p.a+1;
// console.log(p.a + 1);

Page({
  data: {
    tempFilePaths: [],
    jj: j
  },
  chooseimage: function(){
    var _this = this;
    wx.chooseImage({
      count: 9, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        var newarray = _this.data.tempFilePaths;
        _this.setData({
          // tempFilePaths: newarray.concat(res.tempFilePaths)
          tempFilePaths: res.tempFilePaths.concat(newarray)
        })
        // console.log(_this.tempFilePaths)
      }
    })  
  },
  onLoad: function (options) {
    // wx.request({
    //   // http://192.168.0.201:8095
    //   // url: 'newhp-service/teaching/v1/getChallengeParticulars.do',
    //   url: 'http://192.168.0.150:8080/app/organizationMsz-service/manage/v3/courseOffline/list.do',
    //   method: 'post',
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
  } 
})
