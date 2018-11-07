'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index () {
    this.ctx.body = '更改第一个egg';
  }
}

module.exports = HomeController;
