<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <!-- 모달 헤더 -->
                    <div class="modal-header">
                        <slot name="header">
                            default header
                        </slot>
                    </div>

                    <!-- 모달 바디 -->
                    <div class="modal-body">
                        <slot name="body">
                            default body
                        </slot>
                    </div>

                    <!-- 모달 푸터 -->
                    <!-- 헤더옆에 닫기 버튼 만드므로 주석처리 -->
                    <div class="modal-footer">
                    <slot name="footer">
                      <button class="closeModalBtn" @click="$emit('close')">
                        확인
                      </button>
                    </slot>
                  </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {

}
</script>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 400px;
    height: 150px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h2 {
    margin-top: 0;
    color: #FF8224;
}

.modal-body {
    margin: 20px 0;
    font-size: 14px;
    margin-bottom: 30px;
}

.modal-default-button {
    float: right;
}



.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

.closeModalBtn {
  background-color: #fff;
  color: #161615;
  border: 1px solid #FF8224;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 10px auto;
  margin-top:10px;
  display: block;
  /* 가운데정렬 블록설정 */
}
.closeModalBtn:hover {
  background-color: #FF8224;
  color: #fff;
}
</style>