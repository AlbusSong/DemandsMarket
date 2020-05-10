// pages/find/main/main.js

Page({

  /**
   * Page initial data
   */
  data: {
    banner_image_url: "https://pic3.zhimg.com/v2-48d604586e07ab6c2503f532b70b535e_1200x500.jpg",
    
    // 0: 备战状态（被隐藏不显示）；1：战斗中状态（转圈中）；2:退役（再也不需要显示，因为没有更多数据了）
    loadMoreStatus: 0,

    searchContent: "",
    pageIndex: 0,
    seconds_ago: 0,
    filter_province: "所有",
    filter_city: "所有",
    arrOfData: [],
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    arrOfFunctionItem: [{
        title: "需求分类"
      },
      {
        title: "发布时间"
      },
      {
        title: "需求状态"
      },
      {
        title: "所在地区"
      },
    ],

    // Filter View related
    selectedIndexForFilterView: 3,
    shouldShowFilterView: false,
    arrOfDemandFilterItem: ['所有', '北京', '河南', '上海', '江苏', '广东', '山西', '贵州', '浙江', '河北', '黑龙江', '辽宁', '吉林', '江西', '北京', '河南', '上海', '江苏', '广东', '山西', '贵州', '浙江', '河北', '黑龙江', '辽宁', '吉林', '江西', ],
    selectedIndexForDemandFilter: 0,

    arrOfTimeFilterItem: ['不限', '今天发布', '三天内发布', '一周内发布', '一月内发布', '两月内发布'],
    selectedIndexForTimeFilter: 0,

    arrOfStatusFilterItem: ['不限', '对接中', '待预审', '跟进中', '已对接'],
    selectedIndexForStatusFilter: 0,

    arrOfAreaFilterItem: ['所有', '产品设计', '工艺设计', '工艺优化', '采购', '计划与调度', '生产作业', '所有', '产品设计', '工艺设计', '工艺优化', '采购', '计划与调度', '生产作业', '所有', '产品设计', '工艺设计', '工艺优化', '采购', '计划与调度', '生产作业'],
    selectedIndexForAreaFilter: 0,
  },

  // Demand market tableview
  demand_market_tableview_cell_clicked: function (event) {
    let itemIndex = event.currentTarget.dataset.index;
    console.log(itemIndex);
    wx.navigateTo({
      url: '../detail/detail',
    })
  },

  functionAreaClicked: function (event) {
    let itemIndex = Math.floor(4 * event.detail.x / wx.getSystemInfoSync().windowWidth);
    console.log(itemIndex);
    this.setData({
      selectedIndexForFilterView: itemIndex,
      shouldShowFilterView: true
    });
  },

  functionAreaInFilterViewClicked: function (event) {
    let itemIndex = Math.floor(4 * event.detail.x / wx.getSystemInfoSync().windowWidth);
    console.log(itemIndex);
    this.setData({
      selectedIndexForFilterView: itemIndex,
    });
  },

  demandFilterItemClicked: function (event) {
    let itemIndex = event.currentTarget.dataset.index;
    console.log(itemIndex);
    this.setData({
      selectedIndexForDemandFilter: itemIndex
    });
    this.filterBackgroundClicked();
  },

  timeFilterItemClicked: function (event) {
    let itemIndex = event.currentTarget.dataset.index;
    this.setData({
      selectedIndexForTimeFilter: itemIndex
    });
  },

  statusFilterItemClicked: function (event) {
    let itemIndex = event.currentTarget.dataset.index;
    this.setData({
      selectedIndexForStatusFilter: itemIndex
    });
  },

  areaFilterItemClicked: function (event) {
    let itemIndex = event.currentTarget.dataset.index;
    this.setData({
      selectedIndexForAreaFilter: itemIndex
    });
  },

  filterBackgroundClicked: function (event) {
    this.setData({
      shouldShowFilterView: false
    });
  },

  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          text: '搜索结果',
          value: 1
        }, {
          text: '搜索结果2',
          value: 2
        }])
      }, 200)
    })
  },

  selectResult: function (e) {
    console.log('select result', e.detail)
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
      pageSize: 20,
      pageIndex: this.data.pageIndex,
      type_ids: "",
      create_time_offset: this.data.seconds_ago,
      province: this.data.filter_province,
      city: this.data.filter_city,
    }

    var that = this;
    getApp().func.postServer("demand/get_demand_list", params, function(r) {      
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

  tryToLoadMore: function(event) {
    this.data.pageIndex++;
    this.getDataFromServer();
  },

  onReachBottom: function () {
    // this.getArticles(page);
    console.log("lsjfalsjls");
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
    // wx.navigateTo({
    //   url: '../../mine/company/submit/submit',
    // });

    // wx.navigateTo({
    //   url: '../../mine/certificate_management/certificate_management',
    // });

    // wx.navigateTo({
    //   url: '../../mine/my_demands/demand_detail/demand_detail',
    // })

    // wx.showLoading({
    //   title: "",
    // })
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {},

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