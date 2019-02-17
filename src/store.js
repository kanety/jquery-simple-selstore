export default class Store {
  constructor(instance, options = {}) {
    this.instance = instance
    this.key = options.storeKey;
    this.storage = Store.storage(options.storeType);
  }

  save(items) {
    Store.saveData(this.storage, this.key, items);
  }

  load() {
    return Store.loadData(this.storage, this.key);
  }

  clear() {
    this.storage.removeItem(this.key);
  }

  static storage(type) {
    if (type == 'local') {
      return window.localStorage;
    } else {
      return window.sessionStorage;
    }
  }

  static saveData(storage, key, data) {
    let json = JSON.stringify(data);
    storage.setItem(key, json);
  }

  static loadData(storage, key) {
    let json = storage.getItem(key);
    if (!json) {
      return [];
    } else {
      return JSON.parse(json);
    }
  }
}
