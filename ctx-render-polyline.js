module.exports = renderPolyline;

function renderPolyline(ctx, a) {
  if (!a) {
    return;
  }

  var l = a.length;
  var a0 = a[0];

  if (!a0) {
    return;
  }

  ctx.moveTo(a0[0], a0[1]);

  for (var i=1; i<l; i++) {
    var c = a[i]
    c && ctx.lineTo(c[0], c[1]);
  }
}
