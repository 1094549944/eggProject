'use strict';
const Service = require('egg').Service;

class NewsPService extends Service {
  async getData(page) {
    // 通过接口返回数据
    // 获取新闻列表 方法
    const url =
      this.config.api + 'appapi.php?a=getPortalList&catid=20&page=' + page;
    const response = await this.ctx.curl(url);
    const data = JSON.parse(response.data);
    return data;
  }
  async getDetail(aid) {
    const url = this.config.api + 'appapi.php?a=getPortalArticle&aid=' + aid;
    const response = await this.ctx.curl(url);
    const data = JSON.parse(response.data);
    return data;
  }
}
module.exports = NewsPService;
