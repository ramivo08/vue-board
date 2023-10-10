<template>
  <div class="table-wrapper">
    <button class="write-button" @click="goWrite">글쓰기</button>
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
        <!-- <tr> -->
        <transition-group name="list" tag="tr" v-for="(item, index) in boardItem" v-bind:key="item.id">
          <!-- 데이터가 객체이면, 객체 안의 특정 속성을 key값으로 지정해주어야 한다. -->
          <!-- transition-group 컴포넌트 내부의 자식 요소들은 고유한 key 속성을 가져야 한다. -->
          <!-- item.id값에 문자열을 더해서 고유한키를 생성하여 키 속성을 부여함으로써 각 요소를 식별.트랜지션효과처리 -->
          <td v-bind:key="item.id + 'index'">{{ index + 1 }}</td> 
          <td v-bind:key="item.id + 'title'">{{ item.title }}</td>
          <td v-bind:key="item.id + 'writer'">{{ item.writer }}</td>
          <td v-bind:key="item.id + 'timestamp'">{{ item.timestamp }}</td>
          <td v-bind:key="item.id + 'delete'" @click="removeItem(index)">
            <i class="removeBtn fa-solid fa-trash"></i>
          </td>
        </transition-group>
        <!-- </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      boardItem: [] //글 목록을 저장하는 배열
    }
  },
  created: function () {
    console.log('aa', localStorage.getItem('boardPost')); //객체를 가져옴.

    if (localStorage.getItem('boardPost')) {
      //로컬스토리지에서 'boardPost' key에 저장된 데이터를 불러와서 "boardItem"이라는 배열에 저장

      this.boardItem = JSON.parse(localStorage.getItem('boardPost')).map(function (item, index) {
        return { index: index, id: index, title: item.title, writer: item.writer, timestamp: item.timestamp };
      });
    }
  },
  methods: {
    goWrite: function () {
      console.log('글쓰기 버튼 클릭');

      //글쓰기버튼 클릭시 라우팅 시킬 수 있는 함수 생성
      this.$router.push('/boardWrite');
    },
    removeItem: function (index) {
      console.log('삭제버튼 클릭');
     // console.log('item', item);
      console.log('index', index);
      this.boardItem.splice(index,1);
      localStorage.removeItem('boardPost', JSON.stringify(this.boardItem));
    }
  }
}
</script>

<style>
.table-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 90%;
  /* 테이블의 너비를 조절합니다. */
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
  background-color: #fff;
  color: #FFD700;
  border: 2px solid #FFD700;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 13px;
  /* margin-left: 1280px; */
  /* margin-bottom: 50px; */
  position: absolute;
  /* 절대 위치설정 */
  top: 0;
  /* 부모 요소의 상단에 고정 */
  right: 0;
  /* 부모 요소의 오른쪽에 고정 */
}

.write-button:hover {
  background-color: #FFD700;
  color: #fff;
}

.removeBtn {
  margin-left: auto;
  color: #4C4C4C
}</style>