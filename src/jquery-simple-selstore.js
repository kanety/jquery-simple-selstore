import $ from 'jquery';

import { NAMESPACE } from './consts';
import SimpleSelstore from './simple-selstore';
import './jquery-simple-selstore.scss';

$.fn.simpleSelstore = function($target, options) {
  return this.each((i, elem) => {
    let $elem = $(elem);
    if (!$elem.data(NAMESPACE)) {
      let ss = new SimpleSelstore($elem, $target, options);
      $elem.data(NAMESPACE, ss);
    }
  });
};

$.SimpleSelstore = SimpleSelstore;
