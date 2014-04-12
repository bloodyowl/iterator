# iterator

[![browser support](https://ci.testling.com/bloodyowl/iterator.png)
](https://ci.testling.com/bloodyowl/iterator)

![https://travis-ci.org/bloodyowl/iterator](https://travis-ci.org/bloodyowl/iterator.svg)


## install

```sh
$ npm install bloody-iterator
```

## require

```
var iterator = require("bloody-iterator")
```

## api

### `iterator() -> next`

returns a function that returns the next element
in the array at each call.

when the `next()` is done iterating, it returns `null`.

calls after the `end` will throw a `RangeError`.
