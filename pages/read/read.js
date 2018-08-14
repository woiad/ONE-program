// pages/read/read.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carouselItem: [],
    storyEssay: [],
    question: [],
    serial: [],
    loadingHiden: false,
    current: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: 'http://v3.wufazhuce.com:8000/api/reading/carousel',
      method: 'GET',
      success: function (res) {
        _this.setData({
          carouselItem: _this.data.carouselItem.concat(res.data.data)
        })
      }
    })
    wx.request({
      url: 'http://v3.wufazhuce.com:8000/api/reading/index',
      method: 'GET',
      success: function (res) {
        console.log(res)
        _this.setData({
          storyEssay: _this.data.storyEssay.concat(res.data.data.essay),
          question: _this.data.question.concat(res.data.data.question),
          serial: _this.data.serial.concat(res.data.data.serial),
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
      title: '阅读',
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
  essayClick: function (e) {
    wx.navigateTo({
      url: 'details/detail?id=' + e.currentTarget.dataset.essayId + '&sort=' + e.currentTarget.dataset.sort + '&port=' + e.currentTarget.dataset.port
    })
  },
  questionClick: function (e) {
    wx.navigateTo({
      url: 'details/detail?id=' + e.currentTarget.dataset.questionId + '&sort=' + e.currentTarget.dataset.sort + '&port=' + e.currentTarget.dataset.port
    })
  },
  serialClick: function (e) {
    wx.navigateTo({
      url: 'details/detail?id=' + e.currentTarget.dataset.serialId + '&sort=' + e.currentTarget.dataset.sort + '&port=' + e.currentTarget.dataset.port
    })
  },
  swiperHandle: function (e) {
    if (e.detail.current === 10) {
      wx.navigateTo({
        url: '../index/previous/previous?sort=read',
      })
      this.setData({
        current: e.detail.current - 1
      })
    }
  }
})