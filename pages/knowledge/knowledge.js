// pages/knowledge/knowledge.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
            showSearchInput: false,
            searchText: '',
            categories: [
                { id: 1, name: '食品添加剂', icon: 'info', bgColor: '#42B983' },
                { id: 2, name: '营养成分', icon: 'success', bgColor: '#2196F3' },
                { id: 3, name: '安全标准', icon: 'warn', bgColor: '#FF9800' },
                { id: 4, name: '企业资质', icon: 'waiting', bgColor: '#9C27B0' },
                { id: 5, name: '风险识别', icon: 'cancel', bgColor: '#F44336' },
                { id: 6, name: '法律法规', icon: 'download', bgColor: '#607D8B' },
                { id: 7, name: '毒理学知识', icon: 'info', bgColor: '#795548' },
                { id: 8, name: '健康提示', icon: 'success', bgColor: '#4CAF50' }
            ],
            articles: [
                {
                    id: 1,
                    title: '常见食品防腐剂及其安全使用知识',
                    desc: '防腐剂是食品中常见的添加剂，本文解析常见的防腐剂类型及其安全限量标准。',
                    source: '食品安全中心',
                    date: '2023-09-22',
                    image: '/images/article1.png'
                },
                {
                    id: 2,
                    title: '反式脂肪酸的危害及如何避免摄入',
                    desc: '反式脂肪酸对心血管健康有显著影响，本文教您如何在日常饮食中识别并避免它们。',
                    source: '健康生活周刊',
                    date: '2023-09-18'
                },
                {
                    id: 3,
                    title: '食品标签解读：配料表中的隐藏信息',
                    desc: '食品标签包含丰富信息，学会解读配料表能帮助您更好地选择健康食品。',
                    source: '消费者权益保护',
                    date: '2023-09-15',
                    image: '/images/article3.png'
                }
            ],
            additives: [
                {
                    id: 1,
                    name: '山梨酸钾 (E202)',
                    shortDesc: '常用于面包、果酱、饮料等食品的防腐剂',
                    safety: 'safe',
                    safetyText: '使用安全'
                },
                {
                    id: 2,
                    name: '亚硝酸钠 (E250)',
                    shortDesc: '用于肉制品防腐和保持肉色',
                    safety: 'caution',
                    safetyText: '限量使用'
                },
                {
                    id: 3,
                    name: '三聚氰胺',
                    shortDesc: '非法添加物，不应出现在任何食品中',
                    safety: 'danger',
                    safetyText: '严禁使用'
                }
            ]
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad(options) {
            // 页面加载时执行
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

        showSearch: function() {
            this.setData({
                showSearchInput: true
            });
        },

        inputSearch: function(e) {
            this.setData({
                searchText: e.detail.value
            });
        },

        clearSearch: function() {
            this.setData({
                searchText: ''
            });
        },

        doSearch: function() {
            if (!this.data.searchText.trim()) {
                return;
            }
            
            wx.showToast({
                title: '搜索功能开发中',
                icon: 'none'
            });
            
            // 实际应用中，这里应该执行搜索逻辑
        },

        selectCategory: function(e) {
            const categoryId = e.currentTarget.dataset.id;
            wx.navigateTo({
                url: `/pages/knowledge/category/category?id=${categoryId}`
            });
        },

        viewArticle: function(e) {
            const articleId = e.currentTarget.dataset.id;
            wx.navigateTo({
                url: `/pages/knowledge/article/article?id=${articleId}`
            });
        },

        viewAdditive: function(e) {
            const additiveId = e.currentTarget.dataset.id;
            wx.navigateTo({
                url: `/pages/knowledge/additive/additive?id=${additiveId}`
            });
        }
    });