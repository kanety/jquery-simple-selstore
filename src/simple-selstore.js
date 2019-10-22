import $ from 'jquery';
import Store from '@kanety/js-store';

import './simple-selstore.scss';
import { NAMESPACE } from './consts';
import Listview from './listview';
import Selector from './selector';

const DEFAULTS = {
  checkbox: 'input:checkbox',
  listname: 'items[]',
  maxSelect: null,
  maxAlert: null,
  store: null,
  storeKey: null
};

export default class SimpleSelstore {
  constructor(selector, listview, options = {}) {
    this.options = $.extend(true, {}, DEFAULTS, options);

    this.selector = new Selector(selector, this, this.options);
    this.listview = new Listview(listview, this, this.options);

    if (this.options.store && this.options.storeKey) {
      this.store = new Store({
        type: this.options.store,
        key: this.options.storeKey
      });
    }

    this.load();
  }

  destroy() {
    this.selector.destroy();
    this.listview.destroy();
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
    if (!this.store) return;

    let items = this.store.get();
    if (!items) return;
    
    items.forEach((item) => {
      this.select(item.id, item.title);
    });
  }

  save() {
    if (!this.store) return;

    let items = this.listview.items().map((i, item) => {
      let $item = $(item);
      return { id: $item.data('ss-id'), title: $item.data('ss-title') };
    }).get();

    this.store.set(items);
  }

  clear() {
    this.selector.clear();
    this.listview.clear();
    if (this.store) this.store.remove();
  }

  static getDefaults() {
    return DEFAULTS;
  }

  static setDefaults(options) {
    return $.extend(true, DEFAULTS, options);
  }
}
