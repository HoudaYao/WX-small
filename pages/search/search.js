// pages/search/search.js
import douban from "../../utils/douban"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search:null,
    subtitle:"请输入查询内容...",
    list:[],
    start:0,
    count:6,
    loading:false, //代表没有加载
    flag:false//希望初始化的时候任何内容都不显示
  },
  //搜索方法
  handlerSearch(e){
    if(!e.detail.value.trim()){
      this.setData({
        search:null,
        start:0,
        list:[],
        flag:false
      })
      return;
    }
    this.setData({
      list:[],
      search:e.detail.value
    })
   
    this.loadList()
  },
  //加载数据
  async loadList(){
    //一旦获取集合内容之前，就应该让loading变成true，代表加载中
    this.setData({loading:true,flag:true})
   let res = await douban({
     collectionName:"top250",
     data:{
       start:this.data.start,//封装start和count
       count:this.data.count,
       q:this.data.search
     }
   })
   this.setData({
     list:this.data.list.concat(res.data),//数据的拼接
     loading:false//加载完毕时
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
//加载数据 

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
    this.setData({
       start:++this.data.start//触底就更新数据//会覆盖原来的数据
    })
    this.loadList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})