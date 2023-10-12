<template>
  <div class="menu-bar">
      <div class="menu" @click="goList">
         <img src='../assets/online-counseling.png'><span>Anonymity Board</span>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
     goList() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.menu-bar {
  background-color: #ffffff;
  border-bottom: 3px solid #ffcc00;
  padding: 20px 0;
}

.menu {
  text-align: left;
  font-size: 30px;
  color: #333;
}
.menu img {
  margin-left: 100px;
  height: 60px;
  vertical-align: middle;
}

.menu span {
  margin-left: 20px; /* 이미지와 텍스트 사이의 여백 조정 */
  font-family: 'Your-Preferred-Font', sans-serif; /* 폰트로 변경 */
  font-size: 30px;
  font-weight: bold;
  color: #333;
}
</style>