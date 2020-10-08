import Form from './components/Form.js';
import CloseButton from './components/CloseButton.js';
import { render, h, Component, createRef } from 'preact';

var op = require('object-path');

import meta from './templates/meta.js';
const MODE = mobilecheck() ? 'mobile' : 'desktop';
let CSS = '';

class Template extends Component {
  setClose(close) {
    if (close) {
      this.setState({
        closeAnimation: 'bounceOut'
      });
      setTimeout(() => {
        this.setState({
          close: true,
          closeAnimation: ''
        });
        document.body.classList.remove('sbz_noscroll');
      }, 400);
    } else {
      this.setState({
        closeAnimation: ''
      });
      document.body.classList.add('sbz_noscroll');
    }
  }

  onClose() {
    this.props.onClose();
    this.setClose(true);
  }

  onSecondaryClick() {
    this.props.onClick('secondary_button');
    this.onButtonClick(op.get(this.props.page, 'secondary_button'), 'secondaryButtonClicked');
  }

  onButtonClick(button, ev) {
    let actions = op.get(button, 'actions') || [];
    let mustfillform = false;

    for (let a of actions) {
      if (a.action === 'converstion' || a.action === 'submit') {
        mustfillform = true;
        this.setState({
          pressedSubmit: true
        });
      }
    }

    if (mustfillform && !formFilled(op.get(this.props.page, 'form'))) return;

    for (let a of actions) {
      if (a.action === 'close') setTimeout(() => this.onClose(), 200);
    }
  }

  onBackgroundClick() {
    this.props.onClick('background');
    this.onButtonClick(op.get(this.props.page, 'background_click'), 'backgroundClicked');
  }

  onPrimaryClick() {
    this.props.onClick('primary_button');
    this.onButtonClick(op.get(this.props.page, 'primary_button'), 'primaryButtonClicked');
  }

  loadTemplate() {
    if (this.state.lastTemplate === this.props.template) return;
    this.state.lastTemplate = this.props.template;
    let temp = meta[this.props.template];
    if (!temp) return;
    setTimeout(() => {
      temp.css().then(mod => {
        CSS = mod.default.toString();
        populatePage(this.props.template, this.props.page);
        this.forceUpdate();
      });
    });
  }

  componentDidMount() {
    this.setClose(false);
  }

  render() {
    this.loadTemplate();
    if (this.state.close) return null;
    let $primary = null;
    let primaryBtnCls = 'btn btn--primary';
    if (this.props.select === 'primary_button') primaryBtnCls += ' text__shake';

    if (op.get(this.props.page, 'primary_button.enabled')) {
      $primary = h("button", {
        onClick: e => this.onPrimaryClick(e),
        class: primaryBtnCls
      }, op.get(this.props.page, 'primary_button.text'));
    }

    let $secondary = null;
    let secondaryBtnCls = 'btn btn--secondary';
    if (this.props.select === 'secondary_button') secondaryBtnCls += ' text__shake';

    if (op.get(this.props.page, 'secondary_button.enabled')) {
      $secondary = h("button", {
        onClick: e => this.onSecondaryClick(e),
        class: secondaryBtnCls
      }, op.get(this.props.page, 'secondary_button.text'));
    }

    let $form = h(Form, {
      onClick: this.props.onClick,
      form: this.props.page.form,
      pressedSubmit: this.state.pressedSubmit
    });
    var mode = this.props.mode || MODE;
    var cls = 'overlay ';
    if (this.props.frame) cls += ' overlay--' + this.props.frame;
    var animation = 'container ';
    if (this.state.closeAnimation) animation += this.state.closeAnimation;else animation += this.props.page.animation;
    let titlecls = 'title';
    if (this.props.select === 'title') titlecls += ' text__shake';
    let desccls = 'description';
    if (this.props.select === 'description') desccls += ' text__shake';
    return h("div", {
      class: 'template ' + this.props.template
    }, h("div", {
      class: mode
    }, h("div", {
      class: cls,
      onClick: e => this.onBackgroundClick(e)
    }, h("div", {
      class: "notch"
    }, h("div", {
      class: "notch__camera"
    }), h("div", {
      class: "notch__audio"
    })), h("div", {
      class: "browser-bar"
    }, h("div", {
      class: "button__red"
    }), h("div", {
      class: "button__yellow"
    }), h("div", {
      class: "button__green"
    }), h("div", {
      class: "bar__url"
    })), h("div", {
      class: animation,
      onClick: e => e.stopPropagation()
    }, h(CloseButton, {
      onClick: e => this.onClose(e)
    }), h("div", {
      class: "background"
    }), h("div", {
      class: "body"
    }, h("p", {
      class: titlecls,
      onClick: e => this.props.onClick('title')
    }, this.props.page.title), h("div", {
      class: "title-separator"
    }), h("p", {
      class: desccls,
      onClick: e => this.props.onClick('description')
    }, this.props.page.description), $form, h("div", {
      class: "buttons"
    }, $primary, $secondary))))));
  }

}

