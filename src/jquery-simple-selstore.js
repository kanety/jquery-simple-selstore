import $ from 'jquery';

import { NAMESPACE } from './consts';
import SimpleSelstore from './simple-selstore';

$.fn.simpleSelstore = function($target, options) {
  return this.each((i, elem) => {
    let $elem = $(elem);
    if ($elem.data(NAMESPACE)) $elem.data(NAMESPACE).destroy();
    $elem.data(NAMESPACE, new SimpleSelstore($elem, $target, options));
  });
};

$.SimpleSelstore = SimpleSelstore;
