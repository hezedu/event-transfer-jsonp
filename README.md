# dw_jsonp
It used event to transfer data, good for http cache.
##install
`npm install dw_jsonp`
#Api
just one:

###dw_jsonp(url, callback)

##example
```js
dw_jsonp('/someurl', function(data){
  console.log(data);
})
```
support AMD , commonjs.
# Not support IE
