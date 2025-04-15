Page({
  data: {
    tempImagePath: '',
    recentItems: [
      { id: 1, name: '奥利奥饼干' },
      { id: 2, name: '可口可乐' },
      { id: 3, name: '旺旺雪饼' }
    ]
  },
  
  onLoad: function() {
    // 页面加载时执行
  },
  
  goBack: function() {
    wx.navigateBack();
  },
  
  takePhoto: function() {
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          tempImagePath: res.tempImagePath
        });
      },
      fail: (error) => {
        console.error('拍照失败:', error);
        wx.showToast({
          title: '拍照失败，请重试',
          icon: 'none'
        });
      }
    });
  },
  
  chooseFromAlbum: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: (res) => {
        this.setData({
          tempImagePath: res.tempFilePaths[0]
        });
      }
    });
  },
  
  retakePhoto: function() {
    this.setData({
      tempImagePath: ''
    });
  },
  
  analyzePhoto: function() {
    wx.showLoading({
      title: '正在识别中...',
    });
    
    // 模拟分析过程
    setTimeout(() => {
      wx.hideLoading();
      wx.navigateTo({
        url: '/pages/result/result?type=new'
      });
    }, 2000);
  },
  
  cameraError: function(e) {
    console.error('相机错误:', e.detail);
    wx.showToast({
      title: '相机启动失败，请检查权限设置',
      icon: 'none'
    });
  },
  
  viewRecentItem: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/result/result?id=' + id
    });
  }
}) 