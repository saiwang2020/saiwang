// pages/sc_other/index.js
const app = getApp()
const registerDB = wx.cloud.database().collection("register")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    competitionId:null,
    competition:[{}],
    nickName:null,
    avatarUrl:null,
    openid:null,
    registerList:[{}],
    text:'点击报名',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    var userInfo = wx.getStorageSync('user');
    this.setData({
      nickName:userInfo.nickName,
      avatarUrl:userInfo.avatarUrl,
      openid:userInfo.openId
    })




    var txt = options.a
    this.setData({
      competitionId:txt
    })

    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('competition').where({
      _id: this.data.competitionId
    }).get({
      success: res => {
        console.log(res)
        this.setData({
          competition: res.data
        })
        let that = this
        wx.cloud.callFunction({
        name:"getRegister",
        data:{
          openid:that.data.openid,
          competitionId:that.data.competition[0].competitionId
        },
        success(res){
          that.data.registerList = res.result.data
         if(that.data.registerList[0] != null){
          that.setData({
           text:'已报名'
         })
        }
      },
      fail(res){
        console.log("请求云函数失败",res)
        
      }
    })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
    

    
   
    
  },

  register:function(){
    if(this.data.registerList[0] == null){
      registerDB.add({
        data:{
          userId:this.data.openid,
          userName:this.data.nickName,
          userImage:this.data.avatarUrl,
          competitionId:this.data.competition[0].competitionId,
          competitionOnlyid:this.data.competition[0]._id,
          competitionName:this.data.competition[0].title,
          rank:null,
          competitionState:"比赛未开始",
        }
      })
      wx.showToast({
        title: '比赛报名成功',
        icon:'success',
        duration:1000
      })
      setTimeout(
        function(){
          wx.reLaunch({
            url: '../../pages/competition/competition',
          })
        },
        1000
      )
      
      this.setData({
        text:'已报名'
      })  
    }
    else{
        let that = this
        wx.cloud.callFunction({
        name:"deleteRegister",
        data:{
          openid:that.data.openid,
          competitionId:that.data.competition[0].competitionId
        },
        success(res){
          //console.log("删除成功");
          wx.showToast({
            title: '取消报名成功',
            icon:'success',
            duration:1000
          })
          setTimeout(
            function(){
              wx.reLaunch({
                url: '../../pages/competition/competition',
              })
            },
            1000
          )
          
          that.setData({
            text:'点击报名'
          })  
      },
      fail(res){
        console.log("请求云函数失败",res)
        
      }
    })
    }
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