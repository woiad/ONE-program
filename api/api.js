const host = 'http://v3.wufazhuce.com:8000'
const WXRequest = ((params, url) => {
  wx.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {'Content-Type': 'application/json'},
    success: (res) => {
      params.success && params.success(res)
    },
    fail: (err) => {
      params.fail && params.fail(err)
    },
    complete: (res) => {
      params.complete && params.complete(res)
    }
  })
})

//index
const getVolIdList = (params) => {
  WXRequest(params, host + '/api/hp/idlist/0')
}
const getVolById = (params) => {
  WXRequest(params, host + '/api/hp/detail/' + params.query.id)
}
const getVolList = (params) => {
  WXRequest(params, host + '/api/hp/bymonth/' + params.query.time)
}

// read
const getReadCarousel = (params) => {
  WXRequest(params, host + '/api/reading/carousel')
}
const getReading = (params) => {
  WXRequest(params, host + '/api/reading/index')
}
const getReadById = (params) => {
  WXRequest(params, host + '/api/' + params.query.port + '/' + params.query.id)
}
const getReadEssayList = (params) => {
  WXRequest(params, host + '/api/essay/bymonth/' + params.query.time)
}
const getReadQuestionList = (params) => {
  WXRequest(params, host + '/api/question/bymonth/' + params.query.time)
}
const getReadSerialList = (params) => {
  WXRequest(params, host + '/api/serialcontent/bymonth/' + params.query.time)
}

// music
const getMusicIdList = (params) => {
  WXRequest(params, host + '/api/music/idlist/0')
}
const getMusicById = (params) => {
  WXRequest(params, host + '/api/music/detail/' + params.query.id)
}
const getMusicList = (params) => {
  WXRequest(params, host + '/api/music/bymonth/' + params.query.time)
}
const getMusicListDetail = (params) => {
  WXRequest(params, host + '/api/music/detail/' + params.query.id)
}

// movie
const getMovieById = (params) => {
  WXRequest(params, host + '/api/channel/movie/more/' + params.query.id)
}
const getMovieDetail = (params) => {
  WXRequest(params, host + '/api/movie/detail/' + params.query.id)
}
const getMovieText = (params) => {
  WXRequest(params, host + '/api/movie/' + params.query.id + '/story/1/0')
}
module.exports = {
  getVolIdList,
  getVolById,
  getVolList,
  getReadCarousel,
  getReading,
  getReadById,
  getReadEssayList,
  getReadQuestionList,
  getReadSerialList,
  getMusicIdList,
  getMusicById,
  getMusicList,
  getMusicListDetail,
  getMovieById,
  getMovieDetail,
  getMovieText
}