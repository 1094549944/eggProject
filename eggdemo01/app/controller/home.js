/*
 * @Author: jiaxinying 
 * @Date: 2018-11-07 11:59:36 
 * @Last Modified by:   jiaxinying 
 * @Last Modified time: 2018-11-07 11:59:36 
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index () {
    this.ctx.body = '更改第一个egg';
  }
}

module.exports = HomeController;
