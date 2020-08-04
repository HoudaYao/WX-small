// pages/detail/detail.js
import douban from "../../utils/douban"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:"",
    photos:[]
  },
  //图片预览  API
  clickPhotos(){
    let phpotsList =[]
    this.data.photos.map(item=>{
      phpotsList.push(item.image)
    })
    wx.previewImage({
      urls:this.data.photos  ////urls需要预览的图片链接列表
    })  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    //结构参数
    let {id,collectionName} =options
  let res= await douban({
      collectionName,id,
      loadingTop : true
    })
    let detail = res.data[0]
    let photos = []
    detail.casts.map(item=>{
      if(item.avatars){
        photos.push(item.avatars.small)
      }
    })
    this.setData({
      detail,
      photos
    })
       wx.setNavigationBarTitle({
        title: this.data.detail.title
      })
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#ff0000',
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      })

    
    // wx.showNavigationBarLoading()
    // console.log("dhajdh=>",options.id)
    // douban({
    //   url:"subject/"+options.id,
    //   loardingTop:true
    // }).then(res=>{
    //   // wx.hideNavigationBarLoading()
    //   this.setData({
    //     detail:res.data,
    //     photos:res.data.photos
    //   })
    //   wx.setNavigationBarTitle({
    //     title: this.data.detail.title
    //   })
    //   wx.setNavigationBarColor({
    //     frontColor: '#ffffff',
    //     backgroundColor: '#ff0000',
    //     animation: {
    //       duration: 400,
    //       timingFunc: 'easeIn'
    //     }
    //   })
    // })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})