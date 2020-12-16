const DB = wx.cloud.database().collection("competition")
const userDB = wx.cloud.database().collection("user")
Page({
  data: {
    classification:null,    //比赛分类
    title:null,   //比赛标题
    description:null,   //比赛说明
    location:null,   //比赛地点
    locationdetail:null,  //地点说明
    time:null,   //比赛时间
    population:null,    //报名人数
    registerWay:null,    //报名方式
    cost:null,     //报名费用
    sum:null,    //奖金总金额
    array: ['游戏大赛', '专业大赛', '歌舞大赛','演讲大赛','征稿大赛'],
    objectArray: [
      {
        id: 0,
        name: '征稿大赛'
      },
      {
        id: 1,
        name: '游戏大赛'
      },
      {
        id: 2,
        name: '专业大赛'
      },
      {
        id: 3,
        name: '歌舞大赛'
      },
      {
        id: 4,
        name: '演讲大赛'
      },
     
    ],
    items: [
      { name: 'onlinGame', value: '线上比赛' },
      { name: 'offlineGame', value: '线下比赛' },
    ],
    items1: [
      { name: 'unlimited ', value: '不限' },
      { name: 'single', value: '单人报名' },
      { name: 'team', value: '组队报名' },
    ],
    competition:[
      {
        classification:null,    //比赛分类
        title:null,   //比赛标题
        description:null,   //比赛说明
        location:null,   //比赛地点
        locationdetail:null,  //地点说明
        time:null,   //比赛时间
        population:null,    //报名人数
        registerWay:null,    //报名方式
        cost:null,     //报名费用
        sum:null    //奖金总金额
      }
    ],
    focus: false,

    
    
  },


  onLoad: function(options) {
    
  },



  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
    //this.data.competition[0].description = e.detail.value
  },
  title:function(e){
    console.log(e.detail.value);
    this.data.competition[0].title = e.detail.value
  },
  detail:function(e){
    console.log(e.detail.value)
    this.data.competition[0].description = e.detail.value
  },
  radioChange: function (e) {
    console.log('比赛地点',e.detail.value)
    this.data.competition[0].location = e.detail.value
  },
  locationDetail: function (e) {
    console.log('地点说明',e.detail.value)
    this.data.competition[0].locationdetail = e.detail.value
  },
  radioChange1: function (e) {
    console.log('报名方式',e.detail.value)
    this.data.competition[0].registerWay = e.detail.value
  },
  time:function(e){
    console.log(e.detail.value)
    this.data.competition[0].time = e.detail.value
  },
  population:function(e){
    console.log(e.detail.value)
    this.data.competition[0].population = e.detail.value
  },
  bindPickerChange: function (e) {
    var select = [];
    select = this.data.array;
    console.log('比赛分类:',select[e.detail.value])
    this.setData({
      index: e.detail.value
    }),
    this.data.competition[0].classification = e.detail.value
  },
  cost:function(e){
    console.log(e.detail.value)
    this.data.competition[0].cost = e.detail.value
  },
  sum:function(e){
    console.log(e.detail.value)
    this.data.competition[0].sum = e.detail.value
  },
  click:function(){
    var userInfo = wx.getStorageSync('user');
    console.log("userInfo",userInfo);
    if(userInfo.userType == "我是参赛人员"){
      wx.showToast({
        title: '您不是主办方,无法创建比赛',
        icon:'none',
        duration:2000
      })
    }
    else{
      DB.add({
        data:{
          classification:this.data.array[this.data.competition[0].classification],
          title:this.data.competition[0].title,
          description:this.data.competition[0].description,
          location:this.data.competition[0].location,
          locationdetail:this.data.competition[0].locationdetail,
          time:this.data.competition[0].time,
          population:this.data.competition[0].population,
          registerWay:this.data.competition[0].registerWay,
          cost:this.data.competition[0].cost,
          sum:this.data.competition[0].sum
        }
      })
      wx.switchTab({
        url: '../../pages/index/index',
      })
      wx.showToast({
        title: '创建比赛成功',
        icon:'success',
        duration:2000
      })
    }
  }
})