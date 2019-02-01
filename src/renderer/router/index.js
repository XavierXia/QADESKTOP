import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'homePage',
    component: require('@/components/HomePage').default
  },
  {
    path: '/sign',
    name: 'signPage',
    component: require('@/components/Sign').default
  },
  {
    path: '/personal',
    name: 'personal',
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component: require('@/components/personal').default,
    children: [
      {
        'path': '/personal/index',
        component: require('@/components/personal/index').default,
        children: [{
          'path': '/personal/index/chart',
          component: require('@/components/personal/index/chart_view').default,
          children: [{
            'path': '/personal/index/chart/default',
            component: require('@/components/personal/index/chart_view/chart').default
          }]
        }]
      },
      {
        'path': '/personal/setting',
        component: require('@/components/personal/setting').default
      },
      {
        'path': '/personal/user',
        component: require('@/components/personal/user').default,
        children: [{
          'path': '/personal/user/bind',
          component: require('@/components/personal/user/bind_account').default
        },
        {
          'path': '/personal/user/reset_password',
          component: require('@/components/personal/user/reset_password').default
        }]
      },
      {
        'path': '/personal/quotation',
        component: require('@/components/personal/quotation').default,
        children: [{
          'path': '/personal/quotation/kline',
          component: require('@/components/personal/quotation/kline').default
        }]
      },
      {
        'path': '/personal/trade',
        component: require('@/components/personal/trade').default
        // children: [{
        //   'path': '/personal/trade/bs',
        //   component: require('@/components/personal/quotation/kline').default
        // }]
      },
      {
        'path': '/personal/runbacktest',
        component: require('@/components/personal/runbacktest').default
        // children: [{
        //   'path': '/personal/trade/bs',
        //   component: require('@/components/personal/quotation/kline').default
        // }]
      },
      {
        'path': '/personal/block',
        component: require('@/components/personal/block').default,
        children: [{
          'path': '/personal/block/settings',
          component: require('@/components/personal/block/settings').default
        },
        {
          'path': '/personal/block/sasas',
          component: require('@/components/personal/block/sasas').default
        },
        {
          'path': '/personal/block/messages',
          component: require('@/components/personal/block/messages').default
        }]
      },
      {
        'path': '/personal/portfolio/:id',
        name: 'portfolio',
        component: require('@/components/personal/portfolio').default
      }
    ]
  }
  ]
})
