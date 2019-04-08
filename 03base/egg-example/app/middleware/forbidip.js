// eslint-disable-next-line strict
module.exports = (options, app) => {
  // 返回异步方法 禁止ip 地址访问
  return async function forbidIp(ctx, next) {
    /** 要屏蔽ip 的方法：
     * 1.从数据库获取
     * 2.从参数传入
     */
    // 从数据库中获取
    // const getIp = [ '127.0.0.1' ]; // 要屏蔽的ip
    // 传入
    const getIp = options.ipList;
    // 获取客户端的ip
    // console.log(ctx.request.ip);

    for (const value in getIp) {
      if (ctx.request.ip == getIp[value]) {
        // 屏蔽ip操作
        ctx.state = 403;
        ctx.body = '您的ip 已经被屏蔽';
      } else {
        // console.log(options.title);
        await next();
      }
    }
  };
};
