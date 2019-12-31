

<template class="tem">
  <div id="app" class="app"  >
    <Template2 :page=this.countdownt1 />
  </div>
</template>
<script>
import Template2 from './modal/template_countdown1.vue'
export default {
  name: 'app',
  components: {
    Template2
  },
  data(){
    return{
      template2:{
        title:"Đăng ký để nhận ưu đãi đặc biệt",
        // subtitle:"ĐĂNG KÝ",
        description:"Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá.",
        primaryButtonTitle:"Đăng ký nhanh",
      }
      template5:{
        title:"NHẬN NGAY ƯU ĐÃI",
        subtitle:"ĐĂNG KÝ",
        description:"Giảm giá tới 95%. Miễn phí vận chuyển nội thành",
        buttonTitle:"ĐĂNG KÝ NGAY",
      },
      template6:{
        title:"Và miễn phí vận chuyển trong nội thành ",
        subtitle:"Giảm 30%",
        description:"Chỉ một ngày duy nhất. Đăng ký ngay để nhận mã giảm giá",
        primaryButtonTitle:"ĐĂNG KÝ NGAY",
      },
      countdownt1:{
        title:"để nhận ưu đãi đặc biệt.",
        subtitle:"Đăng ký",
        description:"Giảm 20% chỉ một ngày duy nhất. Miễn phí vận chuyển.",
        primaryButtonTitle:"ĐĂNG KÝ NGAY",
      }

    }
  }
}
</script>
<style >
* {
  margin: 0;
  padding:0;
}
.app{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;  
  background-color: bisque;
}
</style>