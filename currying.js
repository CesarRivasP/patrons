//Esta es una forma que no es la mejor cuando se quiere hacer composicion o algun tipo de patron funcional

const suma = (a, b) => a + b;

suma(1,5);


/* Transformacion de funcion a patron currying */

const sumaCurrying = (a) => (b) => a + b;
//cuando termina de recibir todos los argumentos (sumaCurrying(), suma1()) es que esta funcion se va a ejecutar
const suma1 = sumaCurrying(1); //primer agumento

suma1(5); //segundo agumento