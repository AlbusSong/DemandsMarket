// pages/post/create/create.js

const util = require('./util.js')

Page({

  /**
   * Page initial data
   */
  data: {
    shouldShowChosenSpecialities: false,
    expiringDate: "2020-04-27",
  },

  tryToChooseSpeciality: function(event) {
    this.setData({
      shouldShowChosenSpecialities: true
    });
  },

  datePickerChanged: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      expiringDate: e.detail.value,
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      expiringDate: util.getTodayDate(),
    });    
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