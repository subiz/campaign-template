let meta = {
  templateThanks: {
    css: () => import('!css-loader!less-loader!./templateThanks.less'),
    type: '2',
    text: {
      name: {
        vi: 'Form cảm ơn ',
        en: 'Form thank you'
      },
      title: {
        vi: 'Cảm ơn bạn!',
        en: 'Thank you!'
      },
      description: {
        vi: 'Chúng tôi đã nhận được yêu cầu liên hệ của bạn và chúng tôi sẽ gọi lại cho bạn vào thời gian bạn đã chọn.',
        en: 'Thanks for contacting us! We’ll get back to you as soon as possible'
      },
      primary_button: {
        vi: 'Hoàn tất',
        en: 'Done'
      },
      secondary_button: {
        vi: 'Đóng',
        en: 'Close'
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: '#0265ff',
      primary_button_color: 'white',
      secondary_button_background: '#e5e5e5',
      secondary_button_color: '#777',
      input_color: 'black',
      input_background: 'transparent',
      title_font_family: 'Montserrat',
      title_font_weight: '700',
      title_font_size: '36px',
      description_font_family: 'Muli',
      description_font_size: '16px'
    }
  },
  template1: {
    css: () => import('!css-loader!less-loader!./template1.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 1: Hỏi thông tin',
        en: 'Template 1: Ask information'
      },
      title: {
        vi: 'Giảm 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'với đơn hàng đầu tiên của bạn',
        en: 'your first order'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: '#424E58',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#777',
      input_color: 'black',
      input_background: 'transparent',
      title_text_transform: 'uppercase',
      title_font_family: 'Yeseva One',
      title_font_size: '48px',
      title_font_weight: 'normal',
      title_font_style: 'normal',
      description_font_weight: 'normal',
      description_font_size: '24px',
      description_font_family: 'Roboto'
    },
    mobile_appearance: {
      title_font_size: '36px',
      description_front_size: '16px'
    }
  },
  template2: {
    css: () => import('!css-loader!less-loader!./template2.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 2: Hỏi thông tin',
        en: 'Template 2: Ask information'
      },
      title: {
        vi: 'Đăng ký để nhận ưu đãi đặc biệt',
        en: 'Sign up to get special offer'
      },
      description: {
        vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
        en: 'Get 20% off your first order. Sign up now!'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: '#FDAD15',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '',
      input_background: '',
      title_font_size: '35px',
      title_font_weight: '700',
      title_font_family: 'Montserrat',
      description_font_size: '18px',
      description_font_family: 'Muli',
      input_border_color: '#d9d9d9'
    },
    mobile_appearance: {
      title_font_size: '28px'
    }
  },
  template3: {
    css: () => import('!css-loader!less-loader!./template3.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 3: Hỏi thông tin',
        en: 'Template 3: Ask information'
      },
      title: {
        vi: 'Đăng ký để nhận ưu đãi đặc biệt',
        en: 'Sign up to get special offer'
      },
      description: {
        vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
        en: 'Get 20% off your first order. Sign up now!'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: '#d12',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '',
      input_background: '',
      title_font_size: '16px',
      title_font_family: 'Muli',
      title_font_size: '28px',
      title_font_family: 'Montserrat',
      title_font_weight: '700',
      input_border_color: '#d9d9d9'
    },
    mobile_appearance: {
      title_font_size: '16px',
      description_font_size: '28px'
    }
  },
  template4: {
    css: () => import('!css-loader!less-loader!./template4.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 4: Hỏi thông tin',
        en: 'Template 4: Ask information'
      },
      title: {
        vi: 'Đăng ký để nhận ưu đãi đặc biệt',
        en: 'Sign up to get special offer'
      },
      description: {
        vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
        en: 'Get 20% off your first order. Sign up now!'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: '#001984',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '',
      input_background: '',
      title_font_size: '25px',
      title_font_family: 'Yeseva One',
      description_font_size: '15px',
      description_font_family: 'Muli',
      input_border_color: '#d9d9d9'
    }
  },
  template5: {
    css: () => import('!css-loader!less-loader!./template5.less'),
    type: 'fullscreen',
    text: {
      name: {
        vi: 'Form đăng ký nhận ưu đãi',
        en: 'Sign up offer'
      },
      title: {
        vi: 'Đăng ký để nhận ưu đãi đặc biệt',
        en: 'Sign up to get special offer'
      },
      description: {
        vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
        en: 'Get 20% off your first order. Sign up now!'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: 'white',
      description_color: 'white',
      background: 'white',
      primary_button_background: '#FDAD15',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '#000',
      input_background: '#fff',
      title_font_size: '55px',
      title_font_family: 'Muli',
      description_font_size: '24px',
      description_font_family: 'Muli'
    },
    mobile_appearance: {
      background_image: 'url(' + require('../../assets/background/bg5_mobile.png').default + ')',
      title_font_size: '28px',
      description_font_size: '16px'
    }
  },
  template6: {
    css: () => import('!css-loader!less-loader!./template6.less'),
    type: 'fullscreen',
    text: {
      name: {
        vi: 'Form đăng ký nhận ưu đãi',
        en: 'Sign up offer'
      },
      title: {
        vi: 'Đăng ký để nhận ưu đãi đặc biệt',
        en: 'Sign up to get special offer'
      },
      description: {
        vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
        en: 'Get 20% off your first order. Sign up now!'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: '#fff',
      description_color: '#fff',
      background: 'white',
      primary_button_background: '#c89c3e',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '',
      input_background: '',
      title_font_family: 'Montserrat',
      title_font_size: '48px',
      title_font_weight: 'bold',
      description_font_size: '18px',
      description_font_family: 'Muli'
    },
    mobile_appearance: {
      title_color: '#fff',
      description_color: '#fff',
      background: 'white',
      background_image: 'url(' + require('../../assets/background/template6_mobile.png').default + ')',
      primary_button_background: '#dab86a',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '#fff',
      input_background: '',
      description_font_size: '14px',
      title_font_size: '28px'
    }
  },
  template9: {
    css: () => import('!css-loader!less-loader!./template9.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 5: Xin ý kiến đánh giá',
        en: 'Template 5: Feedback'
      },
      title: {
        vi: 'Bạn có tìm được thứ mình cần?',
        en: 'Did you find what you need?'
      },
      description: {
        vi: 'Chia sẻ cảm nhận của bạn cho chúng tôi bạn sẽ nhận được 10% GIẢM GIÁ.',
        en: 'Share your recent experience and get 10% off your next purchase'
      },
      primary_button: {
        vi: 'Gửi cảm nhận',
        en: 'Send feedback'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: '#fdad15',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '',
      input_background: '',
      title_line_height: '44px',
      title_font_family: 'Montserrat',
      title_font_size: '36px',
      title_font_weight: '700',
      description_font_weight: 'normal',
      description_font_size: '16px',
      description_font_family: 'Muli',
      input_border_color: '#d9d9d9'
    }
  },
  template10: {
    css: () => import('!css-loader!less-loader!./template10.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 6: Xin ý kiến đánh giá',
        en: 'Template 6: Feedback'
      },
      title: {
        vi: 'Feedback của bạn rất quan trọng với chúng tôi!',
        en: 'Your feedback is valuable to us!'
      },
      description: {
        vi: 'Oh không! Tại sao bạn lại rời khỏi đây quá sớm như thế?',
        en: 'Oh no! Why do you leave so soon?'
      },
      primary_button: {
        vi: 'Gửi ngay',
        en: 'Send feedback'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: '#000',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '#000',
      input_background: '#fff',
      title_font_size: '16px',
      description_font_size: '28px',
      description_font_weight: 'bold'
    }
  },
  template20: {
    css: () => import('!css-loader!less-loader!./template20.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 7: Hỏi thông tin',
        en: 'Template 7: Ask information'
      },
      title: {
        vi: 'Đăng ký ngay để nhận mã giảm gía 15%',
        en: 'Register and get 15% off your next order'
      },
      description: {
        vi: 'Và nhận thông báo về các chương trình khuyến mãi mới nhất của chúng tôi',
        en: 'And never miss out any new promotion'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'white',
      description_color: 'black',
      background: 'white',
      primary_button_background: 'linear-gradient(107.32deg, #EE4A9B 0%, #F9A219 100%)',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '#000',
      input_background: '',
      title_font_size: '52px',
      title_font_weight: '700',
      title_font_family: 'Roboto',
      description_font_size: '16px',
      description_font_family: 'Roboto',
      input_border_color: '#5F6369'
    },
    mobile_appearance: {
      title_font_size: '32px'
    }
  },
  template21: {
    css: () => import('!css-loader!less-loader!./template21.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 9: Hỏi thông tin',
        en: 'Template 9: Ask information'
      },
      title: {
        vi: 'Đăng ký ngay để nhận mã giảm gía 15%',
        en: 'Register and get 15% off your next order'
      },
      description: {
        vi: 'Và nhận thông báo về các chương trình khuyến mãi mới nhất của chúng tôi',
        en: 'And never miss out any new promotion'
      },
      primary_button: {
        vi: 'Nhận mã giảm giá',
        en: 'Get the coupon code'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'white',
      description_color: 'white',
      background: 'white',
      primary_button_background: 'linear-gradient(109.98deg, #D53938 0%, #FEBD3C 100%);',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#B3C4CC',
      input_color: '#fff',
      input_background: 'none',
      title_font_size: '48px',
      title_line_height: '24px',
      title_color: '#5F6369',
      description_font_family: 'Roboto',
      description_font_size: '24px',
      input_border_color: '#ddd'
    },
    mobile_appearance: {
      background_image: 'url(' + require('../../assets/background/template21_mobile.png').default + ')',
      description_font_size: '16px'
    }
  },
  template22: {
    css: () => import('!css-loader!less-loader!./template22.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 10: Hỏi thông tin',
        en: 'Template 10: Ask information'
      },
      title: {
        vi: 'Săn coupon hot với ưu đãi đến 49%',
        en: 'Get up to 49% off now'
      },
      description: {
        vi: 'Đừng bỏ lỡ cơ hội này',
        en: "Don't miss this change"
      },
      primary_button: {
        vi: 'Săn coupon ngay',
        en: 'Get the coupon'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'white',
      description_color: 'white',
      background: 'white',
      primary_button_background: 'linear-gradient(109.98deg, #D53938 0%, #FEBD3C 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#B3C4CC',
      input_color: '#fff',
      input_background: 'none',
      title_font_size: '56px',
      title_font_weight: '700',
      title_font_family: 'Roboto',
      description_font_size: '24px',
      description_font_family: 'Roboto',
      input_border_color: '#ddd'
    },
    mobile_appearance: {
      background_image: 'url(' + require('../../assets/background/template22_mobile.png').default + ')',
      title_font_size: '37px'
    }
  },
  template23: {
    css: () => import('!css-loader!less-loader!./template23.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 11: Hỏi thông tin',
        en: 'Template 12: Ask information'
      },
      title: {
        vi: 'Săn coupon hot với ưu đãi đến 49%',
        en: 'Get up to 49% off now'
      },
      description: {
        vi: 'Đừng bỏ lỡ cơ hội này',
        en: "Don't miss this change"
      },
      primary_button: {
        vi: 'Săn coupon ngay',
        en: 'Get the coupon'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'white',
      description_color: 'white',
      background: 'white',
      primary_button_background: 'linear-gradient(109.98deg, #D53938 0%, #FEBD3C 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#B3C4CC',
      input_color: '#fff',
      input_background: 'none',
      input_border_color: '#ddd',
      title_font_size: '48px',
      title_font_weight: '700',
      title_font_family: 'Roboto',
      description_font_family: 'Roboto',
      description_font_size: '24px'
    },
    mobile_appearance: {
      background_image: 'url(' + require('../../assets/background/template23_mobile.png').default + ')',
      title_font_size: '37px',
      description_font_size: '24px'
    }
  },
  template24: {
    css: () => import('!css-loader!less-loader!./template24.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 12: Hỏi thông tin',
        en: 'Template 12: Ask information'
      },
      title: {
        vi: 'Ưu đãi 15% và miễn phí vận chuyển',
        en: 'Get 15% off and Free shipping'
      },
      description: {
        vi: 'Đăng ký ngay để nhận ưu đãi và thông báo cho các chương trình khuyến mãi tiếp',
        en: 'Register to get the discount and receive notification for next promotions'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#2E052E',
      description_color: '#2E052E',
      background: 'white',
      primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369;',
      input_color: '#996699',
      input_background: 'none',
      title_font_family: 'Yeseva One',
      title_font_size: '48px',
      description_font_size: '16px',
      description_font_family: 'Roboto',
      input_border_color: '#996699'
    },
    mobile_appearance: {
      background_image: 'url(' + require('../../assets/background/template24_mobile.png').default + ')',
      description_font_size: '14px'
    }
  },
  tet20201: {
    css: () => import('!css-loader!less-loader!./tet20201.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 13: Chúc mừng năm mới 2020',
        en: 'Template 13: New Year 2020'
      },
      title: {
        vi: 'Happy new year',
        en: 'Happy new year'
      },
      description: {
        vi: '2020',
        en: '2020'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#FAC571',
      description_color: '#FAC571',
      primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369;',
      input_color: '',
      input_background: '',
      title_font_size: '30px',
      title_font_weight: 'bold',
      title_text_transform: 'uppercase',
      description_font_size: '20px'
    },
    mobile_appearance: {
      background_image: 'url(' + require('../../assets/background/tet20201_mobile.png').default + ')'
    }
  },
  tet20202: {
    css: () => import('!css-loader!less-loader!./tet20202.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 14: Chúc mừng năm mới 2020',
        en: 'Template 14: New Year 2020'
      },
      title: {
        vi: 'Mừng xuân canh tý',
        en: 'Mừng xuân canh tý'
      },
      description: {
        vi: '2020',
        en: '2020'
      }
    },
    desktop_appearance: {
      title_color: '#FAC571',
      description_color: '#FAC571',
      primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369;',
      input_color: '',
      input_background: '',
      title_font_size: '30px',
      title_font_weight: 'bold',
      title_text_transform: 'uppercase',
      description_font_size: '20px'
    },
    mobile_appearance: {
      background_image: 'url(' + require('../../assets/background/tet20202_mobile.png').default + ')'
    }
  },
  tet20203: {
    css: () => import('!css-loader!less-loader!./tet20203.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 15: Chúc mừng năm mới 2020',
        en: 'Template 15: New Year 2020'
      },
      title: {
        vi: 'Chúc mừng năm mới',
        en: 'Happy new year'
      },
      description: {
        vi: 'Tết tới tấn tài\nXuân sang đắc lộc\nGia đình hạnh phúc\nVạn sự cát tường',
        en: 'Tết tới tấn tài\nXuân sang đắc lộc\nGia đình hạnh phúc\nVạn sự cát tường'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#FAC571',
      description_color: '#fff',
      background: '#9F0102',
      primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369',
      input_color: '',
      input_background: '',
      title_font_size: '36px',
      title_font_family: 'Roboto',
      title_font_weight: 'bold',
      description_font_size: '20px',
      description_font_family: 'Roboto'
    }
  },
  tet20204: {
    css: () => import('!css-loader!less-loader!./tet20204.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 16: Chúc mừng năm mới 2020',
        en: 'Template 16: New Year 2020'
      },
      title: {
        vi: 'Happy new year 2020',
        en: 'Happy new year'
      },
      description: {
        vi: 'Kính chúc khách hàng một năm mới\nAn Khang Thịnh Vượng',
        en: 'Kính chúc khách hàng một năm mới\nAn Khang Thịnh Vượng'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#FDE5AF',
      description_color: '#FCC626',
      background: '#9F0102',
      primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369',
      input_color: '',
      input_background: '',
      title_font_weight: 'bold',
      title_font_size: '48px',
      description_font_size: '18px'
    },
    mobile_appearance: {
      title_font_size: '26px'
    }
  },
  template11: {
    css: () => import('!css-loader!less-loader!./template11.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 17: Hỏi thông tin',
        en: 'Template 17: Ask information'
      },
      title: {
        vi: 'Giảm 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'với đơn hàng đầu tiên của bạn',
        en: 'your first order'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: 'linear-gradient(103.5deg, #D53938 0%, #FEBD3C 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#777',
      input_color: 'black',
      input_background: 'transparent',
      title_font_size: '48px',
      title_font_style: 'normal',
      title_font_weight: 'normal',
      title_text_transform: 'uppercase',
      title_font_family: 'Yeseva One',
      description_font_weight: 'normal',
      description_font_size: '24px',
      description_font_family: 'Roboto'
    },
    mobile_appearance: {
      title_font_size: '36px',
      description_font_size: '16px'
    }
  },
  template12: {
    css: () => import('!css-loader!less-loader!./template12.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 18: Hỏi thông tin',
        en: 'Template 18: Ask information'
      },
      title: {
        vi: 'ƯU ĐÃI 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'dành riêng với bộ sưu tập mới',
        en: 'our new collection'
      },
      primary_button: {
        vi: 'ĐĂNG KÝ NGAY',
        en: 'SIGN UP NOW'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: 'linear-gradient(103.5deg, #D53938 0%, #FEBD3C 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#777',
      input_color: 'black',
      input_background: 'transparent',
      title_font_size: '48px',
      title_text_transform: 'uppercase',
      title_font_family: 'Yeseva One',
      description_font_size: '24px',
      description_font_family: 'Roboto'
    },
    mobile_appearance: {
      title_font_size: '36px',
      description_font_size: '16px'
    }
  },
  template13: {
    css: () => import('!css-loader!less-loader!./template13.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 19: Hỏi thông tin',
        en: 'Template 19: Ask information'
      },
      title: {
        vi: 'Giảm 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'và miễn phí vận chuyển với tất cả những đơn hàng trị giá trên 500K',
        en: 'and get free worldwide shipping'
      },
      primary_button: {
        vi: 'ĐĂNG KÝ NGAY',
        en: 'SIGN UP NOW'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: '#f13a86',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#777',
      input_color: 'black',
      input_background: 'transparent',
      title_font_family: 'Yeseva One',
      title_text_transform: 'uppercase',
      title_font_size: '56px',
      description_font_size: '24px',
      description_font_family: 'Roboto'
    },
    mobile_appearance: {
      description_font_size: '16px'
    }
  },
  template14: {
    css: () => import('!css-loader!less-loader!./template14.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 20: Hỏi thông tin',
        en: 'Template 20: Ask information'
      },
      title: {
        vi: 'ĐĂNG KÝ ĐỂ NHẬN ƯU ĐÃI ĐẶC BIỆT',
        en: '10% OFF'
      },
      description: {
        vi: 'nhận ngay mã giảm giá 50%',
        en: 'and get free worldwide shipping'
      },
      primary_button: {
        vi: 'ĐĂNG KÝ NGAY',
        en: 'SIGN UP NOW'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'white',
      description_color: 'white',
      background: 'white',
      primary_button_background: 'linear-gradient(103.5deg, #D53938 0%, #FEBD3C 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#ffffff6f',
      input_color: 'white',
      input_background: 'transparent',
      title_font_size: '45px',
      title_font_weight: '700',
      title_font_family: 'Montserrat',
      description_font_size: '30px',
      description_font_family: 'Montserrat',
      input_border_color: '#326767'
    },
    mobile_appearance: {
      title_font_size: '28px',
      description_font_size: '16px'
    }
  },
  template15: {
    css: () => import('!css-loader!less-loader!./template15.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 21: Hỏi thông tin',
        en: 'Template 21: Ask information'
      },
      title: {
        vi: 'Giảm 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'và miễn phí vận chuyển với tất cả những đơn hàng trị giá trên 500K',
        en: 'and get free worldwide shipping'
      },
      primary_button: {
        vi: 'ĐĂNG KÝ NGAY',
        en: 'SIGN UP NOW'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#122121',
      description_color: '#244242',
      background: 'white',
      primary_button_background: '#ffba01',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#5f6369',
      input_color: '#326767',
      input_background: 'transparent',
      title_font_size: '56px',
      title_font_weight: 'bold',
      title_font_family: 'Yesava One',
      description_font_weight: 'normal',
      description_font_size: '16px',
      description_font_family: 'Roboto',
      input_border_color: '#3267673f'
    },
    mobile_appearance: {
      title_font_size: '52px'
    }
  },
  templateu23: {
    css: () => import('!css-loader!less-loader!./templateu23.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 21: U23 2019',
        en: 'Template 22: U23 2019'
      },
      title: {
        vi: `Chặng đường mới
thành công mới`,
        en: `Chặng đường mới
thành công mới`
      },
      description: {
        vi: 'Đón thêm khách hàng mới cùng subiz new widget',
        en: 'Đón thêm khách hàng mới cùng subiz new widget'
      },
      primary_button: {
        vi: 'Xem ngay',
        en: 'See now'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: '#FFC48B',
      description_color: 'white',
      background: '#B41A12',
      primary_button_background: '#FFC48B',
      primary_button_color: '#B41A12',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '',
      input_background: '',
      title_text_transform: 'uppercase',
      title_font_weight: 'bold',
      title_font_family: 'Roboto Condensed',
      title_font_size: '33px',
      description_font_weight: '600',
      description_font_size: '18px',
      description_font_family: 'Muli'
    },
    mobile_appearance: {
      background_image: 'url(' + require('../../assets/background/templateu23_mobile.png').default + ')'
    }
  },
  template16: {
    css: () => import('!css-loader!less-loader!./template16.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 23: Hỏi thông tin',
        en: 'Template 23: Ask information'
      },
      title: {
        vi: 'Giảm 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'với đơn hàng đầu tiền của bạn',
        en: 'your first order'
      },
      primary_button: {
        vi: 'ĐĂNG KÝ NGAY',
        en: 'SIGN UP NOW'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: 'linear-gradient(103.5deg, #EE2849 0%, #D65C70 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#5f6369',
      input_color: '#5f6369',
      input_background: 'transparent',
      title_font_size: '40px',
      title_font_weight: 'bold',
      title_font_family: 'Yesana One',
      title_text_transform: 'uppercase',
      description_font_size: '18px',
      description_font_family: 'Muli',
      input_border_color: '#d9d9d9'
    }
  },
  template17: {
    css: () => import('!css-loader!less-loader!./template17.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 24: Hỏi thông tin',
        en: 'Template 24: Ask information'
      },
      title: {
        vi: 'Nhận ngay ưu đãi!',
        en: 'Get special offer now!'
      },
      description: {
        vi: 'Giảm 20% chỉ một ngày duy nhất. Miễn phí vận chuyển nội thành',
        en: '20% off for only one day. Free shipping in the city'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Register now'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: '#FDAD15',
      description_color: 'white',
      background: 'white',
      primary_button_background: '#FDAD15',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '#fff',
      input_background: '',
      title_font_weight: 'bold',
      title_font_family: 'Roboto Condensed',
      title_text_transform: 'uppercase',
      title_font_size: '42px',
      input_border_color: '#fff'
    },
    mobile_appearance: {
      background_image: 'url(' + require('../../assets/background/template39_mobile.png').default + ')'
    }
  },
  template39: {
    css: () => import('!css-loader!less-loader!./template39.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 24: Hỏi thông tin',
        en: 'Template 24: Ask information'
      },
      title: {
        vi: 'Nhận ngay ưu đãi!',
        en: 'Get special offer now!'
      },
      description: {
        vi: 'Giảm 20% chỉ một ngày duy nhất. Miễn phí vận chuyển nội thành',
        en: '20% off for only one day. Free shipping in the city'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Register now'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: '#FDAD15',
      description_color: 'white',
      background: 'white',
      primary_button_background: '#FDAD15',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '#fff',
      input_background: '',
      title_font_weight: 'bold',
      title_font_family: 'Roboto Condensed',
      title_font_size: '42px',
      title_text_transform: 'uppercase',
      input_border_color: '#d9d9d9',
      description_font_size: '18px',
      description_font_weight: 'normal',
      description_font_family: 'Muli'
    },
    mobile_appearance: {
      background_image: 'url(' + require('../../assets/background/template39_mobile.png').default + ')',
      description_font_size: '16px',
      title_font_size: '28px'
    }
  },
  template117: {
    css: () => import('!css-loader!less-loader!./template117.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 25: Hỏi thông tin',
        en: 'Template 25: Ask information'
      },
      title: {
        vi: 'Giảm 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'với đơn hàng đầu tiền của bạn',
        en: 'your first order'
      },
      primary_button: {
        vi: 'ĐĂNG KÝ NGAY',
        en: 'SIGN UP NOW'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: 'linear-gradient(103.5deg, #593EF4 0%, #525EE0 100%) ',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#5f6369',
      input_color: '#5f6369',
      input_background: 'transparent',
      title_text_transform: 'uppercase',
      title_font_family: 'Yesana One',
      title_font_size: '56px',
      title_font_weight: 'bold',
      description_font_weight: 'normal',
      description_font_size: '18px',
      description_font_family: 'Muli'
    },
    mobile_appearance: {
      title_font_size: '56px'
    }
  },
  template25: {
    css: () => import('!css-loader!less-loader!./template25.less'),
    text: {
      name: {
        vi: 'Mẫu 26: Hỏi thông tin',
        en: 'Template 26: Ask information'
      },
      title: {
        vi: 'Nhận giảm giá 20% cho đơn hàng tiếp theo',
        en: 'Get 20% off your next order'
      },
      description: {
        vi: 'Đăng ký ngay để nhận ưu đãi cho đơn hàng tiếp theo',
        en: 'Register to get the discount and receive notification for next promotions'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Register'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#062D29',
      description_color: '#062D29',
      background: 'white',
      primary_button_background: 'linear-gradient(73.97deg, #FF9500 0.21%, #FFBF00 100.21%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369',
      input_color: '#fff',
      input_background: 'none',
      title_font_family: 'Yeseva One',
      title_font_size: '48px',
      description_font_family: 'Roboto',
      description_font_size: '20px',
      input_border_color: '#FFBF00'
    },
    mobile_appearance: {
      title_font_size: '40px',
      description_font_size: '20px'
    }
  },
  template26: {
    css: () => import('!css-loader!less-loader!./template26.less'),
    text: {
      name: {
        vi: 'Mẫu 27: Hỏi thông tin',
        en: 'Template 27: Ask information'
      },
      title: {
        vi: 'Ưu đãi 10%',
        en: '10% off'
      },
      description: {
        vi: 'và miễn phí vận chuyển với tất cả các đơn hàng trên giá trị 500k',
        en: 'and get free worldwide shipping'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#D01865',
      description_color: '#000000',
      background: 'white',
      primary_button_background: 'linear-gradient(79.26deg, #E61A6F 0.21%, #F53D8A 100.21%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369',
      input_color: '#000',
      input_background: 'none',
      title_font_family: 'Yeseva One',
      title_font_weight: 'bold',
      title_font_size: '48px',
      description_font_size: '16px',
      description_font_family: 'Roboto',
      input_border_color: '#5F6369'
    },
    mobile_appearance: {
      background_image: 'url(' + require('../../assets/background/template26_mobile.png').default + ')',
      title_font_size: '48px',
      description_font_size: '16px'
    }
  },
  template18: {
    css: () => import('!css-loader!less-loader!./template18.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 28: Hỏi thông tin',
        en: 'Template 28: Ask information'
      },
      title: {
        vi: 'ĐĂNG KÝ ĐỂ NHẬN ƯU ĐÃI ĐẶC BIỆT',
        en: '10% OFF'
      },
      description: {
        vi: 'nhận ngay mã giảm giá tới 500K cho đơn hàng đầu tiên',
        en: 'Get up to 100$ off your first order'
      },
      primary_button: {
        vi: 'ĐĂNG KÝ NGAY',
        en: 'SIGN UP NOW'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: 'linear-gradient(74.1deg, #5E8D81 0.21%, #3FA684 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: 'black',
      input_color: 'black',
      input_background: 'transparent',
      title_font_size: '55px',
      title_font_weight: 'bold',
      title_font_family: 'Yeseva One',
      description_font_weight: 'normal',
      description_font_size: '24px',
      description_font_family: 'Montserrat',
      input_border_color: '#d9d9d9'
    },
    mobile_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: 'linear-gradient(74.1deg, #5E8D81 0.21%, #3FA684 100%)',
      primary_button_color: 'white',
      background_image: 'url(' + require('../../assets/background/template18_mobile.png').default + ')',
      secondary_button_background: 'transparent',
      secondary_button_color: 'black',
      input_color: 'black',
      input_background: 'transparent',
      title_font_size: '28px',
      description_font_size: '16px'
    }
  },
  template27: {
    css: () => import('!css-loader!less-loader!./template27.less'),
    text: {
      name: {
        vi: 'Mẫu 29: Hỏi thông tin',
        en: 'Template 29: Ask information'
      },
      title: {
        vi: 'Giảm 10%',
        en: '10% off'
      },
      description: {
        vi: 'và miễn phí vận chuyển với tất cả các đơn hàng trên giá trị 500k',
        en: 'and get free worldwide shipping'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#D01965',
      description_color: '#000000',
      background: 'white',
      primary_button_background: 'linear-gradient(79.26deg, #E61A6F 0.21%, #F53D8A 100.21%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369',
      input_color: '#000',
      input_background: 'none',
      title_font_weight: 'bold',
      title_font_family: 'Yeseva One',
      title_font_size: '56px',
      description_font_family: 'Roboto',
      description_font_size: '16px',
      input_border_color: '#5F6369'
    },
    mobile_appearance: {
      background_image: 'url(' + require('../../assets/background/template27_mobile.png').default + ')',
      title_font_size: '48px'
    }
  },
  template19: {
    css: () => import('!css-loader!less-loader!./template19.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 30: Hỏi thông tin',
        en: 'Template 30: Ask information'
      },
      title: {
        vi: 'ƯU ĐÃI 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'Đăng ký ngay và nhận mã giảm giá 10% cho đơn hàng đầu tiên',
        en: 'Regiter now and get 10% OFF your first order'
      },
      primary_button: {
        vi: 'ĐĂNG KÝ NGAY',
        en: 'SIGN UP NOW'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: 'linear-gradient(103.29deg, #D53938 0%, #FEBD3C 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#777',
      input_color: 'black',
      input_background: 'transparent',
      title_font_family: 'Roboto',
      title_font_weight: '700',
      title_font_size: '38px',
      title_text_transform: 'uppercase',
      description_font_weight: 'normal',
      description_font_size: '20px',
      description_font_family: 'Roboto',
      input_border_color: '#8d8d8d80'
    },
    mobile_appearance: {
      background_image: 'url(' + require('../../assets/background/template19_mobile.png').default + ')',
      title_font_size: '30px',
      description_font_size: '16px'
    }
  },
  template28: {
    css: () => import('!css-loader!less-loader!./template28.less'),
    text: {
      name: {
        vi: 'Mẫu 31: Hỏi thông tin',
        en: 'Template 31: Ask information'
      },
      title: {
        vi: 'ƯU ĐÃI 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'Đăng ký để nhận ngay mã giảm giá 10%',
        en: 'Sign up to get 10% discount your next order'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#fff',
      description_color: '#fff',
      background: 'white',
      primary_button_background: '#fff',
      primary_button_color: '#111231',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369',
      input_color: '#DADDEF',
      input_background: 'none',
      title_font_family: 'Yeseva One',
      title_text_transform: 'uppercase',
      title_font_size: '48px',
      description_font_size: '16px',
      description_font_family: 'Roboto',
      input_border_color: '#fff'
    },
    mobile_appearance: {
      title_font_size: '48px',
      background_image: 'url(' + require('../../assets/background/template28_mobile.png').default + ')'
    }
  },
  template202009021: {
    css: () => import('!css-loader!less-loader!./template202009021.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 32: Hỏi thông tin',
        en: 'Template 32: Ask information'
      },
      title: {
        vi: 'Ưu đãi đặc biệt mừng Quốc khánh 2/9',
        en: 'Special offer to celebrate National Day 2/9'
      },
      description: {
        vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
        en: '20% off for a single day. Sign up now to receive a discount code!'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#226C92',
      description_color: '#000',
      background: 'white',
      background_image: 'url(' + require('../../assets/background/template29_mobile.png').default + ')',
      primary_button_background: '#226C92',
      primary_button_color: '#fff',
      input_color: '#000',
      input_background: 'none',
      title_font_size: '30px',
      title_font_weight: 'bold',
      title_font_family: 'Roboto',
      title_text_transform: 'none',
      description_font_size: '16px',
      description_font_family: 'Roboto',
      input_border_color: 'rgba(0, 0, 0, 0.5)'
    }
  },
  template202009022: {
    css: () => import('!css-loader!less-loader!./template202009022.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Bão sale mừng Quốc khánh 2/9',
        en: 'National Day September 2 Sale Storm'
      },
      title: {
        vi: 'Bão sale mừng Quốc khánh 2/9',
        en: 'National Day September 2 Sale Storm'
      },
      description: {
        vi: 'Ưu đãi lớn, quà ngập tràn. Săn ngay các deal giảm giá cực hot của chúng tôi',
        en: 'Big deals, overwhelming gifts. Hunt now for our extremely hot discount deals'
      },
      primary_button: {
        vi: 'Mua Ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#FAC571',
      description_color: '#fff',
      primary_button_background: '#FAC571',
      primary_button_color: '##4B2C02',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369;',
      input_color: '',
      input_background: '',
      title_font_size: '38px',
      title_font_weight: 'bold',
      description_font_size: '16px'
    }
  },
  template29: {
    css: () => import('!css-loader!less-loader!./template29.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 32: Hỏi thông tin',
        en: 'Template 32: Ask information'
      },
      title: {
        vi: 'Giảm 25%',
        en: '25% off'
      },
      description: {
        vi: 'Đăng ký để nhận ngay ưu đãi',
        en: 'Sign up to get the promotion code '
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#000',
      description_color: '#000',
      background: 'white',
      primary_button_background: 'linear-gradient(73.97deg, #CC8066 0.21%, #D99F8C 99.94%)',
      primary_button_color: '#fff',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369',
      input_color: '#000',
      input_background: 'none',
      title_font_size: '40px',
      title_font_family: 'Yeseva One',
      title_text_transform: 'uppercase',
      description_font_size: '16px',
      description_font_family: 'Roboto',
      input_border_color: '#5f6369'
    },
    mobile_appearance: {
      background_image: 'url(' + require('../../assets/background/template29_mobile.png').default + ')'
    }
  },
  template30: {
    css: () => import('!css-loader!less-loader!./template30.less'),
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 33: Hỏi thông tin',
        en: 'Template 33: Ask information'
      },
      title: {
        vi: 'Giảm 25%',
        en: '25% off'
      },
      description: {
        vi: 'Đăng ký để nhận ngay ưu đãi',
        en: 'Sign up to get the promotion code '
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#000',
      description_color: '#000',
      background: 'white',
      primary_button_background: 'linear-gradient(73.97deg, #E61A6F 0.21%, #F53D8A 100.21%)',
      primary_button_color: '#fff',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369',
      input_color: '#000',
      input_background: 'none',
      title_font_size: '40px',
      title_font_family: 'Yeseva One',
      title_text_transform: 'uppercase',
      input_border_color: '#5f6369',
      description_font_size: '16px',
      description_font_family: 'Roboto'
    },
    mobile_appearance: {
      background_image: 'url(' + require('../../assets/background/template30_mobile.png').default + ')'
    }
  }
};
Object.keys(meta).map(id => {
  if (meta[id].js) return;

  let img = require('../../assets/background/' + id + '.png');

  if (img.default) img = img.default;
  meta[id].desktop_appearance.background_image = 'url(' + img + ')';
  if (!meta[id].desktop_appearance.overlay) meta[id].desktop_appearance.overlay = 'rgba(0,0,0,0.8)';
  if (!meta[id].desktop_appearance.title_text_transform) meta[id].desktop_appearance.title_text_transform = 'none';
  if (!meta[id].desktop_appearance.title_font_family) meta[id].desktop_appearance.title_font_family = 'Roboto';
  if (!meta[id].desktop_appearance.title_font_size) meta[id].desktop_appearance.title_font_size = '30px';
  if (!meta[id].desktop_appearance.title_font_weight) meta[id].desktop_appearance.title_font_weight = 'normal';
  if (!meta[id].desktop_appearance.title_font_style) meta[id].desktop_appearance.title_font_style = 'normal';
  if (!meta[id].desktop_appearance.description_text_transform) meta[id].desktop_appearance.description_text_transform = 'none';
  if (!meta[id].desktop_appearance.description_font_family) meta[id].desktop_appearance.description_font_family = 'Roboto';
  if (!meta[id].desktop_appearance.description_font_size) meta[id].desktop_appearance.description_font_size = '30px';
  if (!meta[id].desktop_appearance.description_font_weight) meta[id].desktop_appearance.description_font_weight = 'normal';
  if (!meta[id].desktop_appearance.description_font_style) meta[id].desktop_appearance.description_font_style = 'normal';
  if (!meta[id].desktop_appearance.input_border_color) meta[id].desktop_appearance.input_border_color = '#000';
});
export default meta;