Page({
  data: {
    
  },
  onLoad: function () {
    setTimeout(() => {
      wx.switchTab({
        url: '/pages/index/index'
      })
    }, 2000)
  }
}) 