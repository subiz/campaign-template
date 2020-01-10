<template class="tem">
  <div id="subiz" class="app"  >
    <Template mode="mobisle" :page="page"/>
  </div>
</template>
<script>
import Template from './modal/template17.vue'
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
          text: "Đóng"
        },
				secondary_button:{
          enabled : false,
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
        title:"NHẬN NGAY ƯU ĐÃI",
        subtitle:"Đăng ký",
        form_enabled:true,
        images:[],
        form:{
           enabled:true,
          fields:[
              {
            key :1,
            label : "Họ tên",
            is_required :true,
            type :"text",
            placeholder:"Họ tên",
          },
          {
            key :2,
            label : "Email",
            is_required :true,
            type :"text",
            placeholder:"Email của bạn",
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
         secondary_button:{
          text:"Đóng",
          enabled : false,
          action : 10,
          redirect_url : 11,
          open_url : 12
        },
        description:"Giảm 20% chỉ một ngày duy nhất. Miễn phí vận chuyển nội thành.",
        primaryButtonTitle:"Đăng ký nhanh"
      },
      templatefeedback:{
        title:"Oh không! Tại sao bạn lại rời khỏi đây quá sớm như thế?",
        description:"Phản hồi của bạn rất quan trọng với chúng tôi.",

        form:{
          enabled:true,
          fields:[
            {
              key :1,
              label : "Cảm nhận của bạn",
              is_required :true,
              type :"text",
              multiline_text:true,
              placeholder:"Bạn đang nghĩ gì ...",
            },
            {
              key :2,
              label : "Email",
              is_required :true,
              type :"text",
              multiline_text:false,
              placeholder:"johndoe@example.com",
            },
          ],
        },
        primary_button:{
          text:"Gửi cảm nhận",
          enabled : true,
        },
        secondary_button:{
          text:"Cancle",
          enabled : false,

        },
      },
      templatefeedback2:{
        title:"Bạn có tìm được thứ mình cần?",
        description:"Chia sẻ cảm nhận của bạn với chúng tôi và bạn sẽ nhận được 10% GIẢM GIÁ.",
        form:{
          enable :true,
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
        },
        primary_button:{
          text:"Gửi cảm nhận",
          enabled : true,
        },
        secondary_button:{
          text:"Đóng",
          enabled : false,
        },
      },
    }
  }
}
</script>
<style >
#subiz * {
  all:unset;
}
.app{
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #0f1a2d;
}
</style>