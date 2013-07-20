module.exports = function (elements) {

  elements.prototype.filter = function (callback, context) {
    var result = [];
    var list = this.list;
    var length = list.length;
    var element;
    var i;
    var test;
    
    for (i = 0; i < length; i += 1) {
      element = list[i];
      test = callback.call(context, element, i);
      if (test) {
        result.push(element);
      }
    }
    
    return result;
  };

  return elements;
};
