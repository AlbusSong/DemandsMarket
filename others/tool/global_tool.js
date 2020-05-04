var getTodayDate = function() {
  const timestamp = Date.parse(new Date());
  const d = new Date(timestamp);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;  
  const day = d.getDate();
  const result = [year, month, day].map(formatNumber).join('-');
  return result;
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  getTodayDate: getTodayDate
}