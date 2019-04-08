// eslint-disable-next-line strict
module.exports = (options, app) => {
  return async function auth(ctx, next) {
    // 设置全局变量
    ctx.state.csrf = ctx.csrf;
    await next();
  };
};
