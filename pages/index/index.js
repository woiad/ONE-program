import util from '../../utils/util.js'
const app = getApp()

Page({
  data: {
    itemParams: [],
    itemList: [],
    current: 0,
    loadingHiden: false
  },
  onLoad:  function () {
    let _this = this
    wx.request({
      url: 'http://v3.wufazhuce.com:8000/api/hp/idlist/0',
      method: 'GET',
      success: function (res) {
        _this.setData({
          itemParams: _this.data.itemParams.concat(res.data.data),
        })
        _this.getItem(_this.data.itemParams)
      }
    })
  },
  getItem: function(idList) {
    let itemList = this.data.itemList
    if (idList.length > 0) {
      let id = idList.shift()
      let _this = this
      wx.request({
        url: 'http://v3.wufazhuce.com:8000/api/hp/detail/' + id,
        method: 'GET',
        success: function (res) {
          let listData = res.data.data
          listData.hp_makettime = util.formatMakettime(listData.hp_makettime)
          itemList.push(listData)
          _this.getItem(idList)
        },
      })
    } else {
      this.setData({
        itemList: itemList,
        loadingHiden: true
      })
    }
  },
  changeHandle (e) {
    let current = e.detail.current
    let len = this.data.itemList.length
    let _this = this
    if (current === len) {
      this.setData({
        current: len
      })
      wx.navigateTo({
        url: 'previous/previous?sort=imageText',
        success: function (res) {
          _this.setData({
            current: current -1
          })
        }
      })
    }
  }
})
