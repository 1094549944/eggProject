
'use strict'

const Controller = require('egg').Controller

class NewsController extends Controller {
  async index () {
    this.ctx.body = '这个是第一个'
  }
  async detail () {

    //koa 获取get 传值


    /**
     * 在koa2中，get传值是通过request来接收的。接收途径有2种，一种是通过ctx.request 中接收，一种通过ctx直接来接收。
      通过ctx.request接收，会有2种数据格式，一种是query,一种是querystring
      通过ctx接收，也会有2种格式，一种是query,一种是querystring
     */

    //egg get 传值 
    var query = this.ctx.query

    console.log(query)

    this.ctx.body = '这个是第一个详情页面' + query
  }
  async newsList () {
    //koa 获取动态路由传值 ctx.params



    //egg 获取动态路由传值 this.ctx.params
    let params = this.ctx.params


    //使用模板引擎   解决异步问题

    var msg = "后台渲染"
    var list = [{
      name: '张三',
      age: 12
    }, {
      name: '李四',
      age: 34
    }]
    await this.ctx.render('news', {
      msg, list
    })
    console.log(params)

  }
}
module.exports = NewsController;       
