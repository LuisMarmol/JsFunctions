function calc() {
    console.log('Inside function!');
};

var anotherFn = calc();
anotherFn();

//Aquí nos aparece un error, debido a que anotherFn, al ser igual que la función calc, su resultado nos tira 'Inside function!'.
//Pero a la vez estamos intentando asignar el resultado de la primera función, a una variable que NO es una función.