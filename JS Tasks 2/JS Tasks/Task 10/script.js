/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
import { one, two, three, four, five } from "./numbers.js";

let a = composition(one, four);
let b = division(four, two);
let c = subtraction(three, two);
let d = multiplication(five, two);
import { composition } from "./composition.js";
import { division } from "./division.js";
import { multiplication } from "./multiplication.js";
import { subtraction } from "./subtraction.js";
console.log(a);
console.log(b);
console.log(c);
console.log(d);
