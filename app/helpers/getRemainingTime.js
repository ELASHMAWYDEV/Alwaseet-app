import formatTime from "./formatTime";

//Format the date and get remaining time
const getRemainingTime = (expDate) => {
  let timeleft = expDate - Date.now();
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  let secondsText = `${seconds} ثانية`;
  let minutesText = minutes > 0 ? `${minutes} دقيقة` : "";
  let hoursText = hours > 0 ? `${hours} ساعة` : "";
  let daysText = days > 0 ? `${days} يوم` : "";

  let remainingTime = `${daysText} ${hoursText} ${minutesText} ${secondsText}`;
  if (timeleft < 0) {
    remainingTime = formatTime(expDate);
  }

  return remainingTime;
};



export default getRemainingTime;