// pages/UpDate/UpDate.js
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexvlu:"1",
  },
test(){
  this.SetDataActivity("1")
},

SetDataActivity(indexvlu){
  var fileID=this.UpLoadImage()
  db.collection("Activity").where({index:indexvlu}).update({
    data:{
      ImgId:fileID
    }
  })
},

UpLoadImage(){
  wx.chooseImage({
    success:res=>{
    var filePath = res.tempFilePaths[0]
    var fileName=Date.now();
    wx.cloud.uploadFile({
          cloudPath:fileName+".jpg",
          filePath:filePath
        }).then(res=>{
          return res.fileID
        })
      }
    }
  )


},



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})