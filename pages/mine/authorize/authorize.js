// pages/mine/authorize/authorize.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  // 登录成功回调
  onGotUserInfo: function (e) {
    getApp().globalData.userInfo = e.detail.userInfo;
    wx.switchTab({
      url: '../../find/main/main',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    getApp().userInfoReadyCallback = res => {
      console.log("userInfoReadyCallback: " + res);
    };
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {
  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})