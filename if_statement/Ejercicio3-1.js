var condition = false;
var anotherCondition = false;

if(condition) {
    console.log('Executed!');
}
else if(anotherCondition) {
    console.log('Still Executed!');
}
else {
    console.log('Not Executed!');
}

//Aquí podemos ver cómo no se cumple el if, ni el else if como verdaderos, por lo que el compilador se va por el else.