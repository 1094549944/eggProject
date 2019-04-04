'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);
  router.get('/news', controller.news.index);
  router.get('/content', controller.news.content);
  router.get('/list/:id', controller.news.list);
  router.get('/viewList/:id', controller.news.viewList);
  router.get('/indexNewsP/:page', controller.newsP.indexNewsP);
  router.get('/newsContent', controller.newsP.newsContent);
};
