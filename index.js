const local = require ('./local');

const exportedFunctions = ()=>{

return this;
};

const add = x => y => x + y;
const subtract = x => y => x - y;



this.add = add;

const sumOne = () => this.add(1);

this.sumOne = sumOne;
this.add7 = x => this.add(7);
this.add3 = x =>  this.add(3); 




var a = Array;
    a.prototype.xmap = () => 1;


// b = new Array(10);
// x = new Number();
Number.prototype.teste = () => 3;



module.exports = this;


