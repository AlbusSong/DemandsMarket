// pages/mine/my_demands/demand_list/demand_list.js
Page({

  /**
   * Page initial data
   */
  data: {
    loadMoreStatus: 0,

    searchContent: "",
    pageIndex: 0,
    seconds_ago: 0,
    filter_province: "所有",
    filter_city: "所有",
    arrOfData: [],
  },

  demandListItemClicked: function(event) {
    let itemIndex = event.currentTarget.dataset.index;
    console.log(itemIndex);
    let the_id = this.data.arrOfData[itemIndex].the_id;
    wx.navigateTo({
      url: '../demand_detail/demand_detail?the_id=' + the_id,
    })
  },

  onReachBottom: function () {
    // this.getArticles(page);
    // console.log("lsjfalsjls");
  },

  tryToLoadMore: function(event) {
    this.data.pageIndex++;
    this.getDataFromServer();
  },

  loadNew: function() {
    console.log("eooodoodod");
  },

  getDataFromServer: function() {
    if (this.data.loadMoreStatus == 2) {
      return;
    }

    if (this.data.loadMoreStatus == 0 && this.data.pageIndex > 0) {
      this.data.loadMoreStatus = 1;
      this.setData({
        loadMoreStatus: 1,
      });
    }

    if (this.data.pageIndex == 0) {
      wx.showLoading({
        title: '',
        mask: true,
      });
    }
    
    var params = {
      pageSize: 5,
      pageIndex: this.data.pageIndex,
      type_ids: "",
      create_time_offset: this.data.seconds_ago,
      province: this.data.filter_province,
      city: this.data.filter_city,
    }

    var that = this;
    getApp().func.postServer("demand/get_my_demand_list", params, function(r) {      
      console.log(r);
      if (r.code == 0) {
        wx.showToast({
          title: r.message,
          icon: "none",
        })
        return;
      }

      wx.hideLoading();
      let newData = r.data;
      if (newData.length == 0) {
        that.data.loadMoreStatus = 2;
      } else {
        that.data.loadMoreStatus = 0;
        that.data.arrOfData = that.data.arrOfData.concat(newData);
      }      
      that.setData({
        loadMoreStatus: that.data.loadMoreStatus,
        arrOfData: that.data.arrOfData,
      });
    });
  },

  // onPullDownRefresh: function() {
  //   console.log("ldjljldldl");
  //   wx.showNavigationBarLoading();

  //   setTimeout(function()
  //   {
  //     // complete
  //     wx.hideNavigationBarLoading() //完成停止加载
  //     wx.stopPullDownRefresh() //停止下拉刷新
  //   },1500);
  // },  

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