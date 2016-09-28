function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getUsers(){
  return [{name:'vingo',id:1,avatar:''},{name:'hello',id:2,avatar:''},{name:'cat',id:3,avatar:''},{name:'andor',id:4,avatar:''},{name:'daniel',id:5,avatar:''}];
}

module.exports = {
  formatTime: formatTime,
  getUsers:getUsers
}
