//app.js

var httpDigger = require('./http_digger.js') 

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res);
        var that = this;
        that.func.postServer("authorize/login", {code: res.code}, function(responseJson) {
          console.log("authorize/login: ", responseJson);
          that.globalData.token = responseJson.data.token;
        });
      }
    })
    // 获取用户信息
    wx.getSetting({      
      success: res => {
        var that = this;
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo;

              var parameters = res.userInfo;
              parameters.wx_open_id = "a5";
              that.func.postServer("authorize/update_userinfo", parameters, function(responseJson) {
                console.log("authorize/update_userinfo: ", responseJson);
                that.globalData.userInfo = responseJson.data;
              },);

              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            }
          })
        }
      }
    })
  },

  globalData: {    
    userInfo: null,
    token: null,
  },

  func: {  
    postServer: httpDigger.postServer  
  }
})