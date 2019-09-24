import Home from '@/main/home'
import News from '@/main/news'
import Base from '@/main/base'
import HugePage from '@/main/page/hugePage'

const Router = {
  path: '/',
  meta: {
    index: 0
  },
  component: Base,
  children: [
    {
      path:'',
      name:'news',
      meta:{
        index:1
      },
      component: Home,
    },
    {
      path:'news',
      name:'news',
      meta:{
        index: 2
      },
      component: News
    },
    {
      path:'hugepage',
      name:'hugepage',
      meta:{
        index: 2
      },
      component: HugePage
    }
  ]
}

export default Router
