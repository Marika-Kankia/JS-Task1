
//1. 

let a=17; 
let b='cat'; 
let c=false;
let d=null;
let e;
console.log(typeof a); //number
console.log(typeof b); //string
console.log(typeof c); //boolean
console.log(typeof d); //object
console.log(typeof e); //undefined


//2. 
let friends=[
    {
        name:'maka',
        age:15
    },   
    {
        name:'Tika',
        age:20
    },
    {
        name:'lasha',
        age:22
    },
    {
        name:'ani',
        age:25
    },
    {
        name:'elene',
        age:33
    }
];
console.log(friends[0]) //{name: "maka", age: 15}
console.log(friends[1].age) //20

//3.


let person={
    firstname:'Jason',
    lastname:'Smith',
    nicknames:['Jay','Jay-jay','Jade'],
    age:25,
    monthlyIncome:'500',

}


if(person.age>=18){
    console.log('is adult')
}
else{
    console.log('is not adult')
}

let getAnnualIncome = person.monthlyIncome*12;
console.log('your annual income is ' + getAnnualIncome)
