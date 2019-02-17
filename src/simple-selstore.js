import $ from 'jquery';
import { NAMESPACE } from './consts';
import Listview from './listview';
import Selector from './selector';
import Store from './store';

const DEFAULTS = {
  checkbox: 'input:checkbox',
  listname: 'items[]',
  storeKey: NAMESPACE,
  storeType: 'session',
  maxSelect: null,
  maxAlert: null
};

export default class SimpleSelstore {
  constructor(selector, listview, options = {}) {
    this.options = $.extend(true, {}, DEFAULTS, options);

    this.selector = new Selector(selector, this, this.options);
    this.listview = new Listview(listview, this, this.options);
    this.store = new Store(this, this.options);

    this.load();
    this.bind();
  }
  
  bind() {
    this.selector.bind();
    this.listview.bind();
  }

  unbind() {
    this.selector.unbind();
    this.listview.unbind();
  }

  select(id, title) {
    this.selector.check(id);
    this.listview.add(id, title);
    this.save();
  }

  unselect(id) {
    this.selector.uncheck(id);
    this.listview.remove(id);
    this.save();
  }

  load() {
    let items = this.store.load();
    items.forEach((item) => {
      this.select(item.id, item.title);
    });
  }

  save() {
    let items = this.listview.items().map((i, item) => {
      let $item = $(item);
      return { id: $item.data('ss-id'), title: $item.data('ss-title') };
    }).get();

    this.store.save(items);
  }

  clear() {
    this.selector.clear();
    this.listview.clear();
    this.store.clear();
  }

  static getDefaults() {
    return DEFAULTS;
  }

  static setDefaults(options) {
    $.extend(true, DEFAULTS, options);
  }
}
