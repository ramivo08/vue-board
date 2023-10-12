import Vue from 'vue'
import Router from 'vue-router'

//vue CLI프로젝트에서 @는 src디렉토리를 가리킨다.
import BoardList from '@/components/BoardList.vue'
import BoardWrite from '@/components/BoardWrite.vue'
import BoardDetail from '@/components/BoardDetail.vue'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes : [
    {
        path: '/',
        name: 'BoardList',
        component: BoardList
    },
    {
        path: '/boardWrite',
        name: 'BoardWrite',
        component: BoardWrite
    },
    {
        path: '/boardDetail/:id', /**url로 파라미터값 */
        name: 'BoardDetail',
        component: BoardDetail
    }
]
});