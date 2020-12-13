const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "list1": [
      {
        id:0,
        "text": "参赛数",
        "data": "10",
      },
      {
        id:1,
        "text": "创建比赛数",
        "data": "2",
      },
      {
        id:2,
        "text": "关注",
        "data": "12",
      },
      {
        id:3,
        "text": "粉丝",
        "data": "19",
      }
    ],
    "list2": [
      {
        id:0,
        "text": "创建比赛",
        "iconPath": "cloud://white-0g207wek9b8dec4f.7768-white-0g207wek9b8dec4f-1304359522/常用功能/创建.png",
      },
      {
        id:1,
        "text": "个人简介",
        "iconPath": "cloud://white-0g207wek9b8dec4f.7768-white-0g207wek9b8dec4f-1304359522/常用功能/公司简介.png",
      },
      {
        id:2,
        "text": "我的钱包",
        "iconPath": "cloud://white-0g207wek9b8dec4f.7768-white-0g207wek9b8dec4f-1304359522/常用功能/钱包.png",
      },
      {
        id:3,
        "text": "赛事管理",
        "iconPath": "cloud://white-0g207wek9b8dec4f.7768-white-0g207wek9b8dec4f-1304359522/常用功能/赛事 (2).png",
      },
    ],
    "list2": [
      {
        id:0,
        "text": "创建比赛",
        "iconPath": "cloud://white-0g207wek9b8dec4f.7768-white-0g207wek9b8dec4f-1304359522/常用功能/创建.png",
      },
      {
        id:1,
        "text": "个人简介",
        "iconPath": "cloud://white-0g207wek9b8dec4f.7768-white-0g207wek9b8dec4f-1304359522/常用功能/公司简介.png",
      },
      {
        id:2,
        "text": "我的钱包",
        "iconPath": "cloud://white-0g207wek9b8dec4f.7768-white-0g207wek9b8dec4f-1304359522/常用功能/钱包.png",
      },
      {
        id:3,
        "text": "赛事管理",
        "iconPath": "cloud://white-0g207wek9b8dec4f.7768-white-0g207wek9b8dec4f-1304359522/常用功能/赛事 (2).png",
      },
    ],
    "list3": [
      {
        id:0,
        "text": "我的收藏",
        "iconPath": "cloud://white-0g207wek9b8dec4f.7768-white-0g207wek9b8dec4f-1304359522/常用功能/收藏xx.png",
      },
      {
        id:1,
        "text": "浏览足迹",
        "iconPath": "cloud://white-0g207wek9b8dec4f.7768-white-0g207wek9b8dec4f-1304359522/常用功能/浏览xx.png",
      },
      {
        id:2,
        "text": "客服帮助",
        "iconPath": "cloud://white-0g207wek9b8dec4f.7768-white-0g207wek9b8dec4f-1304359522/常用功能/客服.png",
      },
      {
        id:3,
        "text": "会员服务",
        "iconPath": "cloud://white-0g207wek9b8dec4f.7768-white-0g207wek9b8dec4f-1304359522/常用功能/会员.png",
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = wx.getStorageSync('user');
    console.log("userInfo",userInfo.avatarUrl);
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