// pages/move/move.js
import api from '../../api/api.js'
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
    api.getMovieById({
      query: {
        id: this.data.lastId
      },
      success: (res) => {
        if (res.data.res === 0) {
          this.setData({
            movies: this.data.movies.concat(res.data.data),
            lastId: res.data.data[res.data.data.length - 1].id,
            loadingHiden: true
          })
        }
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
    this.setData({
      loadingHiden: false
    })
    api.getMovieById({
      query: {
        id: this.data.lastId
      },
      success: (res) => {
        if (res.data.res === 0) {
          this.setData({
            movies: this.data.movies.concat(res.data.data),
            lastId: res.data.data[res.data.data.length - 1].id,
            loadingHiden: true
          })
        }
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