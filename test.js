var test = require('tape');
var poly = require('./ctx-render-polyline');

test('single line', function(t) {
  var calls = 0;
  var ctx = {
    moveTo : function(x, y) {
      calls++;
      t.equal(x, 0, 'x is 0');
      t.equal(y, 1, 'y is 1');
    },
    lineTo : function(x, y) {
      calls++;
      t.equal(x, 100, 'x is 100');
      t.equal(y, 50, 'y is 50');
    }
  };

  poly(ctx, [
    [0, 1],
    [100, 50]
  ]);

  t.equal(calls, 2, 'two canvas ops');
  t.end();
});

test('triangle', function(t) {
  var calls = 0;
  var ctx = {
    moveTo : function(x, y) {
      calls++;
      t.equal(x, 0, 'x is 0');
      t.equal(y, 1, 'y is 1');
    },
    lineTo : function(x, y) {
      calls++;
      t.equal(y, 50, 'y is 50');
    }
  };

  poly(ctx, [
    [0, 1],
    [100, 50],
    [0, 50],
  ]);

  t.end();
});
