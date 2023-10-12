<template>
  <div class="board-container">
    <h1 style="margin-bottom: 45px;">게시판 상세보기</h1>
    <div class="input-group">
        <label>번호</label>
        <!-- v-model 디렉티브로 입력요소의 값과 데이터 동기화 -->
        <input type="text" v-model="index" readonly>
      </div>
    <div class="input-group">
      <label>제목</label>
      <input type="text" v-model="title" readonly>
    </div>
    <div class="input-group">
      <label>내용</label>
      <textarea v-model="content" readonly></textarea>
    </div>
    <div class="input-group">
      <label>작성자</label>
      <input type="text" v-model="writer" readonly>
    </div>
    <div class="input-group">
        <label>작성일자</label>
        <input type="text" v-model="timestamp" readonly>
      </div>
    <div class="button-group">
      <button @click="goList">목록</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 변수정의 v- model 디렉티브와 연결되어 화면에 값표시
      index: '',
      title: '',
      content: '',
      writer: '',
      timestamp: ''
    };
  },
  created: function() {
    //라우터로 전달된 정보 받아오기
    //$route.params은 파라미터에 접근하여 파라미터를 받아 데이터에 할당
    this.index = this.$route.params.index;
    this.id = this.$route.params.id;
    this.title = this.$route.params.title;
    this.content = this.$route.params.content;
    this.writer = this.$route.params.writer;
    this.timestamp = this.$route.params.timestamp;
  },
  methods: {
    goList() {
      this.$router.push('/');
    }
  }

}
</script>

<style scoped>
.board-container {
  max-width: 50%;
  height: 700px;
  margin: 0 auto;
  margin-top: 90px;
  padding: 20px;
  border: 3px solid #FFD700;
  border-radius: 10px;
}

.input-group {
  margin-bottom: 20px;
}

input {
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
  margin-top: 30px;
}

button:hover {
  background-color: #FFD700;
  color: #fff;
}
</style>