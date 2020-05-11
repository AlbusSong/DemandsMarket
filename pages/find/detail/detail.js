// pages/find/detail/detail.js
Page({

  /**
   * Page initial data
   */
  data: {
    arrOfSubtitle: ["发布时间", "需求人", "结束时间", "需求状态", "需求类别", "行业"],

    the_id: null,
    detail_data: null,
  },

  getDataFromServer: function() {
    if (this.data.the_id == null) {
      return;
    }

    wx.showLoading({
      title: '',
      mask: true,
    })

    var that = this;
    getApp().func.postServer("demand/get_demand_detail", {the_id: this.data.the_id}, function(r) {
      if (r.code == 0) {
        wx.showToast({
          title: r.message,
          icon: "none",
        });
        return;
      }

      wx.hideLoading();
      that.data.detail_data = r.data;
      that.setData({
        detail_data: that.data.detail_data,
      });
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.data.the_id = parseInt(options.the_id);
    console.log("the_id: ", this.data.the_id);
    this.getDataFromServer();
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