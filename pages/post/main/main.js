// pages/post/main/main.js
Page({

  /**
   * Page initial data
   */
  data: {
    banner_image_url:"https://pic3.zhimg.com/v2-48d604586e07ab6c2503f532b70b535e_1200x500.jpg",

    arrOfDemandCategoryItem: ['产品设计', '工艺设计', '工艺优化', '采购', '计划与调度', '生产作业', '所有', '产品设计', '工艺设计', '工艺优化', '采购', '计划与调度', '生产作业', '所有', '产品设计', '工艺设计', '工艺优化', '采购', '计划与调度', '生产作业'],
  },

  categoryItemCellClicked: function(event) {
    let itemIndex = event.currentTarget.dataset.index;
    console.log(itemIndex);
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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