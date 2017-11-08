var first = ['Anmol', 20];
var second= ['Kohli', 20];

var greet = function (name, age){
    console.log('Hi! ' + name + age );
}

greet(...first);
greet(...second);

var names = ['Mike', 'Andrew'];
var final = ['Andrew', ...names];

final.forEach(function(name){
    console.log('Hi '+ name);
});