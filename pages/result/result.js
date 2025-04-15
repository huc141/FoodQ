Page({
  data: {
    foodInfo: {
      name: '奥利奥夹心饼干',
      scanTime: '2023-09-20 14:30',
      score: 65,
      scoreClass: 'score-warning',
      levelClass: 'level-warning',
      levelWidth: 65,
      tags: [
        { text: '糖含量较高', type: 'tag-warning' },
        { text: '含人工色素', type: 'tag-warning' },
        { text: '无致癌物', type: 'tag-safe' }
      ],
      ingredients: [
        {
          name: '白砂糖',
          desc: '主要作用：增加甜味，改善口感。高糖摄入与肥胖、糖尿病等慢性疾病有关联。',
          tags: [
            { text: '含量较高', type: 'tag-warning' }
          ],
          lethalDose: '成人约需摄入1.5kg才会达到致死量'
        },
        {
          name: '小麦粉',
          desc: '主要作用：提供饼干的主体结构和质地。对麸质过敏者需注意避免食用。',
          tags: [
            { text: '常规食品原料', type: 'tag-safe' }
          ]
        },
        {
          name: '植物油',
          desc: '主要作用：提供口感，增加香味。适量摄入不会对健康造成危害。',
          tags: [
            { text: '常规食品原料', type: 'tag-safe' }
          ]
        },
        {
          name: '焦糖色素',
          desc: '主要作用：着色剂，使食品呈现焦糖色。一般认为安全，但少量人群可能出现过敏反应。',
          tags: [
            { text: '人工色素', type: 'tag-warning' }
          ],
          lethalDose: '需大量摄入(>10g/kg体重)才有可能造成危害'
        }
      ]
    }
  },
  
  onLoad: function(options) {
    if (options.id) {
      // 如果是查看历史记录，可以根据id加载对应的食品信息
      // 这里使用示例数据
    }
  },
  
  goBack: function() {
    wx.navigateBack();
  },
  
  shareResult: function() {
    wx.showToast({
      title: '分享功能开发中',
      icon: 'none'
    });
  },
  
  saveResult: function() {
    wx.showToast({
      title: '分析结果已保存',
      icon: 'success'
    });
    
    setTimeout(() => {
      wx.switchTab({
        url: '/pages/index/index'
      });
    }, 1500);
  }
}) 