let app = getApp()
//获取数据库对象
let db = wx.cloud.database()

//id代表外部传入的电影id
//q代表电影标题关键字
export default ({
  collectionName,id=null,data={start:0,count:20,q:null},loadingTop,loadingCenter
})=>{
  if(loadingTop){
    uni.showNavigationBarLoading()
    uni.setNavigationBarTitle({
      title: "加载中...."
    })
  }
  if(loadingCenter){
    uni.showLoading({
      title: '加载中....',
    })
  }
  return new Promise((resolve,reject)=>{  
    //完善查询条件
    let where = {}
    let title = {
      $regex:'.*'+data.q, //包含data.q就可以
      $options:"i"       //忽略大小写匹配
    }
    where = this.id ? {...where,id} : where  //根据id判断，如果传递id，则根据电影的id查询电影
    where = data.q ? {...where,title} : where //根据data.q关键字查询，如果包含此关键字，则返回对应的电影

    //根据collectionName查询数据
    db.collection(collectionName)
      .where(where)//全局查询
      .skip(data.start*data.count)//分页
      .limit(data.count)
      .get({
        success(res){
          resolve(res)
        },
        fail(err){
          reject(err)
        },
        complete(){
          if(loadingTop) uni.hideNavigationBarLoading()
          if(loadingCenter) uni.hideLoading()
        }
      })
  })
}
