'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1541504265239_5219';

  // add your config here
  config.middleware = [];

  //配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',//指定模板引擎的后缀名
    },
  }
  return config;
};
