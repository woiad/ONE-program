import api from '../../../api/api.js'
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
    api.getMovieDetail ({
      query: {
        id: options.id
      },
      success: (res) => {
        if (res.data.res === 0) {
          this.setData({
            detail: res.data.data
          })
        }
      }
    })
    api.getMovieText({
      query: {
        id: options.id
      },
      success: (res) => {
        if (res.data.res === 0) {
          this.setData({
            text: res.data.data,
            contentData: app.towxml.toJson(res.data.data.data[0].content, 'html'),
            loaidngHidden: true
          })
        }
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