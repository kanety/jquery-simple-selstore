describe('jquery-simple-selstore', () => {
  it('config', () => {
    let defaults = $.SimpleSelstore.getDefaults();
    expect(defaults.maxSelect).toEqual(null);

    defaults = $.SimpleSelstore.setDefaults({maxSelect: 5});
    expect(defaults.maxSelect).toEqual(5);
  });
});
