function calc() {
    var stringVar = 'Inside function!';
    return stringVar;
};

var returned = calc();
console.log(returned);

//Aquí podemos ver cómo sigue saliendo todo perfectamente bien, sin errores, ya que, a pesar de usar una variable dentro de la función.
//Al final de la misma, le estamos diciendo que nos retorne dicha variable.