<template class="tem">
  <div id="app" class="app"  >
    <Template2 :page="template"/>
  </div>
</template>
<script>
import Template2 from './modal/template2.vue'
export default {
  name: 'app',
  components: {
    Template2,
  },
  data(){
    return {
      template:{
        title:"Đăng ký để nhận ưu đãi đặc biệt",
        subtitle:"",
        form_enabled:true,
        images:[],
        fields:[
          {
            key :1,
            label : "Ho Ten",
            is_required :true,
            type :"text",
          },
            {
            key :2,
            label : "Email cua ban",
            is_required :true,
            type :"email",
          },
            {
            key :3,
            label : "Email cua ban2",
            is_required :true,
            type :"email",
          },
        ],
        primary_button:{
          text:"Đăng ký ngay",
          enabled : true,
          action : 10,
          redirect_url : 11,
          open_url : 12
        },
        description:"Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá.",
        primaryButtonTitle:"Đăng ký nhanh"
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
  /* background-color: bisque; */
}
</style>