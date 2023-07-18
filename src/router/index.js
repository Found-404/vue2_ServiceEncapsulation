import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import DataTime from '@/page/DataTime'
import Echarts from '@/page/Echarts'
import TableDemo from '@/page/TableDemo'
import PiniaDemo from '@/page/PiniaDemo'
import RollingChange from '@/page/RollingChange'
import SelectDemo from '@/page/SelectDemo'


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'DataTime', component: DataTime },
        { path: '/Echarts', name: 'Echarts', component: Echarts },
        { path: '/TableDemo', name: 'TableDemo', component: TableDemo },
        { path: '/pinia', name: 'Pinia', component: PiniaDemo },
        { path: '/select', name: 'select', component: SelectDemo },
        { path: '/rollingchange', name: 'RollingChange', component: RollingChange },
    ]
})