// 引入第三方模块
/**
 * silly-datetime
 */
// eslint-disable-next-line strict
const sd = require('silly-datetime');
module.exports = {
  formatTime(params) {
    // 格式化日期
    const getDate = new Date(params * 1000);
    return sd.format(getDate, 'YYYY-MM-DD HH:mm');
  },
};
