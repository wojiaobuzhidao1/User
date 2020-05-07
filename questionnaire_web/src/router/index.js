import Index from '../views/Index';
import SetQuestion from '../views/SetQuestion';
import QuestionList from '../views/QuestionList';
import LoginTest from '../views/loginTest';
import Statistics from '../views/Statistics';
import Questionnaire from '../views/Questionnaire';
import Success from '../views/Success';
import Error from '../views/Error';
import Close from '../views/Close';
import Vue from 'vue'
import Router from 'vue-router'
import UserHome from '@/components/UserHome'

export default [
    {
        path: '/',
        component: Index
    },
    {
        path: '/',
        component: QuestionList
    },
    {
      path: '/loginTest',
      component: LoginTest
    },
    {
        path: '/setQuestion',
        component: SetQuestion
    },
    {
        path: '/statistics',
        component: Statistics
    },
    {
        path: '/questionnaire/:id',
        component: Questionnaire
    },
    {
        path: '/success',
        component: Success
    },
    {
        path: '/error',
        component: Error
    },
    {
        path: '/close',
        component: Close
    },
    {
        path: '/write/:id?',
        component: r => require.ensure([], () => r(require('@/components/blog/BlogWrite')), 'blogwrite'),
        meta: {
          requireLogin: true
        },
    },
    {
        path: '/home',
        component: UserHome,
        children: [
          {
            path: '/',
            component: r => require.ensure([], () => r(require('@/components/Index')), 'index')
                  },
                  {
            path: '/history',
            component: r => require.ensure([], () => r(require('@/components/History')), 'history'),
            meta: {
              requireLogin: true
            }
          },
          {
            path: '/myBlog',
            component: r => require.ensure([], () => r(require('@/components/MyBlog')), 'myBlog'),
            meta: {
              requireLogin: true
            }
          },
          {
            path: '/showBlog/:account',
            component: r => require.ensure([], () => r(require('@/components/ShowBlog')), 'showBlog'),
            meta: {
              requireLogin: true
            }
          },
          {
            path: '/searchUserByNickname/:nickName',
            component: r => require.ensure([], () => r(require('@/components/SearchUserResult')), 'searchResult'),
            meta: {
              title: '搜索页面'
            }
          },
          {
            path: '/archives/:year?/:month?',
            component: r => require.ensure([], () => r(require('@/components/blog/BlogArchive')), 'archives')
          },
          {
            path: '/view/:id',
            component: r => require.ensure([], () => r(require('@/components/blog/BlogView')), 'blogview')
          },
  
          // :type can only be `tag`, not supporting other types currently
          {
            path: '/:type/all',
            component: r => require.ensure([], () => r(require('@/components/blog/BlogAllCategoryTag')), 'blogallcategorytag')
          },
          // :type can only be `tag`, not supporting other types currently
          {
            path: '/:type/:id',
            component: r => require.ensure([], () => r(require('@/components/blog/BlogCategoryTag')), 'blogcategorytag')
          },
        ]
      },
      {
        path: '/userInfo',
        component: r => require.ensure([], () => r(require('@/components/UserInfo')), 'userInfo'),
        meta: {
          requireLogin: true
        }
      },
      {
        path: '*',
        component: r => require.ensure([], () => r(require('@/components/Page404')), 'page404')
      },
];
