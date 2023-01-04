// Good Luck! You got this 💪🏾
// Write your code here.

// FUNCTIONS //

function describecountry(country,population,capitalCity){
    console.log(`${country} has ${population} million people and its captial city is ${capitalCity}`)
}
describecountry("Somaliland",3.5,"Hargeisa")
describecountry("Ethiopia",117.9,"Addis ababa")
describecountry("USA",331.9,"Washington")
describecountry("Canada",38.25,"Ottawa")

function percentageOfWorld1(country,population,percentage){
     console.log(`${country} has ${population} people, so it's about ${percentage} of the world population `)
}
percentageOfWorld1("India","1.393 billion","17.7%")
percentageOfWorld1("America","331.9 million","4.25%")
percentageOfWorld1("Indonesia","276.4 million","3.51%")

//ARRAYS//
let population = ["59,000,000","67,500,000","55,980,000","66,460,000" ]
console.log(population)

let neighbours = ["France, Belgium, the Netherlands, Germany, Portugal, Spain, Denmark, Norway, Sweden, the Faroe Islands and Iceland"]

// FOR LOOPS //

for (let n =0; n<9; n++ ){
    console.log(`${neighbours[n]}`)
}
for (let n =9; n>0; n-- ){
    console.log(`${neighbours[n]}`)
}
// WHILE LOOP //

let p = 1
while(p <=5){
    console.log(`${population}`)
    p++
}
let n = 5
while(n >0){
    console.log(`${neighbours}`)
    n--
}