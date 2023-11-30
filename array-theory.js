const names =['Areg',"Ani","Grisha","Rima"]

// names.push("Nane")//avelacnum e element arrayin verjic
// names.unshift("Nane")// avelacnum e element arrayin arjevic


// const firstName= names.shift()// hanum e arrayi arajin elementy
// const name= names.pop()// heracnum e arrayi  verjin elementy  ev avelacnum e lriv urish popoxakani mej
// console.log("Names", names,name);


//console.log(names.reverse());//veradarcnum e array hetevic  hiny jnjelov
// const reversed = names.toReversed()// veradarcnum e array hetevic hiny pahpanum e

// const letters =['e','c','d','b','a']
// const sorted = letters.toSorted() //sortavorum e array hiny pahpanume
// console.log(letters);

// console.log(names.splice(0,2));
// console.log(names.toSpliced(0,2));
// console.log(names);

// const greatWoman ="Ani"
// const index = names.indexOf(greatWoman)
//console.log(index);
// const newNames = names.with(index,"Ani Nveri")

// names[index]="Ani Nveri"
// console.log(names[index]);
//console.log(names);
//console.log(newNames);

//  const capitalNames=names.map(function
//     (name,index){
// if(index=== 1){
//     return "Ani Nveri"
// }
// return name
// })
// console.log(capitalNames);

// console.log(names.includes("Areg"));
// console.log(names.indexOf("Areg") !== -1);

const people = [
    {name: 'Areg',budget: 4200},
    {name: 'Ani',budget: 10000},
    {name: 'Grisha',budget: 25000},
    {name: 'Rima',budget: 20000}
]

// const finded = people.find((p)=>p.budget===20000)
// let findedPerson
// for (let person of people) {
//     if(person.budget===20000){
//         finderPerson = person
//     }
// }

// const findedPerson= people.find(function (person) {
//     return person.budget === 20000
// })

// const finded= people.findIndex(function (person) {
//     return person.budget === 20000
// })
// console.log(people.with(finded,42));

// let sumBudjet = 0
// const filtered = people.filter(function(p) {
//     return p.budget > 5000
// })
// console.log(filtered);
// filtered.forEach(function(p) {
//     sumBudjet += p.budget
// })
// console.log(sumBudjet);

// const byBudget = (p) => p.budget > 5000
// const pickBudget = (p) => p.budget

// const sumBudjet = people.filter(byBudget).map(pickBudget).
// reduce((acc,p) => acc + p,0)


// console.log(sumBudjet)

const string = "Barev, vonc es?"
const reversed = string.split("").toReversed().join('')
console.log(reversed);