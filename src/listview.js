import $ from 'jquery';
import { NAMESPACE } from './consts';

export default class Listview {
  constructor(elem, instance, options) {
    this.instance = instance;
    this.options = options;

    this.$container = $(elem);
    this.$container.addClass(`${NAMESPACE}-listview`);
  }

  bind() {
    this.$container.on(`click.${NAMESPACE}`, '.ss-remove', (e) => {
      this.instance.unselect($(e.target).parent().data('ss-id'));
      e.stopPropagation();
    });
  }

  unbind() {
    this.$container.off(`.${NAMESPACE}`);
  }

  container() {
    return this.$container;
  }

  items() {
    return this.$container.find('.ss-item');
  }

  findItem(id) {
    return this.items().filter(`[data-ss-id="${id}"]`);
  }

  add(id, title) {
    let $list = $('<span class="ss-item">').attr('data-ss-id', id).attr('data-ss-title', title);
    $list.append($('<span class="ss-title">').text(title));
    $list.append($('<span class="ss-remove">'));
    $list.append($('<input type="hidden">').attr('name', this.options.listname).val(id));
    this.$container.append($list);
  }

  remove(id) {
    this.findItem(id).remove();
  }

  clear() {
    this.$container.html('');
  }
}
