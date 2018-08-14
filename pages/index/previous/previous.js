import util from '../../../utils/util.js'
import {MONTH} from '../../../utils/CONST.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeArr: [],
    queryParams: '',
    active: 'essay',
    sort: '',
    articalPage: 'essay-detail/essayDetail',
    loadingHiden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.sort) {
      this.setData({
        sort: options.sort
      })
    }
    this.setData({
      timeArr: util.timeList(),
      loadingHiden: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '往期列表'
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
  clickHandle: function (e) {
    let timeParams = e.currentTarget.dataset.time.split('.')
    for (let i = 0; i < MONTH.length; i++) {
      if (timeParams[0] === MONTH[i]) {
        timeParams[0] = i + 1
      }
    }
    this.setData({
      queryParams: timeParams[1].toString() + '-' +timeParams[0]
    })
    if (this.data.sort === 'imageText') {
      wx.navigateTo({
        url: 'details-list/detailList?time=' + this.data.queryParams + '&title=' + e.currentTarget.dataset.time
      })
    }
    if (this.data.sort === 'read') {
      wx.navigateTo({
        url:'details-list/read-detail/'+ this.data.articalPage + '?time=' + this.data.queryParams
      })
    }
    if (this.data.sort === 'music') {
      wx.navigateTo({
        url: 'details-list/music-detail/music-detail?time=' + this.data.queryParams + '&title=' + e.currentTarget.dataset.time
      })
    }
  },
  essayChose: function (e) {
    if (e.currentTarget.dataset.active === 'essay') {
      this.setData({
        active: 'essay',
        articalPage: 'essay-detail/essayDetail'
      })
    }
  },
  serialChose: function (e) {
    if (e.currentTarget.dataset.active === 'serial') {
      this.setData({
        active: 'serialcontent',
        articalPage: 'serial-detail/serialDetail'
      })
    }
  },
  questionChose: function (e) {
    if (e.currentTarget.dataset.active === 'question') {
      this.setData({
        active: 'question',
        articalPage: 'question-detail/quesstionDetail'
      })
    }
  }
})