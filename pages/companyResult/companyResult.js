// pages/companyResult/companyResult.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
            companyInfo: {
                name: '亿滋食品有限公司',
                queryTime: '2023-09-20 15:45',
                isValid: true,
                creditCode: '91310000607401566Q',
                creditCodeValid: true,
                licenseNumber: 'SC10531011501234',
                licenseValid: true,
                address: '上海市浦东新区张江高科技园区李冰路701号',
                establishDate: '1998年5月12日',
                creditLevelClass: 'level-safe',
                creditLevelWidth: 85,
                creditDesc: '近3年无食品安全违规记录，企业信用良好。'
            }
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad(options) {
            if (options.name) {
                // 如果是通过手动查询，可以根据传入的企业名称加载数据
                const companyName = options.name;
                this.setData({
                    'companyInfo.name': companyName
                });
            }
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

        goBack: function() {
            wx.navigateBack();
        },

        shareResult: function() {
            wx.showToast({
                title: '分享功能开发中',
                icon: 'none'
            });
        },

        viewDetailReport: function() {
            wx.showToast({
                title: '详细报告加载中',
                icon: 'loading'
            });
            
            setTimeout(() => {
                wx.showToast({
                    title: '功能开发中',
                    icon: 'none'
                });
            }, 1500);
        },

        saveResult: function() {
            wx.showToast({
                title: '查询结果已保存',
                icon: 'success'
            });
            
            setTimeout(() => {
                wx.switchTab({
                    url: '/pages/index/index'
                });
            }, 1500);
        }
})