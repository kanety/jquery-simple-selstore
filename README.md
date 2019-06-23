# jquery-simple-selstore

A jquery plugin for multiple selection that stores selected items in web storage.

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
$('#listview').simpleSelstore('#selector');
```

### Options

Store selected elements in the web storage:

```javascript
$('#listview').simpleSelstore('#selector', {
  store: 'session',  // or 'local'
  storeKey: 'YOUR_STORE_KEY'
});
```

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
