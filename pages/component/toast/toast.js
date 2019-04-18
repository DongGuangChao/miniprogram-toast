// pages/component/toast/toast.js
let timer, timer2
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    usToast:{
      type: Object,
      value:{
        text: '', //提示描述
        time: 0 //提示时间 单位 s
      },
      observer:function(e){
        this.show(e)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    text:'',
    show:false,
    close:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show: function (obj) {
      console.log(obj)
      if (obj && typeof obj == 'object') {
        if(this.data.text){//已经有值的情况下先隐藏
          this.setData({
            show: false,
            close:false,
            text: ''
          })
        }
        this.setData({
          show: true,
          text: obj.text
        })
        let This = this;
        if (timer){
          clearTimeout(timer)
        }
        timer=setTimeout(function () {
          This.setData({
            close: true,
          })
          if (timer2) {
            clearTimeout(timer)
          }
          timer2 = setTimeout(function () {
            This.setData({
              show: false,
              close: false,
              text: ''
            })
          }, 300)
        }, obj.time * 1000)
      }
    }
  },
})
