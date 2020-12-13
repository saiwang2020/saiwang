// pages/contact/contact.js
const app = getApp();
var inputVal = '';
var msgList = [];
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;
const DB = wx.cloud.database().collection("user");
const wordDB = wx.cloud.database().collection("chatLog")
wordDB.get({
  success(res){
    console.log("请求成功",res)
  },
  fail(res){
    console.log("请求失败",res)
  }
})
/**
 * 初始化数据
 */
function initData(that) {
  inputVal = '';

  msgList = [{
      speaker: '0',
      contentType: 'text',
      content: '欢迎来到英雄联盟，敌军还有30秒到达战场，请做好准备！'
    },
    {
      speaker: 'customer',
      contentType: 'text',  
      content: '我怕是走错片场了...'
    },
    {
      speaker: '0',
      contentType: 'text',
      content: '哈哈哈哈哈'
    }
  ]
  that.setData({
    msgList,
    inputVal
  })
}

/**
 * 计算msg总高度
 */
// function calScrollHeight(that, keyHeight) {
//   var query = wx.createSelectorQuery();
//   query.select('.scrollMsg').boundingClientRect(function(rect) {
//   }).exec();
// }

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: '100vh',
    inputBottom: 0,
    avatarUrl:null,
    nickName:null
  },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var userInfo = wx.getStorageSync('user');
    console.log("userInfo",userInfo);
    initData(this);
    this.setData({
      cusHeadIcon:userInfo.avatarUrl,
      nickName:userInfo.nickName,
      avatarUrl:userInfo.avatarUrl,
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 获取聚焦
   */
  focus: function(e) {
    keyHeight = e.detail.height;
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: keyHeight + 'px'
    })
    //计算msg高度
    // calScrollHeight(this, keyHeight);

  },

  //失去聚焦(软键盘消失)
  blur: function(e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (msgList.length - 1)
    })

  },

  /**
   * 发送点击监听
   */
  sendClick: function(e) {
    msgList.push({
      speaker: 'customer',
      contentType: 'text',
      content: e.detail.value
    }),
  
    wordDB.add({
      data:{
        sendID:"2001",
        receiveID:"2004",
        word:e.detail.value
      }
    }),
    wordDB.get({
      success(res){
        console.log("请求成功",res)
      },
      fail(res){
        console.log("请求失败",res)
      }
    }),
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });
  },

  /**
   * 退回上一页
   */
  toBackClick: function() {
    wx.navigateBack({})
  }

})
