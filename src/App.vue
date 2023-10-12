<template>
  <div>
    <BoardHeader></BoardHeader>
    <router-view></router-view>
    <!-- <BoardList></BoardList> -->
    <!-- <BoardWrite></BoardWrite> -->
    <!-- <BoardDetail></BoardDetail> -->
  </div>
</template>

<script>

import BoardHeader from './components/BoardHeader.vue'
//import BoardList from './components/BoardList.vue'
// import BoardWrite from './components/BoardWrite.vue'
// import BoardDetail from './components/BoardDetail.vue'



export default {
  name: 'App',
  components: {
    //컴포넌트 태그명 : 컴포넌트 내용
    'BoardHeader': BoardHeader,
    //'BoardList' : BoardList,
    // 'BoardWrite' : BoardWrite,
    // 'BoardDetail' : BoardDetail
  }
}
</script>

<style>

</style>