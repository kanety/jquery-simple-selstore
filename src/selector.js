import $ from 'jquery';
import { NAMESPACE } from './consts';

export default class Selector {
  constructor(elem, instance, options) {
    this.instance = instance;
    this.options = options;

    this.$container = $(elem);
    this.$container.addClass(`${NAMESPACE}-selector`);
  }

  bind() {
    this.$container.on(`click.${NAMESPACE}`, this.options.checkbox, (e) => {
      let $cb = $(e.target);
      let id = $cb.attr('data-ss-id') || $cb.attr('value');
      let title = $cb.attr('data-ss-title') || $cb.parent().text();
      if ($cb.prop('checked')) {
        if (this.exeeded()) {
          if (this.options.maxAlert) {
            alert(this.options.maxAlert);
          }
          e.preventDefault();
          return;
        }
        this.instance.select(id, title);
      } else {
        this.instance.unselect(id);
      }
    });
  }

  unbind() {
    this.$container.off(`.${NAMESPACE}`);
  }

  checkboxes() {
    return this.$container.find(this.options.checkbox);
  }

  findCheckbox(id) {
    return this.checkboxes().filter(`[value="${id}"], [data-ss-id="${id}"]`);
  }

  check(id) {
    this.findCheckbox(id).prop('checked', true)
  }

  uncheck(id) {
    this.findCheckbox(id).prop('checked', false)
  }

  clear() {
    this.checkboxes().prop('checked', false);
  }

  exeeded() {
    if (this.options.maxSelect) {
      let count = this.instance.listview.items().length;
      if (count >= this.options.maxSelect) {
        return true;
      }
    }
    return false;
  }
}