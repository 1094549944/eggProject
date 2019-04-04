'use strict';
const Service = require('egg').Service;
class NewsListService extends Service {
  async getNewsList(params) {
    // 获取新闻的数据
    const data = {
      title: '我是从后台渲染够来的新闻列表',
      id: params.id,
      list: [
        { name: '张三', age: 12 },
        { name: '李四', age: 12 },
        { name: '王五', age: 12 },
      ],
    };
    return data;
  }
}
module.exports = NewsListService;
