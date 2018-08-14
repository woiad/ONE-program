import {BEGIN_TIME, MONTH} from 'CONST'
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

const formatMakettime = (dateString) => {
  console.log()
  return (new Date(dateString)).toString().split(' ', 4).slice(1, 4).join(' ')
}
const timeList = () => {
  let timeArr = []
  let diff = 0
  let end_time = parseInt(new Date().getFullYear())
  let beg_time = parseInt(new Date(BEGIN_TIME).getFullYear())
  let beg_month = new Date(BEGIN_TIME).getMonth() + 1
  let end_month = new Date().getMonth() + 1
  if (end_time > beg_time) {
    diff  = end_time - beg_time + 1
  }
  for (let i = 0; i < diff; i++) {
    for (let j = MONTH.length; j > 0; j--) {
      if (i === 0 && j <= end_month) {
        timeArr.push(MONTH[j-1] + '.' + (end_time - i))
      } else if (i === diff -1 && j >= beg_month) {
        timeArr.push(MONTH[j-1] + '.' + (end_time - i))
      } else if (i > 0 && i < diff -1) {
        timeArr.push(MONTH[j-1] + '.' + (end_time - i))
      }
    }
  }
  return timeArr
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
