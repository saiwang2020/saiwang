// pages/competition/competition.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"参赛情况",
        isActive:true
      },
      {
        id:1,
        name:"创赛情况  ",
        isActive:false
      },
      {
        id:2,
        name:"待参加  ",
        isActive:false
      },
      {
        id:3,
        name:"待点评  ",
        isActive:false
      },
      {
        id:4,
        name:"全部比赛  ",
        isActive:false
      },
    ]
  },
  handleItemChange(e){
   //接受一下子组件传递过来的参数 
   const {index}=e.detail;
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({tabs})
  },
 
})