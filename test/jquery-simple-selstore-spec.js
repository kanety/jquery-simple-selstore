describe('jquery-simple-selstore', function() {
  beforeEach(function() {
    document.body.innerHTML = __html__['index.html'];
  });

  it('has basic use', function() {
    var $selector = $('#basic_selector');
    var $listview = $('#basic_listview');
    $selector.simpleSelstore($listview, {
      storeKey: 'basic'
    });

    $selector.find('input:checkbox[value="1"]').click();
    $selector.find('input:checkbox[value="2"]').click();
    expect($listview.find('.ss-item').length).toEqual(2);

    $selector.find('input:checkbox[value="1"]').click();
    expect($listview.find('.ss-item').length).toEqual(1);

    $listview.find('.ss-item[data-ss-id="2"] .ss-remove').click();
    expect($listview.find('.ss-item').length).toEqual(0);

    $selector.data('simple-selstore').clear();
  });

  it('sets max selection', function() {
    var $selector = $('#max_selector');
    var $listview = $('#max_listview');
    $selector.simpleSelstore($listview, {
      storeKey: 'max',
      maxSelect: 2
    });

    $selector.find('input:checkbox[value="1"]').click();
    $selector.find('input:checkbox[value="2"]').click();
    $selector.find('input:checkbox[value="3"]').click();
    expect($listview.find('.ss-item').length).toEqual(2);
  });
});
