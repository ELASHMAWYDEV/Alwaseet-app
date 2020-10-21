const formatTime = (time) => {
  let date = new Date(time);
  let minute = date.getMinutes();
  let hour = date.getHours();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let dayTime = hour <= 11 ? "am" : "pm";
  hour = hour % 12;

  if (minute == NaN || hour == NaN || day == NaN || month == NaN || year == NaN) return "";
  return `${hour}:${minute} ${dayTime}  ${day}/${month}/${year}`;

}


export default formatTime;