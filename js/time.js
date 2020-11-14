let time = null;
time = setTimeout(timeFuc,1000); // 1s 触发一次

function timeFuc() {
  clearTimeout(time); // 清除上一个定时器
  newTime = new Date();
  let year = newTime.getFullYear();
  let month = formatTime(newTime.getMonth() + 1);
  let day = formatTime(newTime.getDate());
  let hour = formatTime(newTime.getHours());
  let minutes = formatTime(newTime.getMinutes());
  let seconed = formatTime(newTime.getSeconds());

  document.querySelector('.newDay').innerHTML = year + '年' + month + '月' + day + '日'
  document.querySelector('.newTime').innerHTML = hour + ':' + minutes + ':' + seconed
  t = setTimeout(timeFuc,1000); // 开启定时器
}

function formatTime(dateTime) {
  return dateTime < 10 ? '0' + dateTime : dateTime
}