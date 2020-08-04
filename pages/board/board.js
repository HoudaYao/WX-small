// pages/board/board.js
import douban from "../../utils/douban"
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:{
      key:"coming_soon",//传个key值
      title:"即将上映",
      content:[]
    },
    list:[
      {key:"coming_soon",title:"即将上映"},
      {key:"top250",title:"口碑榜"},
      {key:"in_theaters",title:"正在上映"},
    ]
  },
  tapName: function(e) {
    console.log(e.target.dataset.a)//获取参数值
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let res = await db.collection(this.data.banner.key).limit(3).get()
    let result =[]
    res.data.map(item=>{
      result.push({
        id:item.id,
        image:item.images.small
      })
    })
    this.setData({
      "banner.content":result
    })
   

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