 import api from '../../../../../api/api.js'
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
    api.getMusicList({
      query: {
        time: options.time
      },
      success: (res) => {
        if (res.data.res === 0) {
          this.setData({
            musicItem: _this.data.musicItem.concat(res.data.data),
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
    wx.navigateTo({
      url: 'single/single?single=' + e.currentTarget.dataset.single
    })
  }
})