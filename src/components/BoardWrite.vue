<template>
  <div class="board-container">
    <h1 style="margin-bottom: 45px;">게시판 작성하기</h1>
    <div class="input-group">
      <label>제목</label>
      <input type="text" v-model="title" placeholder="제목을 입력하세요">
    </div>
    <div class="input-group">
      <label>내용</label>
      <textarea v-model="content" placeholder="내용을 입력하세요"></textarea>
    </div>
    <div class="input-group">
      <label>작성자</label>
      <input type="text" v-model="writer" placeholder="작성자를 입력하세요">
    </div>
    <div class="button-group">
      <button @click="submitPost">등록</button>
      <button @click="goList">목록</button>
    </div>
    <AlertModal v-if="showModal" @close="showModal = false">
      <h2 slot="header"><i class="fa-solid fa-triangle-exclamation fa-xl"></i> warning</h2>
      <h3 slot="body">제목, 내용, 작성자 모두 입력해야 합니다.</h3> 
    </AlertModal>
  </div>
</template>

<script>

import AlertModal from './common/AlertModal.vue'

export default {

  data: function() {
    return {
      //사용자가 입력한 제목,내용,작성자 저장하는 데이터 속성?
      title : '',
      content : '',
      writer : '',
      timestamp: '', //글이 작성된 날짜 저장하는 데이터
      boardPost: [], //작성된 게시판 글들을 저장하는 배열
      showModal: false
    }
  },
  created: function() {
    //create LifeCycle Hook으로 localStorage에서 boardPost에 저장된 데이터를 불러오고, 배열에  할당함
    if(localStorage.getItem('boardPost')){
      this.boardPost = JSON.parse(localStorage.getItem('boardPost'))
    }
  },
  methods: {
    submitPost: function() {
      // 게시판 글 등록
      console.log("등록 클릭");

      //입력하는 내용중에 하나라도 없으면 모달창 열림
      if (!this.title || !this.content || !this.writer) {
        this.showModal = true;
        return;
      }


      //글 등록시 현재날짜와 시간 같이 등록되게 하기
      var toDay = new Date();
      var year = toDay.getFullYear();
      var month = ('0' + (toDay.getMonth() + 1)).slice(-2); //getMonth()함수는 0~11 반환하므로 +1해준다. 마지막 두개요소 추출
     //console.log(('0' + (toDay.getMonth() + 1)));
      var day = ('0' + toDay.getDate()).slice(-2);
      
      var currentDay = year + '-' + month + '-' + day;

      //새 게시글 정보 객체로 만들기
      const newPost = {
        title: this.title,
        content: this.content,
        writer: this.writer,
        timestamp: currentDay
      }
      console.log('newPost', newPost);

      
        //localStorage에 게시글 저장하기
      this.boardPost.push(newPost);
      localStorage.setItem('boardPost', JSON.stringify(this.boardPost));

      this.title = '';
      this.content = '';
      this.writer = '';

      this.$router.push('/');
     

  
    },
    goList: function() {
      console.log('목록버튼 클릭');
      this.$router.push('/');
    }
  },
  components: {
    AlertModal: AlertModal
  }
}
</script>

<style scoped>
.board-container {
  max-width: 50%;
  height: 580px;
  margin: 0 auto;
  margin-top:100px;
  padding: 20px;
  border: 3px solid #FFD700;
  border-radius: 10px;
}

.input-group {
  margin-bottom: 40px;
}

input{
  width: 95%;
  padding: 12px;
  margin-top: 10px;
  border: 2px solid #FFD700;
  border-radius: 5px;
}
textarea {
  width: 95%;
  padding: 15px;
  margin-top: 10px;
  border: 2px solid #FFD700;
  border-radius: 5px;
  resize: none;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

.button-group {
  text-align: center;
}

button {
  background-color: #fff;
  color: #161615;
  border: 1px solid #FFD700;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 10px;
  margin-top:30px;
}

button:hover {
  background-color: #FFD700; 
  color: #fff;
}

</style>