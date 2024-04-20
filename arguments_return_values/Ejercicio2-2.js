function calc(num1, num2) {
    return num1 + num2;
};

var returned = calc(10, 8, 10);
console.log(returned);

//Aquí nos sigue devolviendo 18, ya que los 2 valores para num1 y num2 son 10 y 8.
//El segundo 10 no consta dentro de nuestros parámetros, por lo que no es tomado en cuenta.