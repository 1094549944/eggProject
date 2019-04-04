'use strict';
const Controller = require('egg').Controller;

class NewsPController extends Controller {
  async indexNewsP() {
    //  this.ctx.body = '爬虫新闻列表';
    // console.log(this.app.foo());
    // console.log(this.ctx.getApit());
    // 获取数据，显示到新闻页面
    const page = this.ctx.params.page;
    const data = await this.service.newsP.getData(page);
    data.api = this.config.api;
    data.title = '我是爬虫新闻列表';
    // this.ctx.body = data;
    await this.ctx.render('newsP', data);
  }
  async newsContent() {
    const aid = this.ctx.query.aid;
    const data = await this.service.newsP.getDetail(aid);
    data.title = '我是爬虫回来的详情';
    // this.ctx.body = data;
    await this.ctx.render('newsContent', data);
  }
}
module.exports = NewsPController;
