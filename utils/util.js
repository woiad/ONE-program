import { VOL_BEGIN_TIME, MONTH, OTHER_BEGIN_TIME} from 'CONST'
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const getBeginTime = (type) => {
  let isOther = type !== 'read' && type !== 'music' && type !== 'question'
  let beginTime = isOther ? VOL_BEGIN_TIME : OTHER_BEGIN_TIME
  return new Date(beginTime)
}
const formatMakettime = (dateString) => {
  return (new Date(dateString)).toString().split(' ', 4).slice(1, 4).join(' ')
}
const timeList = (type) => {
  let timeArr = []
  let diff = 0
  let end_time = parseInt(new Date().getFullYear())
  let beg_time = parseInt(getBeginTime(type).getFullYear())
  let beg_month = getBeginTime(type).getMonth() + 1
  let end_month = new Date().getMonth() + 1
  for (let i = end_time; i >= beg_time; i--) {
    for (let j = MONTH.length; j > 0; j--) {
      timeArr.push(MONTH[j-1] + '.' + (i))
    }
  }
  return timeArr.slice(12 - end_month, timeArr.length - (beg_month-1))
}
const filterContent = function (text) {
  let filText =  text.replace(/[\r\n]/g, '').replace(/<.*?>/g, '\n');
  return filText
}
module.exports = {
  formatTime: formatTime,
  formatMakettime: formatMakettime,
  timeList: timeList,
  filterContent: filterContent
}
