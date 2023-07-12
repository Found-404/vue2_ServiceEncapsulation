import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import DataTime from '@/components/DataTime'
import Echarts from '@/components/Echarts'
import TableDemo from '@/components/TableDemo'
import PiniaDemo from '@/components/PiniaDemo'


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'DataTime', component: DataTime },
        { path: '/Echarts', name: 'Echarts', component: Echarts },
        { path: '/TableDemo', name: 'TableDemo', component: TableDemo },
        { path: '/pinia', name: 'Pinia', component: PiniaDemo },
    ]
})