function merge(a, b) {
  a = a || {};
  b = b || {};
  var c = {};
  var keys = Object.keys(a);

  for (let i = 0; i < keys.length; i++) c[keys[i]] = a[keys[i]];

  keys = Object.keys(b);

  for (let i = 0; i < keys.length; i++) {
    if (b[keys[i]]) c[keys[i]] = b[keys[i]];
  }

  return c;
}

function tokenize(arr, token) {
  if (!arr || !arr.length) return [];
  var out = [];

  for (let i = 0; i < arr.length; i++) {
    var item = arr[i];

    if (typeof item !== 'string') {
      out.push(item);
      continue;
    }

    var ts = item.split(token);

    for (let i = 0; i < ts.length; i++) {
      out.push(ts[i]);
      out.push({
        type: token
      });
    }

    out.pop();
  }

  return out;
}

function replaceCssVariable(css, page) {
  var tokens = [css];
  tokens = tokenize(tokens, "'@desktop_appearance.title_color'");
  tokens = tokenize(tokens, "'@desktop_appearance.description_color'");
  tokens = tokenize(tokens, "'@desktop_appearance.background'");
  tokens = tokenize(tokens, "'@desktop_appearance.background_image'");
  tokens = tokenize(tokens, "'@desktop_appearance.primary_button_background'");
  tokens = tokenize(tokens, "'@desktop_appearance.primary_button_color'");
  tokens = tokenize(tokens, "'@desktop_appearance.secondary_button_background'");
  tokens = tokenize(tokens, "'@desktop_appearance.secondary_button_color'");
  tokens = tokenize(tokens, "'@desktop_appearance.input_color'");
  tokens = tokenize(tokens, "'@desktop_appearance.input_background'");
  tokens = tokenize(tokens, "'@desktop_appearance.overlay'");
  tokens = tokenize(tokens, "'@desktop_appearance.title_font_family'");
  tokens = tokenize(tokens, "'@desktop_appearance.title_font_size'");
  tokens = tokenize(tokens, "'@desktop_appearance.title_font_style'");
  tokens = tokenize(tokens, "'@desktop_appearance.title_font_weight'");
  tokens = tokenize(tokens, "'@desktop_appearance.title_text_transform'");
  tokens = tokenize(tokens, "'@desktop_appearance.description_font_family'");
  tokens = tokenize(tokens, "'@desktop_appearance.description_font_size'");
  tokens = tokenize(tokens, "'@desktop_appearance.description_font_style'");
  tokens = tokenize(tokens, "'@desktop_appearance.description_font_weight'");
  tokens = tokenize(tokens, "'@desktop_appearance.description_text_transform'");
  tokens = tokenize(tokens, "'@desktop_appearance.input_label_color'");
  tokens = tokenize(tokens, "'@desktop_appearance.input_border_color'");
  tokens = tokenize(tokens, "'@mobile_appearance.title_color'");
  tokens = tokenize(tokens, "'@mobile_appearance.description_color'");
  tokens = tokenize(tokens, "'@mobile_appearance.background'");
  tokens = tokenize(tokens, "'@mobile_appearance.background_image'");
  tokens = tokenize(tokens, "'@mobile_appearance.primary_button_background'");
  tokens = tokenize(tokens, "'@mobile_appearance.primary_button_color'");
  tokens = tokenize(tokens, "'@mobile_appearance.secondary_button_background'");
  tokens = tokenize(tokens, "'@mobile_appearance.secondary_button_color'");
  tokens = tokenize(tokens, "'@mobile_appearance.input_color'");
  tokens = tokenize(tokens, "'@mobile_appearance.input_background'");
  tokens = tokenize(tokens, "'@mobile_appearance.overlay'");
  tokens = tokenize(tokens, "'@mobile_appearance.title_font_family'");
  tokens = tokenize(tokens, "'@mobile_appearance.title_font_size'");
  tokens = tokenize(tokens, "'@mobile_appearance.title_font_style'");
  tokens = tokenize(tokens, "'@mobile_appearance.title_font_weight'");
  tokens = tokenize(tokens, "'@mobile_appearance.title_text_transform'");
  tokens = tokenize(tokens, "'@mobile_appearance.description_font_family'");
  tokens = tokenize(tokens, "'@mobile_appearance.description_font_size'");
  tokens = tokenize(tokens, "'@mobile_appearance.description_font_style'");
  tokens = tokenize(tokens, "'@mobile_appearance.description_font_weight'");
  tokens = tokenize(tokens, "'@mobile_appearance.description_text_transform'");
  tokens = tokenize(tokens, "'@mobile_appearance.input_label_color'");
  tokens = tokenize(tokens, "'@mobile_appearance.input_border_color'");
  var ret = [];

  for (var i = 0; i < tokens.length; i++) {
    var item = tokens[i];

    if (typeof item === 'string') {
      ret.push(item);
      continue;
    }

    var path = item.type.substr(2, item.type.length - 3);
    ret.push(op.get(page, path));
  }

  return ret.join('');
}

