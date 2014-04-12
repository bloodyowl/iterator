module.exports = function(array){
  var index = -1

  function iterator(){
    ++index
    var length = array.length
    if(index == length) {
      return null
    }
    if(index > length) {
      throw new RangeError()
    }
    return iterator.lastItem = array[index]
  }

  return iterator
}
