# jquery-simple-selstore

A jquery plugin for multiple selection that stores selected items in storage.

## Dependencies

* jquery

## Installation

Install from npm:

    $ npm install @kanety/jquery-simple-selstore --save

## Usage

Build html as follows:

```html
<div id="selector">
  <div><label><input type="checkbox" value="1">title1</label></div>
  <div><label><input type="checkbox" value="2">title2</label></div>
</div>
<div id="listview"></div>
```

Then run:

```javascript
$('#selector').simpleSelstore('#listview', {
  storeKey: 'YOUR_KEY'
});
```

Set max selection:

```javascript
$('#selector').simpleSelstore('#listview', {
  storeKey: 'YOUR_KEY',
  maxSelect: 2
});
```

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
