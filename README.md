# ctx-render-polyline

render line segments using html5 2d canvas

## install

`npm install ctx-render-polyline`

## use

```javascript
var center = require('ctx-translate-center');
var poly = require('./ctx-render-polyline')
var ctx = document.createElement('canvas').getContext('2d');

document.body.appendChild(ctx.canvas);

ctx.fillStyle = "black";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

center(ctx);

ctx.beginPath();

  // wound CCW
  poly(ctx, [
    [-50, -50],
    [-50, 50],
    [50, 50],
  ]);

  // wound CW
  poly(ctx, [
    [-20, -20],
    [20, 20],
    [-20, 20],
  ]);

  ctx.fillStyle = "orange";
  ctx.fill()
```

results in ![ctx-render-polyline](http://i.imgur.com/JW66SGr.png)

## license

[MIT](LICENSE.txt)
