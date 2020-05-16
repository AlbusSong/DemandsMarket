// pages/mine/incubation/incubation_submit/incubation_submit.js

const global_tool = require('../../../../others/tool/global_tool')

Page({

  /**
   * Page initial data
   */
  data: {
    incubationTypes: ["虚拟注册", "实际入驻"],
    selectedIndexOfIncubationType: 0,

    alreadyMovedIntoBaseOptions: ["是", "否"],
    selectedIndexOfAlreadyMovedIntoBaseOption: 0,

    desiredResourceTypes: ["讯飞技术", "生态链", "业务合作", "开放平台用户", "无"],
    selectedIndexOfResourceType: 0,

    coreValueTypes: ["人工智能相关", "高产值企业", "孵化第三方合作", "高新企业"],
    selectedIndexOfCoreValueType: 0,

    movedInDate: "请选择 >",
  },

  ocrButtonClicked: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        console.log("tempFilePaths: ", tempFilePaths)
      }
    });
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