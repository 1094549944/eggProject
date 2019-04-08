// eslint-disable-next-line strict
const Controller = require('egg').Controller;
class formController extends Controller {
  async index() {
    // this.ctx.body = this.ctx.csrf;
    // await this.ctx.render('formTest', {
    //   csrf: this.ctx.csrf,
    // });
    // 如果设置了全局的csrf 那么则需要如下写入即可
    await this.ctx.render('formTest');
  }
  async addPost() {
    console.log(this.ctx);
    this.ctx.body = this.ctx.request.body;
  }
}
module.exports = formController;
