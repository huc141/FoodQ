// pages/profile/profile.js
const app = getApp();

Page({

        /**
         * 页面的初始数据
         */
        data: {
            isLogin: false,
            userInfo: {
                nickName: '用户',
                avatarUrl: '',
                userId: '123456'
            },
            stats: {
                scans: 12,
                avoided: 5,
                favs: 3
            }
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad(options) {
            // 页面加载时执行，检查登录状态
            // 这里简单模拟检查是否登录
            const isLogin = wx.getStorageSync('isLogin') || false;
            this.setData({
                isLogin: isLogin
            });
            
            // 如果已登录，获取用户信息
            if (isLogin) {
                this.getUserInfo();
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

        login: function() {
            // 模拟登录
            wx.showLoading({
                title: '登录中...',
            });
            
            setTimeout(() => {
                // 模拟登录成功
                const userInfo = {
                    nickName: '测试用户',
                    avatarUrl: '',
                    userId: '123456'
                };
                
                // 保存登录状态
                wx.setStorageSync('isLogin', true);
                wx.setStorageSync('userInfo', userInfo);
                
                this.setData({
                    isLogin: true,
                    userInfo: userInfo
                });
                
                wx.hideLoading();
                
                wx.showToast({
                    title: '登录成功',
                    icon: 'success'
                });
            }, 1000);
        },
        
        logout: function() {
            wx.showModal({
                title: '退出登录',
                content: '确定要退出登录吗？',
                success: (res) => {
                    if (res.confirm) {
                        // 清除登录状态
                        wx.removeStorageSync('isLogin');
                        wx.removeStorageSync('userInfo');
                        
                        this.setData({
                            isLogin: false,
                            userInfo: {
                                nickName: '用户',
                                avatarUrl: '',
                                userId: '123456'
                            }
                        });
                        
                        wx.showToast({
                            title: '已退出登录',
                            icon: 'success'
                        });
                    }
                }
            });
        },
        
        getUserInfo: function() {
            // 从本地存储获取用户信息
            const userInfo = wx.getStorageSync('userInfo');
            if (userInfo) {
                this.setData({
                    userInfo: userInfo
                });
            }
        },
        
        navigateToSettings: function() {
            wx.navigateTo({
                url: '/pages/profile/settings/settings'
            });
        },
        
        navigateToFavorites: function() {
            wx.navigateTo({
                url: '/pages/profile/favorites/favorites'
            });
        },
        
        navigateToAlerts: function() {
            wx.navigateTo({
                url: '/pages/profile/alerts/alerts'
            });
        },
        
        navigateToFeedback: function() {
            wx.navigateTo({
                url: '/pages/profile/feedback/feedback'
            });
        },
        
        navigateToAbout: function() {
            wx.navigateTo({
                url: '/pages/profile/about/about'
            });
        }
})