function calc(num1, num2) {
    return num1 + num2;
};

var returned = calc();
console.log(returned);

//En este caso nos retorna NaN, ya que no estamos dando argumentos específicos.
//Ya que num1 y num2 pueden ser cualquier número, ya sean decimales o enteros