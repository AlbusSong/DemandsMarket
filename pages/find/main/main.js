// pages/find/main/main.js

Page({

  /**
   * Page initial data
   */
  data: {
    banner_image_url:"https://pic3.zhimg.com/v2-48d604586e07ab6c2503f532b70b535e_1200x500.jpg",
    arrOfData: [1, 2, 3, 4],    
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    arrOfFunctionItem: [
      {title:"需求分类"},
      {title:"发布时间"},
      {title:"需求状态"},
      {title:"所在地区"},
    ],

    // Filter View related
    selectedIndexForFilterView: 0,
    shouldShowFilterView: true,
    arrOfDemandFilterItem: ['所有', '产品设计', '工艺设计', '工艺优化', '采购', '计划与调度', '生产作业', '所有', '产品设计', '工艺设计', '工艺优化', '采购', '计划与调度', '生产作业', '所有', '产品设计', '工艺设计', '工艺优化', '采购', '计划与调度', '生产作业'],
    selectedIndexForDemandFilter: 0,
  },  

  functionAreaClicked: function(event) {
    let itemIndex = Math.floor(4 * event.detail.x/wx.getSystemInfoSync().windowWidth);    
    console.log(itemIndex);
    this.setData({
      selectedIndexForFilterView: itemIndex,
      shouldShowFilterView: true
    });
  },

  functionAreaInFilterViewClicked: function(event) {
    let itemIndex = Math.floor(4 * event.detail.x/wx.getSystemInfoSync().windowWidth);
    console.log(itemIndex);
    this.setData({
      selectedIndexForFilterView: itemIndex,
    });
  },

  demandFilterItemClicked: function(event) {
    let itemIndex = event.currentTarget.dataset.index;
    console.log(itemIndex);
    this.setData({
      selectedIndexForDemandFilter: itemIndex
    });
    this.filterBackgroundClicked();
  },

  filterBackgroundClicked: function(event) {
    this.setData({
      shouldShowFilterView: false
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  search: function (value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
        }, 200)
    })
},
selectResult: function (e) {
    console.log('select result', e.detail)
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