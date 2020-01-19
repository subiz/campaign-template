import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
export default {
  name: 'template1',
  props: ['page', 'form', 'countdown', 'primaryButton', 'secondaryButton', 'closeButton'],
  render: function render(h) {
    return h("div", {
      "class": "container"
    }, [this.closeButton, h("div", {
      "class": "main-template"
    }, [h("div", {
      "class": "image"
    }), h("div", {
      "class": "div-left"
    }), h("div", {
      "class": "div-right"
    }, [h("p", {
      "class": "title"
    }, [this.page.title]), h("p", {
      "class": "description"
    }, [this.page.description]), this.form, h("div", {
      "class": "buttons-container"
    }, [this.primaryButton, this.secondaryButton])])])]);
  }
};