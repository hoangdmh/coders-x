/**
 * Tính số ms chênh lệch giữa date b và date a
 */

function diffMs(a, b) {
  var a = new Date(a);
  var b = new Date(b);
  return b.getTime() - a.getTime();
}