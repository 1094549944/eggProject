// eslint-disable-next-line strict
const Controller = require('egg').Controller;
class NewsController extends Controller {
  async index() {
    this.ctx.body = '新闻页面';
  }
  async content() {
    // 获取get 参数
    const query = this.ctx.query;
    this.ctx.body = query;
  }
  async list() {
    // 动态路由
    const params = this.ctx.params;
    this.ctx.body = params;
  }
  async viewList() {
    const params = this.ctx.params;
    // 从控制器里面获取到数据
    const data = await this.service.newsList.getNewsList(params);
    //   this.ctx.body = params;
    await this.ctx.render('newsList', data);
  }
}
module.exports = NewsController;
