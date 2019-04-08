/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554277717564_2357';

  // add your middleware config here
  config.middleware = [ 'printdate', 'forbidip', 'auth' ];
  config.printdate = {
    title: '我传过来的参数中间件',
  };

  config.forbidip = {
    title: '我传过来的参数中间件,用来做指定的ip 地址禁止访问',
    ipList: [ '127.0.0.1' ],
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  // 配置公共的api
  config.api = 'http://www.phonegap100.com/';
  return {
    ...config,
    ...userConfig,
  };
};
