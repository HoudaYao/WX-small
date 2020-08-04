App({ 
  onLaunch: async function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'demo-fc4lk',
        traceUser: true,
      })
    }
    //测试login云函数是否OK
    let res = await wx.cloud.callFunction({
      name:"login"
    })

    //从本地存储里面取出douban_welcome
    let flag = wx.getStorageSync('douban_welcome') 
    if(flag){
      wx.switchTab({
        url: '/pages/board/board',
      }) 
    }  
  },
  globalData: { 
    url:"https://api.douban.com/v2/movie/"
  } 
})