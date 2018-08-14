// pages/movie/movie-detail/movieDetail.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTitle: '文章',
    story_url: '../../image/music_story_selected.png',
    about_url: '../../image/music_about_default.png',
    detail: {},
    text: {},
    contentData: {},
    loaidngHidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: 'http://v3.wufazhuce.com:8000/api/movie/detail/ '+options.id + '?channel=wdj&source=channel_movie&source_id=9240&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
      method: 'GET',
      success: function (res) {
        _this.setData({
          detail: res.data.data
        })
      }
    })
    wx.request({
      url: 'http://v3.wufazhuce.com:8000/api/movie/'+ options.id + '/story/1/0',
      method: 'GET',
      success: function (res) {
        _this.setData({
          text: res.data.data,
          contentData: app.towxml.toJson(res.data.data.data[0].content, 'html'),
          loaidngHidden: true
        })
      }
    })
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
  
  },
  switchContent: function (e) {
    if (e.target.dataset.type === 'story') {
      this.setData({
        showTitle: '文章',
        story_url: '../../image/music_story_selected.png',
        about_url: '../../image/music_about_default.png'
      })
    } else if (e.target.dataset.type === 'about') {
      this.setData({
        showTitle: '电影信息',
        story_url: '../../image/music_story_default.png',
        about_url: '../../image/music_about_selected.png'
      })
    }
  }
})