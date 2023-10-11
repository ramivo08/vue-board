<template>
  <div class="menu-bar">
      <div class="menu">
         <img src='../assets/online-counseling.png'> <span>Anonymity Board</span>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.menu-bar {
  background-color: #ffffff; /* 바탕색을 흰색으로 설정 */
  border-bottom: 3px solid #ffcc00; /* 아래 경계를 노란색으로 설정 */
  padding: 20px 0; /* 위아래 여백 설정 */
}

.menu {
  text-align: left; /* 텍스트를 중앙 정렬 */
  font-size: 30px; /* 폰트 크기 설정 */
  color: #333; /* 텍스트 색상 설정 */
}
.menu img {
  margin-left: 100px;
  height: 60px;
  vertical-align: middle; /* 이미지와 텍스트를 수직으로 정렬 */
}

.menu span {
  margin-left: 10px; /* 이미지와 텍스트 사이의 여백 조정 */
  font-family: 'Your-Preferred-Font', sans-serif; /* 무료 폰트로 변경 (원하는 폰트 이름으로 바꾸세요) */
  font-size: 30px;
  color: #333;
}
</style>