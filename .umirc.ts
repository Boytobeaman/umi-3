import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  "sass": {},
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  routes: [
    { 
      path: '/', 
      component: '@/pages/index',
      menu: {
        name: 'Home', // 兼容此写法
      }, 
    },
    { 
      path: '/a', 
      component: '@/pages/a/index',
      menu: {
        name: 'a', // 兼容此写法
      }, 
    },
    { 
      path: '/b', 
      component: '@/pages/b/index',
      menu: {
        name: 'b', // 兼容此写法
      }, 
    },
    { 
      path: '/c', 
      component: '@/pages/c/index',
      menu: {
        name: 'c', // 兼容此写法
      }, 
    },
  ],
  fastRefresh: {},
});
