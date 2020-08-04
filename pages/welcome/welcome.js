import douban from "../../utils/douban"
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[]
  },

  clickHandler(){
    // wx.navigateBack(),
    wx.switchTab({
      url: '/pages/board/board',
    }) 
    //往本地存储里面存标志
    wx.setStorageSync('douban_welcome', true)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let res = await db.collection ("in_theaters").where({}).limit(3).get();
      let result = []
      res.data.map(item=>{
        result.push({
          id:item.id,
          image:item.images.small
        })
      })
          //   //更新movies的数据
      this.setData({
        movies:result
      })



    // douban({
    //   url:"in_theaters",
    //   data:{
    //     start:0,
    //     count:3
    //   }
    // }).then(res=>{
    //   // console.log("res=>",res)
    //   let result = []
    //   res.data.subjects.map(item=>{
    //     result.push({
    //       id:item.id,
    //       image:item.images.small
    //     })
    //   })
    //   //更新movies的数据
    //   this.setData({
    //     movies:result
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