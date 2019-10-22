const NAMESPACE = 'simple-selstore';

describe('jquery-simple-selstore', () => {
  beforeEach(() => {
    document.body.innerHTML = __html__['index.html'];
    eval($('script').text());
  });

  describe('basic', () => {
    let $selector;
    let $listview;

    beforeEach(() => {
      $selector = $('#basic_selector');
      $listview = $('#basic_listview');
      $clear = $('#basic_clear');
    });

    it('updates listview with checked elements', () => {
      $selector.find(':checkbox[value="1"]').click();
      $selector.find(':checkbox[value="2"]').click();
      expect($listview.find(`.${NAMESPACE}-item`).length).toEqual(2);

      $selector.find(':checkbox[value="1"]').click();
      expect($listview.find(`.${NAMESPACE}-item`).length).toEqual(1);
    });

    it('clears checked elements', () => {
      $clear.click();
      expect($listview.find(`.${NAMESPACE}-item`).length).toEqual(0);
    });
  });

  describe('max', () => {
    let $selector;
    let $listview;

    beforeEach(() => {
      $selector = $('#max_selector');
      $listview = $('#max_listview');
    });

    it('limits with max count', () => {
      $selector.find(':checkbox[value="1"]').click();
      $selector.find(':checkbox[value="2"]').click();
      $selector.find(':checkbox[value="3"]').click();
      expect($listview.find(`.${NAMESPACE}-item`).length).toEqual(2);
    });
  });
});
