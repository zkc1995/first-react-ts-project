// 使用模块转发
export { default as routes } from './routes';
export { default as renderRoute } from './renderRoutes';
export { default as privatedRoute } from './privatedRoute';

export type { RouteOption } from './routes';

/**
 * 常规是先引入在进行暴露，但这里不使用，只是作为中介，不使用到对应模块则不进行这种操作
 */