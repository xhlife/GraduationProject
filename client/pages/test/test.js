// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let username = wx.getStorageSync('userData').userinfo.username
    // console.log(username);
    wx.startWifi({
      success (res) {
        console.log(res.errMsg)
      }
    }),
    wx.getConnectedWifi({
      success:function(res){
        console.log(res)
      }
    })
   /*  wx.connectSocket({
      url: `ws://localhost:3000/concat?${username}:super`,
    })

    wx.onSocketOpen(function () {
      wx.sendSocketMessage({
        // data: [],
        data: '我是小程序'
      })
      setTimeout(() => {
        wx.sendSocketMessage({
          data: '123',
        })
      }, 10000)
    })
    wx.onSocketMessage(function (res) {
      console.log(res)
    })
    wx.onSocketError(function (err) {
      console.log(err)
    })*/
  }, 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})