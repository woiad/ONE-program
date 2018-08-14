// pages/read/details/detail.js
import util from '../../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    audio_img: '../../image/audio_play.png',
    title: '',
    textData: {},
    audioText: '收听'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let _this = this
    this.setData({
      title: options.sort
    })
    wx.request({
      url: 'http://v3.wufazhuce.com:8000/api/' + options.port + '/' + options.id,
      method: 'GET' ,
      success: function (res) {
        if (res.data.data.hp_content) {
          res.data.data.hp_content = util.filterContent(res.data.data.hp_content)
        }
        if (res.data.data.content) {
          res.data.data.hp_content = util.filterContent(res.data.data.content)
        }
        if (res.data.data.answer_content) {
          res.data.data.hp_content = util.filterContent(res.data.data.answer_content)
        }
        res.data.data.maketime = util.formatMakettime(res.data.data.maketime)
        res.data.data.question_makettime = util.formatMakettime(res.data.data.question_makettime)
        _this.setData({
          textData: res.data.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx,wx.setNavigationBarTitle({
      title: this.data.title
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
  toggleAudio: function () {
    if (this.data.audio_img === '../../image/audio_play.png') {
      this.setData({
        audio_img: '../../image/audio_pause.png',
        audioText: '暂停'
      })
      this.playAudio()
    } else {
      this.setData({
        audio_img: '../../image/audio_play.png',
        audioText: '收听'
      })
      this.pauseAudio()
    }
  },
  playAudio: function () {
    wx.playBackgroundAudio({
      dataUrl: this.data.textData.audio,
      title: this.data.textData.hp_title
    })
  },
  pauseAudio: function () {
    wx.pauseBackgroundAudio()
  }
})