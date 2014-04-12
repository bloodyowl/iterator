var tape = require("tape")
  , iterator = require("../")

tape("iterator", function(test){
  var array = [1,2,3,4,5,6]
    , next = iterator(array)
  test.equal(next(), 1)
  test.equal(next.lastItem, 1)
  test.equal(next(), 2)
  test.equal(next.lastItem, 2)
  test.equal(next(), 3)
  test.equal(next.lastItem, 3)
  test.equal(next(), 4)
  test.equal(next.lastItem, 4)
  test.equal(next(), 5)
  test.equal(next.lastItem, 5)
  test.equal(next(), 6)
  test.equal(next.lastItem, 6)
  test.equal(next(), null)
  test.equal(next.lastItem, 6)
  test.throws(function(){
    next()
  }, "throws when out of range")
  test.equal(next.lastItem, 6)
  test.end()

})
