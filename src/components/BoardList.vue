<template>
  <div class="table-wrapper">
    <button class="write-button" @click="goWrite">글쓰기</button>
    <!-- <router-link to="/boardWrite" class="write-button">글쓰기</router-link> -->
    <table class="styled-table">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일</th>
          <th></th>
        </tr>
      </thead>
      <tbody name="boardList">
        <tr>
          <td>1</td>
          <td>타이틀</td>
          <td>익명</td>
          <td>2023.10.01</td>
          <td>삭제</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'BoardList',
  // data() {
  //   return{
  //     data: data
  //   }
  // },
  methods: {
    goWrite() {
      console.log('글쓰기 버튼 클릭');

      //글쓰기버튼 클릭시 라우팅 시킬 수 있는 함수 생성
      this.$router.push('/boardWrite');
    }
  }
}
</script>

<style>
.table-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 90%; /* 테이블의 너비를 조절합니다. */
  margin: 25px auto;
  position: relative;
}
.styled-table {
  width: 90%;
  margin: 50px auto;
  border-collapse: collapse;
  font-size: 18px;
  text-align: center;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table th {
  background-color: #FFD700;
  font-weight: bold;
  color: #000;
}

.styled-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.styled-table tr:hover {
  background-color: #f5f5f5;
}

/* CSS styles for the "글쓰기" button */
.write-button {
  background-color: #fff; /* White background */
  color: #FFD700; /* Yellow border color */
  border: 1px solid #FFD700; /* 1px yellow border */
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 13px;
  /* margin-left: 1280px; */
 /* margin-bottom: 30px; */
 /* position: absolute 100; */
 /* float: right; */
  position: absolute; /* 절대 위치설정 */
  top: 0; /* 부모 요소의 상단에 고정 */
  right: 0; /* 부모 요소의 오른쪽에 고정 */
}
.write-button:hover {
  background-color: #FFD700; 
  color: #fff;
}
</style>