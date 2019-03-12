'use strict';
const Controller = require('egg').Controller;
class AdminController extends Controller {
  async index() {
    console.log(this);
    // egg 基于koa
    /**
     * koa 给用户对应的信息
     * ctx.body='用户管理
     */

    // egg 给用户相应的信息
    this.ctx.body = '用户信息';
  }
}
module.exports = AdminController;
