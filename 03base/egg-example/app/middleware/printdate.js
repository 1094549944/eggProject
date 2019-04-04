// eslint-disable-next-line strict
// eslint-disable-next-line jsdoc/require-param
/**
 * options :中间件的配置项，框架会将app.config[${middlewareName}] 传递进来
 * app:当前应用Application的实例
 */
'use strict';
module.exports = (options, app) => {
  // 返回一个异步的方法
  return async function printDate(ctx, next) {
    console.log(new Date());
    console.log(options.title);
    await next();
  };
};
