// pages/index/previous/details-list/read-detail/serial-detail/serialDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serialData: [],
    loadHiden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: 'http://v3.wufazhuce.com:8000/api/serialcontent/bymonth/' + options.time,
      method: 'GET',
      success: function (res) {
        _this.setData({
          serialData: _this.data.serialData.concat(res.data.data),
          loadHiden: true
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '连载',
    })
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
  
  },
  serialClick: function (e) {
    wx.navigateTo({
      url: '../../../../../read/details/detail?id=' + e.currentTarget.dataset.essayId + '&sort=连载' + '&port=' + e.currentTarget.dataset.port
    })
  }
})