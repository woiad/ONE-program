// pages/index/previous/details-list/music-detail/single/single.js
import util from "../../../../../../utils/util.js"
import api from '../../../../../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    singleData: {},
    play_url: '../../../../../image/music_play.png',
    flag: true,
    loadingHiden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.getMusicListDetail({
      query: {
        id: options.single
      },
      success: (res) => {
        if (res.data.res === 0) {
          res.data.data.makettime = util.formatMakettime(res.data.data.makettime)
          res.data.data.story = util.filterContent(res.data.data.story)
          res.data.data.contentType = 'story'
          this.setData({
            singleData: res.data.data,
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
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '单曲',
    })
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
  togglePlay: function () {
    if (this.data.flag) {
      this.playMusic(this.data.singleData.music_id, this.data.singleData.title)
      this.setData({
        flag: false,
        play_url: '../../../../../image/music_pause.png',
      })
    } else {
      this.pauseMusic()
      this.setData({
        flag: true,
        play_url: '../../../../../image/music_play.png',
      })
    }
  },
  playMusic: function (url, title) {
    wx.playBackgroundAudio({
      dataUrl: url,
      title: title
    })
  },
  pauseMusic: function () {
    wx.pauseBackgroundAudio()
  },
  switchContent: function (e) {
    if (e.target.dataset.type) {
      this.data.singleData.contentType = e.target.dataset.type
      this.setData({
        singleData: this.data.singleData
      })
    }
  }
})