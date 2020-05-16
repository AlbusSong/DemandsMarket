// pages/mine/main/main.js
Page({

  /**
   * Page initial data
   */
  data: {
    portrait_url: null,
    nickName: "",
  },

  gotoMyDemandsPage: function() {
    wx.navigateTo({
      url: '../my_demands/demand_list/demand_list',
    });
  },

  gotoCertificateManagementPage: function() {
    wx.navigateTo({
      url: '../certificate_management/certificate_management',
    });
  },  

  updateMineUI: function() {
    this.data.nickName = getApp().globalData.userInfo.nickName;
    this.data.portrait_url = getApp().globalData.userInfo.avatarUrl;
    this.setData({
      nickName: this.data.nickName,
      portrait_url: this.data.portrait_url,
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.updateMineUI();
  },  

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    // if (getApp().globalData.userInfo == null) {
    //   wx.redirectTo({
    //     url: '../authorize/authorize',
    //   });
    //   return;
    // }

    // if (getApp().globalData.userInfo.is_company == false) {
    //   wx.navigateTo({
    //     url: '../company/reminder/reminder',
    //   })
    //   return;
    // }
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    this.updateMineUI();
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