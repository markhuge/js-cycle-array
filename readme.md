# cycle-array [![Build Status](https://travis-ci.org/markhuge/js-cycle-array.svg)](https://travis-ci.org/markhuge/js-cycle-array)
> Cycle through array values

# Use Case

I wanted to create a component that rotated a set of images, looping back to the start.

```JS
var Cycle = require('cycle-array'),
    cycle = new Cycle(),
    image = [ '/img1.png', '/img2.png', '/img3.png' ]

myComponent.on('interval', function (state) { 
  state.set('image.url', cycle(image)); // sets image.url to a new image on each call
});
```

Each call to `cycle()` will return the next array value, looping back to index 0.

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install cycle-array --save
```

# Notes

I kind of hate the Cycle/new Cycle() pattern, but it was the quickest way to keep multiple
instances from stomping on one another. I'm going to revist this with ES6 syntax for fun later.

## License

MIT
