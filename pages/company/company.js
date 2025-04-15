// pages/company/company.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
            companyName: '',
            licenseNumber: '',
            address: ''
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

        goBack: function() {
            wx.navigateBack();
        },

        takePhoto: function() {
            wx.chooseMedia({
                count: 1,
                mediaType: ['image'],
                sourceType: ['camera'],
                camera: 'back',
                success: (res) => {
                    const tempFilePath = res.tempFiles[0].tempFilePath;
                    // 模拟识别过程
                    wx.showLoading({
                        title: '正在识别中...',
                    });
                    
                    setTimeout(() => {
                        wx.hideLoading();
                        wx.navigateTo({
                            url: '/pages/companyResult/companyResult?type=new'
                        });
                    }, 2000);
                }
            });
        },

        chooseFromAlbum: function() {
            wx.chooseMedia({
                count: 1,
                mediaType: ['image'],
                sourceType: ['album'],
                success: (res) => {
                    const tempFilePath = res.tempFiles[0].tempFilePath;
                    // 模拟识别过程
                    wx.showLoading({
                        title: '正在识别中...',
                    });
                    
                    setTimeout(() => {
                        wx.hideLoading();
                        wx.navigateTo({
                            url: '/pages/companyResult/companyResult?type=new'
                        });
                    }, 2000);
                }
            });
        },

        inputCompanyName: function(e) {
            this.setData({
                companyName: e.detail.value
            });
        },

        inputLicenseNumber: function(e) {
            this.setData({
                licenseNumber: e.detail.value
            });
        },

        inputAddress: function(e) {
            this.setData({
                address: e.detail.value
            });
        },

        searchCompany: function() {
            // 检查是否输入了必要信息
            if (!this.data.companyName && !this.data.licenseNumber) {
                wx.showToast({
                    title: '请至少输入企业名称或许可证编号',
                    icon: 'none'
                });
                return;
            }
            
            wx.showLoading({
                title: '查询中...',
            });
            
            // 模拟查询过程
            setTimeout(() => {
                wx.hideLoading();
                wx.navigateTo({
                    url: '/pages/companyResult/companyResult?type=new&name=' + this.data.companyName
                });
            }, 1500);
        }
})