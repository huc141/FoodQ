// pages/history/history.js
const app = getApp();

Page({

        /**
         * 页面的初始数据
         */
        data: {
            activeTab: 'all',
            historyList: [
                {
                    id: 1,
                    name: '奥利奥夹心饼干',
                    date: '今天 14:30',
                    icon: 'icon-cookie',
                    type: 'food',
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
                    type: 'food',
                    tags: [
                        { text: '糖含量极高', type: 'tag-danger' },
                        { text: '含咖啡因', type: 'tag-warning' }
                    ]
                },
                {
                    id: 3,
                    name: '亿滋食品有限公司',
                    date: '2023-09-20',
                    icon: 'icon-company',
                    type: 'company',
                    tags: [
                        { text: '资质验证通过', type: 'tag-safe' }
                    ]
                },
                {
                    id: 4,
                    name: '旺旺雪饼',
                    date: '2023-09-15',
                    icon: 'icon-food',
                    type: 'food',
                    tags: [
                        { text: '正规企业生产', type: 'tag-safe' },
                        { text: '含防腐剂', type: 'tag-warning' }
                    ]
                }
            ],
            filteredList: []
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad(options) {
            // 从全局数据获取历史记录，这里使用模拟数据
            const historyList = this.data.historyList;
            this.setData({
                filteredList: historyList
            });
        },

        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady() {

        },

        /**
         * 生命周期函数--监听页面显示
         */
        onShow() {
            // 每次显示页面时刷新数据
            this.filterHistory(this.data.activeTab);
        },

        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide() {

        },

        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload() {

        },

        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        onPullDownRefresh() {

        },

        /**
         * 页面上拉触底事件的处理函数
         */
        onReachBottom() {

        },

        /**
         * 用户点击右上角分享
         */
        onShareAppMessage() {

        },

        switchTab: function(e) {
            const tab = e.currentTarget.dataset.tab;
            this.setData({
                activeTab: tab
            });
            this.filterHistory(tab);
        },

        filterHistory: function(tab) {
            const historyList = this.data.historyList;
            let filteredList = [];
            
            if (tab === 'all') {
                filteredList = historyList;
            } else {
                filteredList = historyList.filter(item => item.type === tab);
            }
            
            this.setData({
                filteredList: filteredList
            });
        },

        viewDetail: function(e) {
            const id = e.currentTarget.dataset.id;
            const type = e.currentTarget.dataset.type;
            
            if (type === 'food') {
                wx.navigateTo({
                    url: '/pages/result/result?id=' + id
                });
            } else if (type === 'company') {
                wx.navigateTo({
                    url: '/pages/companyResult/companyResult?id=' + id
                });
            }
        },

        clearHistory: function() {
            wx.showModal({
                title: '清空历史记录',
                content: '确定要清空所有历史记录吗？',
                success: (res) => {
                    if (res.confirm) {
                        this.setData({
                            historyList: [],
                            filteredList: []
                        });
                        
                        // 实际应用中，还需要清除存储的数据
                        wx.showToast({
                            title: '已清空历史记录',
                            icon: 'success'
                        });
                    }
                }
            });
        },

        goToHome: function() {
            wx.switchTab({
                url: '/pages/index/index'
            });
        }
})