// pages/move/move.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHiden: false,
    movies: [],
    lastId: 0,
    scrollHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: 'http://v3.wufazhuce.com:8000/api/channel/movie/more/' + this.data.lastId +'?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
      method: 'GET',
      success: function (res) {
        _this.setData({
          movies: _this.data.movies.concat(res.data.data),
          lastId: res.data.data[res.data.data.length - 1].id,
          loadingHiden: true
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      scrollHeight: wx.getSystemInfoSync().windowHeight
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
  getMovies: function () {
    let _this = this
    this.setData({
      loadingHiden: false
    })
    wx.request({
      url: 'http://v3.wufazhuce.com:8000/api/channel/movie/more/' + this.data.lastId + '?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
      method: 'GET',
      success: function (res) {
        _this.setData({
          movies: _this.data.movies.concat(res.data.data),
          lastId: res.data.data[res.data.data.length - 1].id,
          loadingHiden: true
        })
      }
    })
  },
  getDetail: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'movie-detail/movieDetail?id=' + id
    })
  }
})