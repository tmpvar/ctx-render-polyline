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
