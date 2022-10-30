/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
let x;
let y;
//o-operatorius
function calculator(x, y, o) {
  switch (o) {
    case "+":
      return x + y;
      break;
    case "-":
      return x - y;
      break;
    case "*":
      return x * y;
      break;
    case "/":
      return x / y;
      break;
    default:
      return;
  }
}
let cal1 = calculator(5, 7, "+");
console.log(cal1);
let cal2 = calculator(9, 7, "-");
console.log(cal2);
let cal3 = calculator(3, 5, "*");
console.log(cal3);
let cal4 = calculator(8, 4, "/");
console.log(cal4);
