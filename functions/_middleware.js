export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);

  // 如果请求根路径或没有具体文件，返回index.html
  if (url.pathname === '/' || url.pathname.endsWith('/')) {
    return context.next();
  }

  return context.next();
}