const base_url = 'http://127.0.0.1:8080/v1.0/';
function postServer(uri, parameters = {}, success, shouldCache = false, failure = null) { 
  var header = {
    'content-type': 'application/json',
    'Authorization': 'Bearer ' + getApp().globalData.token,
  };
  // console.log(header)
  wx.request({  
      url: base_url + uri,
      data: parameters,  
      method: 'POST',
      header: header,
      timeout: 60 * 1000,
      enableCache: shouldCache,
      success: function(res){  
        return typeof success == "function" && success(res.data);
      },
      fail: function(e){  
        return typeof failure == "function" && failure(e);
      }  
    })  
}  
  
  
module.exports = {  
  postServer: postServer  
}  