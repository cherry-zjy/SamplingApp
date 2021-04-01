import Vue from 'vue'
import Router from 'vue-router'
import SamplingPlanList from '@/components/SamplingPlanList'
import SamplingPlanCard from '@/components/SamplingPlanCard'
import SamplingTesting from '@/components/SamplingTesting'
import Lifecycle from '@/components/Lifecycle'
import SamplingTestItem from '@/components/SamplingTestItem'
import SamplingTestItemCard from '@/components/SamplingTestItemCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SamplingPlanList',
      component: SamplingPlanList,
      name: '我的采样计划'
    },
    {
      path: '/SamplingRecord/:id',
      name: 'SamplingPlanCard',
      component: SamplingPlanCard,
      name: '我的采样任务'
    },
    {
      path: '/SamplingTesting/:id',
      name: 'SamplingTesting',
      component: SamplingTesting,
      name: '我的采样任务'
    },
    {
      path: '/Lifecycle/:id',
      name: 'Lifecycle',
      component: Lifecycle,
      name: '样品生命周期'
    },
    {
      path: '/SamplingTestItem',
      name: 'SamplingTestItem',
      component: SamplingTestItem,
      name: '检测数据录入'
    },
    {
      path: '/SamplingTestItemCard',
      name: 'SamplingTestItemCard',
      component: SamplingTestItemCard,
      name: '检测数据录入'
    },
    
  ]
})
