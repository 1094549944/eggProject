/**
 * egg 路由传值 get post
 *
 */
'use strict';
const Controller = require('egg').Controller;
class NewsController extends Controller {
  async index() {
    this.ctx.body = '新闻页面';
  }
  async content() {
    /**
     * koa 中获取get 传值：ctx.query
     * http://127.0.0.1:7001/content/?aid=12
     */
    this.ctx.body = '新闻主题' + this.ctx.query.aid;
  }
  async newList() {
    /**
     * koa 获取动态路由传值
     * ctx.params
     *
     * http://127.0.0.1:7001/newList/12
     */
    // this.ctx.body = '新闻列表' + this.ctx.params.id;
    await this.ctx.render('newList', {
      msg: '我是传过来的msg',
      id: this.ctx.params.id,
      list: [
        {
          name: '苹果',
          id: '001',
        },
        {
          name: '桃子',
          id: '002',
        },
        {
          name: '🍌',
          id: '003',
        },
      ],
    });
  }
}
module.exports = NewsController;
