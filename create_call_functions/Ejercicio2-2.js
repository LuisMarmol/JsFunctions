function calc() {
    console.log('Inside function!');
};

var anotherFn = calc;
anotherFn();

//En este ejercicio sigue apareciendo que el resultado de la función es 'Inside function!'
//Debido a que estamos diciendo que anotherFn sea igual a la función calc, es decir, que sea lo mismo.