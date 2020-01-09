<template class="tem">
  <div id="subiz" class="app"  >
    <Template mode="mobile" :page="page"/>
  </div>
</template>
<script>
import Template from './modal/template4.vue'
export default {
  name: 'app',
  components: {
    Template,
  },
  data(){
    return {
      page1_2:{
        subtitle:"",
        "title": "Cảm ơn bạn!",
        "description": "Chúng tôi đã nhận được yêu cầu liên hệ của bạn và chúng tôi sẽ gọi lại cho bạn vào thời gian đã chọn",
        primary_button:{
          enabled : true,
          text: "ĐĂNG KÝ NGAY"
        },
				secondary_button:{
          enabled : true,
          text: "Cancel"
        },
      },
      page:{
        subtitle:"",
        "title": "Đăng ký để nhận ưu đãi đặc biệt",
	      "description": "Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá.",
				form: {
          enabled:true,
          fields:[
            {
              key :1,
              label : "Họ Tên",
              is_required :true,
              type :"text",
              placeholder: "John Doe"
            },
            {
              key :2,
              label : "Email",
              is_required :true,
              type :"text",
              placeholder: "johndoe@example.com"
            },
            // {
            //   key :3,
            //   label : "Số điện thoại",
            //   is_required :true,
            //   type :"text",
            //   placeholder: "0123 456 789"
            // }
          ],
				},
        primary_button:{
          enabled : true,
          text: "ĐĂNG KÝ NGAY"
        },
				secondary_button:{
          enabled : false,
          text: "Cancel"
        },
      },
      templatehavesubtitle:{
        title:"NHẬN NGAY ƯU ĐÃI AAAAA",
        subtitle:"Đăng ký",
        form_enabled:true,
        images:[],
        form:{
           enabled:true,
          fields:[
          {
            key :2,
            label : "Email",
            is_required :true,
            type :"text",
            placeholder:"Email cua ban",
          },
          {
            key :3,
            label : "So dien thoai ",
            is_required :true,
            type :"text",
            placeholder:"So dien thoai cua ban",
          }
        ],
        },
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
            label : "Email",
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
         secondary_button:{
          text:"Cancle",
          enabled : false,
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