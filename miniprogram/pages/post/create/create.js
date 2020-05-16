// pages/post/create/create.js

const util = require('./util.js')

Page({

  /**
   * Page initial data
   */
  data: {
    itemData: null,        

    demandTitle: null,

    demandContent: null,

    expiringDate: "请选择 >",

    shouldShowSpecialitiesSelectionView: false,    
    arrOfSpecialityItem: null,
    shouldShowChosenSpecialities: false,
    arrOfSelectedIndexForSpecialities: [],
    selectedSpecialityString: "",
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
    var tmpList = [];
    console.log("arrOfSelectedIndexForSpecialities: ", this.data.arrOfSelectedIndexForSpecialities);
    for(var i = 0; i < this.data.arrOfSelectedIndexForSpecialities.length; i++) {
      let specialityString = this.data.arrOfSpecialityItem[i];
      tmpList.push(specialityString);
    } 
    this.data.selectedSpecialityString = tmpList.join(",");
    console.log("selectedSpecialityString:", this.data.selectedSpecialityString);
    this.setData({
      shouldShowSpecialitiesSelectionView: false,
      selectedSpecialityString: this.data.selectedSpecialityString,
    });
    this.arrOfSelectedIndexForSpecialities = [];
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
  },

  submitButtonClicked: function(e) {    
    console.log("submitButtonClicked");
    if (this.data.demandTitle == null) {
      wx.showToast({
        title: '请输入标题',
        icon: "none",
      });
      return;
    }
    if (this.data.demandContent == null) {
      wx.showToast({
        title: '请输入描述信息',
        icon: "none",
      });
      return;
    }
    if (this.data.expiringDate == "请选择 >") {
      wx.showToast({
        title: '请选择结束时间',
        icon: "none",
      });
      return;
    }
    if (this.data.selectedSpecialityString == null || this.data.selectedSpecialityString == "") {
      wx.showToast({
        title: '请选择所属行业',
        icon: "none",
      });
      return;
    }

    var params = {
      title: this.data.demandTitle,
      content: this.data.demandContent,
      expiring_time: (Date.parse(new Date(this.data.expiringDate + " 23:59:59"))/1000),
      speciality: this.data.selectedSpecialityString,
      type: parseInt(this.itemData.type_id),
    };
    console.log("params: ", params);
    wx.showLoading({
      title: '',
      mask: true,
    });
    getApp().func.postServer("demand/create_demand", params, function(r) {
      console.log("demand/create_demand:", r);
      if (r.code == 0) {
        wx.showToast({
          title: r.message,
          icon: "none",
        });
        return;
      }

      wx.showToast({
        title: r.message,
        icon: "success",
      });
      wx.navigateBack({
        delta: 1,
      });
    });
  },

  getDataFromServer: function() {
    wx.showLoading({
      title: '',
    });

    var that = this;
    getApp().func.postServer("demand/get_demand_speciality_list", {}, function(r) {
      console.log("get_demand_speciality_list:", r);
      wx.hideLoading();
      that.data.arrOfSpecialityItem = r.data;
      that.setData({
        arrOfSpecialityItem: that.data.arrOfSpecialityItem,
      });      
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.itemData = JSON.parse(options.item);
    console.log("this.itemData:", this.itemData);
    // this.setData({
    //   expiringDate: util.getTodayDate(),
    // });
    
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