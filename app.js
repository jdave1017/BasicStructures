var age = 15;
var pi = 3.1416;
var date = new Date();
var computeArea= function(l,w){
    return l*w;    

};  

var space = "\n";

var name="John Joseph Cero";
console.log('Age:' + age);
console.log('Pi:'+ pi.toFixed(2));
console.log('Date:' + date);
console.log('Name: ' + name);
console.log(computeArea(10,60));
console.log(space);
var x = 1;
var y = null;
var none= undefined;

if(x)
console.log('x is true');

if(!y)
console.log('y is false');

if(!none)
console.log('undifined');
console.log(space);
//=======JSON JavaScript Object Notation;

var jsonObject ={
    name: 'Json',
    lastname:'Calope',
    address: 'Catigbian',
};

console.log(jsonObject.name);
console.log(jsonObject.address);
console.log(jsonObject.address);
console.log(jsonObject);
console.log(space);