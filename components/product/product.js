// components/product/product.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{//接受外部传入的item属性
        type:Object
    },
    collectionName:{ //接受list给其传入的collectionName属性
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetail(){
      wx.navigateTo({
        // url: '/pages/detail/detail?id='+this.properties.item.id+,//必须有id和collectionName
        url: '/pages/detail/detail?id='+this.properties.item.id+"&collectionName="+this.properties.collectionName,
      })
    }
  }
})
