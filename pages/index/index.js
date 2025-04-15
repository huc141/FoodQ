// index.js
Page({
  data: {
    historyList: [
      {
        id: 1,
        name: '奥利奥夹心饼干',
        date: '今天 14:30',
        icon: 'icon-cookie',
        tags: [
          { text: '糖含量较高', type: 'tag-warning' },
          { text: '无有害添加剂', type: 'tag-safe' }
        ]
      },
      {
        id: 2,
        name: '可口可乐',
        date: '昨天 10:15',
        icon: 'icon-drink',
        tags: [
          { text: '糖含量极高', type: 'tag-danger' },
          { text: '含咖啡因', type: 'tag-warning' }
        ]
      },
      {
        id: 3,
        name: '旺旺雪饼',
        date: '2023-09-15',
        icon: 'icon-food',
        tags: [
          { text: '正规企业生产', type: 'tag-safe' },
          { text: '含防腐剂', type: 'tag-warning' }
        ]
      }
    ]
  },
  
  onLoad: function() {
    // 页面加载时执行
  },
  
  navigateToScan: function() {
    wx.navigateTo({
      url: '/pages/scan/scan'
    })
  },
  
  navigateToCompany: function() {
    wx.navigateTo({
      url: '/pages/company/company'
    })
  },
  
  viewHistoryDetail: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/result/result?id=' + id
    })
  }
})
