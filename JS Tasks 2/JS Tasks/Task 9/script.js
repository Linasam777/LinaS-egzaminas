/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie{
constructor(title, director,budget){
    this.title = title
    this.director = director
    this.budget = budget
}

wasExpensive() {
    return Boolean(this.budged>100000000)
}

const firstMovie = new Movie("pirmas","D.T.",30000000)
 const secondMovie = new Movie("antras","M.M.",200000000)

console.log(firstMovie.wasExpensive())