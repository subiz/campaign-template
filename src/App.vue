<template class="tem">
  <div id="app" class="app"  >

    <Template :page="templatefeedback"/>
  </div>
</template>
<script>
import Template from './modal/template9.vue'
export default {
  name: 'app',
  components: {
    Template,
  },
  data(){
    return {
      template:{
        title:"Đăng ký để nhận ưu đãi đặc biệt.",
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
            label : "So dien thoai cua ban",
            is_required :true,
            type :"email",
          }
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
      },
      templatehavesubtitle:{
        title:"NHẬN NGAY ƯU ĐÃI",
        subtitle:"Đăng ký",
        form_enabled:true,
        images:[],
        fields:[
          {
            key :2,
            label : "Email cua ban",
            is_required :true,
            type :"email",
          },
          {
            key :3,
            label : "So dien thoai cua ban",
            is_required :true,
            type :"email",
          }
        ],
        primary_button:{
          text:"Đăng ký ngay",
          enabled : true,
          action : 10,
          redirect_url : 11,
          open_url : 12
        },
        description:"Giảm 20% chỉ một ngày duy nhất. Miễn phí vận chuyển nội thành.",
        primaryButtonTitle:"Đăng ký nhanh"
      },
      templatefeedback:{
        title:"Oh không! Tại sao bạn lại rời khỏi đây quá sớm như thế?",
        subtitle:"",
        form_enabled:true,
        images:[],
        fields:[
          {
            key :1,
            label : "Cảm nhận của bạn",
            is_required :true,
            type :"text",
            multiline_text:true,
            placeholder:"Cảm nhận của bạn",
          },
          {
            key :2,
            label : "Email cua ban",
            is_required :true,
            type :"email",
            multiline_text:false,
            placeholder:"Email của bạn",
          },
        ],
        primary_button:{
          text:"Gửi cảm nhận",
          enabled : true,
          action : 10,
          redirect_url : 11,
          open_url : 12
        },
        description:"Phản hổi của bạn rất quan trọng với chúng tôi.",
        primaryButtonTitle:"Đăng ký nhanh"
      },
       templatefeedback2:{
        title:"Bạn có tìm được thứ mình cần?",
        subtitle:"",
        form_enabled:true,
        images:[],
        form:{

        },
        fields:[
          {
            key :1,
            label : "Cảm nhận của bạn",
            is_required :true,
            type :"text",
            multiline_text:true,
            placeholder:"Cảm nhận của bạn",
          },
          {
            key :2,
            label : "Email cua ban",
            is_required :true,
            type :"email",
            multiline_text:false,
            placeholder:"Email của bạn",
          },
        ],
        primary_button:{
          text:"Gửi cảm nhận",
          enabled : true,
          action : 10,
          redirect_url : 11,
          open_url : 12
        },
        description:"Chia sẻ cảm nhận của bạn với chúng tôi và bạn sẽ nhận được 10% GIẢM GIÁ.",
        primaryButtonTitle:"Đăng ký nhanh"
      },
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