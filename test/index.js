var test  = require('tape'),
    Cycle = require('../'),
    cycle = new Cycle(),
    list  = [ 'a','b','c'];

test('cycle through array', function (t) {
  t.plan(4);

  t.equal(cycle(list),'a') ;  
  t.equal(cycle(list),'b') ;  
  t.equal(cycle(list),'c') ;  
  t.equal(cycle(list),'a') ;  

});
