//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'MiHome_Store',
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 100,
    "banner": [
          {
            "pic_url": "https://img.yzcdn.cn/upload_files/2016/03/15/Fg0m5pEXcSQZN_fQPxTpUrkohhGW.jpg!580x580.jpg",
          },
          {
            "pic_url": "https://img.yzcdn.cn/upload_files/2016/03/15/Fq3b9oFZNJSfdHgPRfz4LHa8kEeE.jpg!580x580.jpg",
          },
          {
            "pic_url": "https://img.yzcdn.cn/upload_files/2016/06/16/Fh_hWdrNaZNvyG8TbdSArm6WEAOB.jpg!580x580.jpg",
          },
          {
            "pic_url": "https://img.yzcdn.cn/upload_files/2016/08/26/FqG8bWsMeyar_dJTyNK0sNKaaY_l.jpg!580x580.jpg",
          },
          {
            "pic_url": "https://img.yzcdn.cn/upload_files/2016/03/30/FqL0LJ9hsmVozcrnvGgcoCQEPmnc.jpg!580x580.jpg",
          }
        ],
    hotgoods: [
      {
        "name": "title",
        "summary": "subhead",
        "pic_url": ""
      },
      {
        "name": "title",
        "summary": "subhead",
        "pic_url": ""
      },
      {
        "name": "title",
        "summary": "subhead",
        "pic_url": ""
      },
      {
        "name": "title",
        "summary": "subhead",
        "pic_url": ""
      },
      {
        "name": "title",
        "summary": "subhead",
        "pic_url": ""
      },
      {
        "name": "title",
        "summary": "subhead",
        "pic_url": ""
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      that.update()
    })
  }
})
