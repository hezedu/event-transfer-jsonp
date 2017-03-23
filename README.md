# eventTransferJsonp
It used event to transfer data, fix the callback name. good for http cache.
## install
`npm install event-transfer-jsonp`

The expose name is `eventTransferJsonp`. support AMD,commonjs.
## API

### eventTransferJsonp(url, callback)

## example
```js
eventTransferJsonp('/someurl', function(err, data){
  if(err){ //the err just a event
    return console.log('error', err);
  }
  console.log(data);
})
```
## Don't support IE!
## QA
Can i modify the callbackName ?

No