function replaceFileUrl(src) {
  if (!src) return '';
  src = src.replace('filev4.subiz.com', 'file-subiz.com');
  src = src.replace('file.subiz.com', 'file-subiz.com');
  src = src.replace('file.mysubiz.com', 'file-subiz.com');
  return src;
}

function formFilled(form) {
  let hasForm = form && form.enabled && form.fields && form.fields.length > 0;
  if (!hasForm) return true;

  for (let i = 0; i < form.fields.length; i++) {
    let field = form.fields[i];
    if (field.is_required && (field.value === undefined || field.value === '')) return false;
  }

  return true;
}

function populatePage(templateid, page) {
  if (!templateid || !page) return;
  let temp = meta[templateid];
  var desktop_appearance = merge(temp.desktop_appearance, page.desktop_appearance);
  var mobile_appearance = merge(temp.mobile_appearance, page.mobile_appearance);
  let src = op.get(desktop_appearance, 'background_image', '');
  src = replaceFileUrl(src);
  op.set(desktop_appearance, 'background_image', src);
  src = op.get(desktop_appearance, 'background', '');
  src = replaceFileUrl(src);
  op.set(desktop_appearance, 'background', src);
  src = op.get(mobile_appearance, 'background', '');
  src = replaceFileUrl(src);
  op.set(mobile_appearance, 'background', src);
  src = op.get(mobile_appearance, 'background_image', '');
  src = replaceFileUrl(src);
  op.set(mobile_appearance, 'background_image', src);
  var css = replaceCssVariable(CSS, {
    desktop_appearance,
    mobile_appearance
  });
  setCssToHead('subiz-template-style-' + templateid, css);
}

function mobilecheck() {
  var a = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
}

function setCssToHead(id, css) {
  let cssStyleDiv = document.querySelector('#' + id);

  if (!cssStyleDiv) {
    cssStyleDiv = document.createElement('style');
    cssStyleDiv.type = 'text/css';
    cssStyleDiv.id = id;
    document.head.appendChild(cssStyleDiv);
  }

  if (cssStyleDiv.styleSheet) {
    cssStyleDiv.styleSheet.cssText = css;
  } else {
    cssStyleDiv.innerHTML = '';
    cssStyleDiv.appendChild(document.createTextNode(css));
  }
}

export let CampTemp = {
  meta: meta,
  New: () => {
    let my_ele = null;
    let my_option = null;
    let last_desktop_appear = null;
    let last_mobile_appear = null;
    let ref = createRef();
    return {
      close() {
        ref.current && ref.current.setClose(true);
      },

      reset() {
        render(h("div", null), my_ele);
        this.forceUpdate();
      },

      forceUpdate() {
        return this.render(my_ele, my_option);
      },

      render(ele, option) {
        if (typeof ele === 'string') ele = document.querySelector(ele);
        if (!ele) return;

        if (!eq(last_desktop_appear, op.get(option, 'page.desktop_appearance')) || !eq(last_mobile_appear, op.get(option, 'page.mobile_appearance'))) {
          last_desktop_appear = copy(op.get(option, 'page.desktop_appearance'));
          last_mobile_appear = copy(op.get(option, 'page.mobile_appearance'));
          populatePage(option.template, option.page);
        }

        my_ele = ele;
        my_option = option;

        let onclick = option.onClick || (() => true);

        let onclose = option.onClose || (() => true);

        return render(h(Template, {
          ref: ref,
          template: option.template,
          page: option.page,
          select: option.select,
          onClick: onclick,
          onClose: onclose,
          mode: option.mode,
          frame: option.frame
        }), ele);
      }

    };
  }
};

function eq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function copy(a) {
  if (!a) return;
  return JSON.parse(JSON.stringify(a));
}

export default CampTemp;