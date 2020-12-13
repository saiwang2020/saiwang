//index.js
//获取应用实例
const app = getApp();
var userInfo;
wx.cloud.init({
  env: 'white-0g207wek9b8dec4f'
})
const DB = wx.cloud.database()
var that;
Page({
  data: {
    userType:'',
    items:[
      {value: '我是主办方', name: '我是主办方'},
      {value: '我是参赛人员', name: '我是参赛人员'}]
  }, 
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      userType:e.detail.value
    })
  },
  onLoad() {
    that = this;
    if(wx.getStorageSync('user')){
      wx.switchTab({
        url: '../../pages/index/index',
      })
    }
  },
  userAdd(openId) {
    var user = {
      userType: this.data.userType,
      nickName: userInfo.nickName,
      avatarUrl: userInfo.avatarUrl,
      openId: openId
    };
    wx.setStorageSync('user', user.data);
 
    DB.collection('user').add({
      // data 字段表示需新增的 JSON 数据
      data: user
    }).then(res => {
      console.log(res)
      wx.switchTab({
        url: '../../pages/index/index',
      })
    })
  },
  getUserInfo: function (e) {
    if(!this.data.userType){
      wx.showToast({
        title: '选择身份后才可登录',
        icon:'none'
      })
      return
    }
    console.log(e)
    userInfo = e.detail.userInfo;
 
    wx.cloud.callFunction({
      name: "getOpenid",
      success(res) {
        let openId = res.result.openid
        // 判断数据库中是否已经有数据
        DB.collection('user').where({
          openId: openId,
        })
        .get().then(ress => {
          console.log('ressressressressressressressress',ress.data[0])
          
          if (ress.data.length == 0) {
            that.userAdd(openId)
          } else {
            wx.setStorageSync('user', ress.data[0]);
            wx.switchTab({
              url: '../../pages/index/index',
            })
          }
        })
      },
      fail(res) {
        console.log('登录失败', res)
      }
    })
 
  }
})