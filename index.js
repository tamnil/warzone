const local = require ('./local');

const exportedFunctions = ()=>{

    return this;
};

const add = x => y => x + y;
const subtract = x => y => x - y;


add.__proto__.subtract = subtract
this.add = add;

Number.__proto__.x = (x) => x * 3
const testF = x => {
    x.four = (y) => y * 4 
    return x
}
a = {}
// a = 1
a.b = [1,2,3,6,5,4]
Object.assign(a,a.b)
console.log(Array(a))

console.log(testF(10).four)


const sumOne = () => this.add(1);

this.add3 = x =>  this.add(3)(x); 

var teste12 = {}

teste12.__proto__.a = x => x * 3;

a = '1';
a.__proto__.teste = 2
b = 2;
a.b = 3
console.log('ab',a.__proto__,a.teste)

console.log(teste12.a(2))


this.sumOne = sumOne;
this.add7 = x => {
    let ret = this.add(7)(x);
    ret.__proto__.x = 'asdf'
    console.log('ret',ret, this.add3(3))
    return    ret;
}

console.log('add7',this.add7(2).x)
console.log('add7',this.add3(2))




var a = Array;
a.prototype.xmap = () => 1;


// b = new Array(10);
// x = new Number();
Number.prototype.teste = () => 3;



module.exports = this;


