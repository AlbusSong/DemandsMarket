// pages/post/create/create.js

const util = require('./util.js')

Page({

  /**
   * Page initial data
   */
  data: {
    shouldShowChosenSpecialities: false,
    expiringDate: "2020-04-27",
    shouldShowSpecialitiesSelectionView: false,
    arrOfSelectedIndexForSpecialities: [],
    arrOfSelectedIndexForSpecialitiesForReal: []
  },

  datePickerChanged: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      expiringDate: e.detail.value,
    });
  },

  tryToChooseSpeciality: function(event) {
    this.setData({
      shouldShowChosenSpecialities: true
    });
    this.setData({
      shouldShowSpecialitiesSelectionView: true
    });
  },

  selectSpecialitiesViewBackgroundClicked: function(event) {
    console.log(event);
    this.arrOfSelectedIndexForSpecialities = [];
    this.setData({
      shouldShowSpecialitiesSelectionView: false
    });
  },

  selectSpecialitiesViewBtnCancelClicked: function(event) {
    this.arrOfSelectedIndexForSpecialities = [];
    this.setData({
      shouldShowSpecialitiesSelectionView: false
    });
  },

  selectSpecialitiesViewBtnConfirmClicked: function(event) {
    this.arrOfSelectedIndexForSpecialities = [];
    this.setData({
      shouldShowSpecialitiesSelectionView: false,
      arrOfSelectedIndexForSpecialitiesForReal: this.data.arrOfSelectedIndexForSpecialities
    });    
  },

  selectSpecialitiesItemCellClicked: function(event) {
    let itemIndex = event.currentTarget.dataset.index;
    let indexInArr = this.data.arrOfSelectedIndexForSpecialities.indexOf(itemIndex);
    if (indexInArr == -1) {
      this.data.arrOfSelectedIndexForSpecialities.push(itemIndex);
    } else {
      this.data.arrOfSelectedIndexForSpecialities.splice(indexInArr, 1);
    }
    this.setData({
      arrOfSelectedIndexForSpecialities: this.data.arrOfSelectedIndexForSpecialities,
    });
    console.log(this.data.arrOfSelectedIndexForSpecialities);
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