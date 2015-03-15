# sax
Create saxophone fingering diagrams with js. See an example here: http://fleidloff.github.io/sax/examples/index.html
## api
create a sax fingerings object in a specific element with id sax-container and set note to c5
```
fingerings.ready(function() {
	sax = fingerings.sax.build("sax-container");
	sax.note("c5");
});
```
fingerings.ready ensures that raphael and the dom is fully loaded. fingerings.sax.build initializes the saxophone fingerings object.

If you want to reassign notes to different fingerings, simply do it like this:
```
sax.note("bb4", ["left-index", "right-index"]);
```
You can also simply open / close keys on the saxophone without assigning notes. Do this with sax.release or sax.press. Those methods can be chained.
```
sax.release("all").press("left-index").press("right-middle");
```
All available keys can be seen with 
```
sax.buttons();
```

## dependencies
sax fingerings requires teoria.js and Raphael.js
## how to build
simply run grunt build to build the library. Alternatively, run grunt dev to also start a test server that serves the example.
