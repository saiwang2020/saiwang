//app.js
const app = getApp();
App({
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  globalData:{
    


    
  },
  
  onLaunch: function(options) {
    wx.cloud.init({ 
      env:"white-0g207wek9b8dec4f"
    }),
    wx.cloud.callFunction({
      name:"test",
      complete:res=>{
        console.log('callFunction test result: ',res.result.event.userInfo.openId)
      }
    })
  },
  onShow: function(options) {

  },
  onHide: function() {

  },
  onError: function(msg) {

  },
  //options(path,query,isEntryPage)
  onPageNotFound: function(options) {

  },
});
  