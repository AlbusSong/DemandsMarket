// pages/post/main/main.js
Page({

  /**
   * Page initial data
   */
  data: {
    banner_image_url:"https://pic3.zhimg.com/v2-48d604586e07ab6c2503f532b70b535e_1200x500.jpg",

    arrOfDemandCategoryItem: null,
  },

  categoryItemCellClicked: function(event) {
    let itemIndex = event.currentTarget.dataset.index;
    console.log(itemIndex);
    let itemData = this.data.arrOfDemandCategoryItem[itemIndex];
    wx.navigateTo({
      url: '../create/create?item=' + JSON.stringify(itemData),
    });
  },

  getDataFromServer: function() {
    wx.showLoading({
      title: '',
      mask: true,
    });

    var that = this;
    getApp().func.postServer("demand/get_demand_type_list", {}, function(r) {
      console.log(r);
      wx.hideLoading();
      that.data.arrOfDemandCategoryItem = r.data;
      that.setData({
        arrOfDemandCategoryItem: that.data.arrOfDemandCategoryItem,
      });
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.getDataFromServer();
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    // if (getApp().globalData.userInfo == null) {
    //   wx.redirectTo({
    //     url: '../../mine/authorize/authorize',
    //   });
    //   return;
    // }
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    // wx.redirectTo({
    //   url: '../../mine/authorize/authorize',
    // })
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