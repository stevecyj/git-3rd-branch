// for (var i = 3; i < 16; i++) {
//   for (var j = 1; j < 16; j++) {
//     let k = i * j;
//     console.log(i + "x" + j + "=" + k);
//   }
// }

let w;
let h;
function calBmi(w, h) {
  let num = parseFloat(w / Math.pow(h / 100, 2));
  console.log(num);
}
calBmi(70, 177);
