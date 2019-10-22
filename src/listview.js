import $ from 'jquery';
import { NAMESPACE } from './consts';

export default class Listview {
  constructor(elem, instance, options) {
    this.instance = instance;
    this.options = options;

    this.$container = $(elem);

    this.init();
  }

  init() {
    this.$container.addClass(`${NAMESPACE}-listview`);

    this.unbind();
    this.bind();
  }

  destroy() {
    this.$container.removeClass(`${NAMESPACE}-listview`);

    this.unbind();
  }

  bind() {
    this.$container.on(`click.${NAMESPACE}`, `.${NAMESPACE}-remove`, (e) => {
      this.instance.unselect($(e.target).parent().data(`${NAMESPACE}-id`));
      e.stopPropagation();
    });
  }

  unbind() {
    this.$container.off(`.${NAMESPACE}`);
  }

  items() {
    return this.$container.find(`.${NAMESPACE}-item`);
  }

  findItem(id) {
    return this.items().filter(`[data-${NAMESPACE}-id="${id}"]`);
  }

  add(id, title) {
    let $list = $('<span>').addClass(`${NAMESPACE}-item`).attr(`data-${NAMESPACE}-id`, id).attr(`data-${NAMESPACE}-title`, title);
    $list.append($('<span>').addClass(`${NAMESPACE}-title`).text(title));
    $list.append($('<span>').addClass(`${NAMESPACE}-remove`));
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
