import util from '../../utils/util.js'
import api from '../../api/api.js'
const app = getApp()

Page({
  data: {
    itemParams: [],
    itemList: [],
    current: 0,
    loadingHiden: false
  },
  onLoad:  function () {
    api.getVolIdList({
      success: (res) => {
        if (res.data.res === 0) {
          let idList = res.data.data
          this.getItem(idList)
        }
      }
    })
  },
  getItem: function(idList) {
    let itemList = this.data.itemList
    if (idList.length > 0) {
      let query = {
        id: idList.shift()
      }
      api.getVolById({
        query,
        success: (res) => {
          let listData = res.data.data
          listData.hp_makettime = util.formatMakettime(listData.hp_makettime)
          itemList.push(listData)
          this.getItem(idList)
        }
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
        url: 'previous/previous?sort=imageText&page=index',
        success: function (res) {
          _this.setData({
            current: current -1
          })
        }
      })
    }
  }
})
