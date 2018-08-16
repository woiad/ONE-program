// pages/index/previous/details-list/detailList.js
import api from '../../../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: [],
    title: '',
    loadingHiden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let params = options.time
    let _this = this
    this.setData({
      title: options.title
    })
    api.getVolList({
      query: {
        time: options.time
      },
      success: (res) => {
        console.log(res)
        if (res.data.res === 0) {
          let monthly = res.data.data
          monthly.map((vol) => {
            vol.hp_makettime = new Date(vol.hp_makettime).toString().split(' ').slice(1, 4).join(' ')
          })
          this.setData({
            itemList: monthly,
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

  clikeHandel: function (e) {
    wx.navigateTo({
      url: 'detail/detail?hp_title=' + e.currentTarget.dataset.hp_title + '&hp_author=' + e.currentTarget.dataset.hp_author + '&hp_content=' + e.currentTarget.dataset.hp_content + '&hp_img_url=' + e.currentTarget.dataset.hp_img_url + '&hp_makettime=' + e.currentTarget.dataset.hp_makettime
    })
  }
})