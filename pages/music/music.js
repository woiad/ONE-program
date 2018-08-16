// pages/music/music.js
import util from '../../utils/util.js'
import api from '../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHiden: false,
    flag: true,
    itemList: [],
    playId: '',
    default_url: '../image/music_play.png',
    play_url: '../image/music_play.png',
    current: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.getMusicIdList({
      success: (res) => {
        if (res.data.res === 0) {
          this.getData(res.data.data)
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '音乐',
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
  getData: function (id) {
    let dataArr = this.data.itemList
    if (id.length > 0) {
      api.getMusicById({
        query: {
          id: id.shift()
        },
        success: (res) => {
          if (res.data.res === 0) {
            res.data.data.maketime = util.formatMakettime(res.data.data.maketime)
            res.data.data.story = util.filterContent(res.data.data.story)
            res.data.data.contentType = 'story'
            dataArr.push(res.data.data)
            this.getData(id)
          }
        }
      })
    } else {
      this.setData({
        itemList: dataArr,
        loadingHiden: true,
        iconId: dataArr[0].id
      })
    }
  },
  switchContent: function (e) {
   let musicId = e.currentTarget.dataset.musicId
   let type = e.target.dataset.type
   if (type) {
     this.data.itemList.forEach((item, index) => {
       if (item.id === musicId) {
         this.data.itemList[index].contentType = type
         this.setData({
           itemList: this.data.itemList
         })
       }
    })
   }
  },
  togglePlay: function (e) {
    if (e.currentTarget.dataset.musicId) {
      this.data.itemList.forEach((item) => {
        if (item.title === e.currentTarget.dataset.musicTitle) {
          if (this.data.playId && this.data.playId !== item.id) {
            this.playMusic(e.currentTarget.dataset.musicId, e.currentTarget.dataset.musicTitle)
            this.setData({
              playId: item.id
            })
            return 
          } else{
            this.setData({
              playId: item.id
            })
          }
          if (this.data.flag) {
            this.playMusic(e.currentTarget.dataset.musicId, e.currentTarget.dataset.musicTitle)
            this.setData({
              flag: false,
              play_url: '../image/music_pause.png',
            })
          } else {
            this.pauseMusic()
            this.setData({
              play_url: '../image/music_play.png',
              flag: true
            })
          }
        }
      })
    }
  },
  playMusic: function (musicId, musicTitle) {
    wx.playBackgroundAudio({
      dataUrl: musicId,
      title: musicTitle
    })
  },
  pauseMusic: function () {
    wx.pauseBackgroundAudio()
  },
  slideChangeHandle: function (e) {
    if (e.detail.current > 9) {
      wx.navigateTo({
        url: '../index/previous/previous?sort=music&page=music'
      })
      this.setData({
        current: e.detail.current - 1
      })
    }
  }
})