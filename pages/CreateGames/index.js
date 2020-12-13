Page({
  data: {

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
   
    focus: false
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
 
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }
})