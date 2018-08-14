// pages/index/previous/details-list/music-detail/music-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicItem: [],
    title: '',
    loadingHiden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    this.setData({
      title: options.title
    })
    wx.request({
      url: 'http://v3.wufazhuce.com:8000/api/music/bymonth/' + options.time,
      method: 'GET',
      success: function (res){
        _this.setData({
          musicItem: _this.data.musicItem.concat(res.data.data),
          loadingHiden: true
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.title,
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
  clickHandle: function (e) {
    let chart = JSON.stringify(e.currentTarget.dataset.single)
    wx.navigateTo({
      url: 'single/single?single=' + chart
    })
  }
})