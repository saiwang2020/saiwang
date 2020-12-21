// pages/Find/index.js
const userDB = wx.cloud.database().collection("user")
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    competitionList:[],
    
    user:[],
    "list1": [
      {
        id:0,
        "text": "创建比赛",
        "iconPath": "cloud://white-0g207wek9b8dec4f.7768-white-0g207wek9b8dec4f-1304359522/icon/创建比赛(1).png",
        "url":"/pages/CreateGames/index",

      },
      {
        id:1,
        "text": "游戏竞赛",
        "iconPath": "cloud://white-0g207wek9b8dec4f.7768-white-0g207wek9b8dec4f-1304359522/icon/游戏.png",
        "url":"/pages/Game/index"
        
      },
      {
        id:2,
        "text": "校园比赛",
        "iconPath": "cloud://white-0g207wek9b8dec4f.7768-white-0g207wek9b8dec4f-1304359522/icon/校园比赛.png",
        "url":"/pages/CampusCompetition/index"
      },
      {
        id:3,
        "text":"征稿大赛",
        "iconPath": "cloud://white-0g207wek9b8dec4f.7768-white-0g207wek9b8dec4f-1304359522/icon/征稿比赛.png",
        "url":"/pages/SolicitContributions/index"
      },
    ],
    "list2": [
      {
        id:0,
        "text": "线上比赛",
        "url":"/pages/onlineGame/index"
      },
      {
        id:1,
        "text": "|",
        "url":null
        
      },
      {
        id:2,
        "text": "线下比赛",
        "url":"/pages/offlineGame/index"
        
      },
     
    ]
  },
  getData(){
    let that = this
    wx.cloud.callFunction({
      name:"getCompetition",
      success(res){
        console.log("请求云函数成功",res),
        that.setData({
          competitionList:res.result.data
        })
      },
      fail(res){
        console.log("请求云函数失败",res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
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