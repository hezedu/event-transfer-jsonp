# dw_jsonp
It used event to transfer data, good for http cache.
##install
`npm install dw_jsonp`
#Api
###dw_jsonp(url, callback)

##example
```js
dw_jsonp('/someurl', function(data){
  console.log(data);
})
```
support AMD , commonjs.
# Don't support IE
