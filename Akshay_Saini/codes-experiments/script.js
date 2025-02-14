var x = 10;
console.log(x);
console.log(window.x);
console.log(this.x);

function foo() {
  var a = 20;
  console.log(a);
  console.log(window.a);
}
foo();
