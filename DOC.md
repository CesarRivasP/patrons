Patrones de diseño
Los patrones que aplicamos son utiles si aplicamos las siguientes premisas:
1.- Cumple con un objetivo
2.- Es útil
3.- Aplicación amplia

Si no cumple con estas 3 reglas, nos encontramos con un anti-patron.

Exiten 3 tipos de patrones, segun Addy Osmani:
- Creacionales: son patrones que nos van a ayudar a crear objetos, e instancias de objetos.
  * Cuando se orienta a la creacion de objetos, con propiedades y metodos.  

  * Patron constructor
    Se basa en que usando la palabra reservada 'new' antes de una funcion o una clase, nosotros podemos crear nuevas instancias de estos objetos, las cuales esas propiedades van a ser copiadas en esta nueva instancia. Se copian tanto las propiedades como los metodos.

  * Patron constructor con prototipos
    Tiene como ventaja que todos los metodos o propiedades que nosotros asignemos al prototipo no van a ser copiadas a cada una de las instancias estos nuevos objetos, esto quiere decir, que al generar instancias distintas de nuevos objetos, al llamar al prototipo o a un metodo del prototipo, este va a ser compartido a lo largo de todas las instancias. Teniendo en cuenta eso, se puede establecer que si se modifica el prototypo del objeto 1, tambien se va a modificar el prototipo del objeto 2 y 3.
    Como ventaja se usa menos espacio en memoria. Pero como desventaja es que al modificar un prototipos, se van a modificar los prototipos para todas las instancias.

  * Patron Modulo
    Se encuentra basado en los objetos literales de javascript, asi que cada vez que se definen objetos literales en javascript, nosotros vamos a estar definiendo en si un modulo.

  * Patron Modulo Revelador
    A diferencia del patron anterior, tiene una api publica y otra privada, cosa que no pasa en el patron modulo, donde toda la api es publica. Este patron nos proporciona la ventaja de que no se va a tener que utilizar siempre la sintaxis de objetos literales para definir un modulo, sino que se van a poder definir funciones para poder crear nuestro modulo o se van a poder utilizar los ifis?¿

  * Patron Prototipo
    Esta basado en que se puede tomar un objeto que ya se encuentra definido, y en base a ese objeto vamos a poder empezar a generar prototipos para otros objetos, de esta manera, eliminando la duplicidad de codigo.

- Estructura: nos va a proporcionar una interfaz sencilla o una forma de poder comunicar dos estructuras distintas de una manera mas simple.
  * Patron Mixin
    Nos va a ayudar a tomar una clase que ya existe, y empezar a agregarle mas funcionalidades sin necesidad de alterar la clase, esto quiere decir que todas las instancias que se generen de esta clase van a seguir siendo instancias de esta misma clase.
  * Patron decorador
    Este toma todas las instancias de una clase y les va agregando nuevas funcionalidades a esta.
  * Patron Facade
    Se utiliza cuando queremos simplificar el llamado a una funcion
  * Patron Adaptador
    Parte de que cuando se tiene una clase o una implementacion de una libreria que hayamos construido, pero tenemos problemas basados en que su api o los metodos que queremos utilizar para poder acceder a esta, y queremos actualizar esa libreria.
- Comportamiento: Nos van a ayudar a desacoplar nuestro codigo de manera que pueda ser mas facil mantenerlo.
  * Patron observador (publish/subscribe)
    Consta de dos partes, la que publica y el que se subscribe. Estos dos objetos pueden interactuar entre si, para poder escuchar las modificaciones de uno a medida que estas se van realizando, esta modificacion va a ser despachada o va a estar siendo escuchada por el otro objeto. Ejemplo de esto: AddEventListeners.
  * Patron Mediador
    Funciona de una manera similar al patron observador, con la diferencia de que en lugar de tener dos objetos escuchandose mutuamente, esa accion se saca y se pasa a otro objeto que hace la funcion de mediador. Todos los objetos en lugar de estar interactuando entre ellos cuando quieran publicar o suscribirse a eventos, estos lo que haran es suscribirse al mediador. El mediador sera el encargado de poder despachar estos objetos. Ejemplo: librerias conocidas que usan este patron: REDUX
  * Patron Comando
    Nos proporciona una interfaz unificada para que nosotros podamos unificar los metodos de algun objeto en particular. De esta manera, en lugar de llamar a un metodo del objeto, lo que se hara es llamar a una interfaz en donde se le indicara que metodo o funcion queremos usar seguido de los argumentos que le vamos a pasar.
  * Patron Cadena de Responsabilidad
    Se basa en que nosotros vamos a encapsular un dato, y se le van a ir agregando metodos a este para poder ir alterando el valor que este contiene. jquery o lodash son los mejores ejemplos de este patron
  * Patron Iterador
    Mediante una funcion, objeto o clase vamos a poder acceder a dos metodos, a uno de next y otro de value. A su vez, tambien vamos a poder saber si hemos terminado de iterar una coleccion.
- Otros Patrones
  * Patron IIFE (INMEDIATE INVOKED FUNCTION EXPRESSION)
    Es una expresion de funcion la cual es ejecutada inmediatamente al momento de definirla. Tiene como ventaja que nos va a ayudar a poder definir el patron modulo revelador. Tambien nos va a ayudar a con los nombres de la variables para que estas queden solamente en el alcance de la funcion que nosotros hemos definido
  * Patron Inyeccion de dependencias (Inversion de control)
    Se base en dos cosas:
      * Entregarle el control de los metodos que se van a ejecutar a una libreria que nosotros le vamos a inyectar, que no sabemos que es, es completamente transparente.
      * Elimina los require que nosotros vamos a ver en el comienzo de nuestra app

### Clousures
Si bien no es un patron, es una funcionalidad que tiene javascript la cual nos va a permitir reutilizar codigo.

### Programacion Tacita o Point Free
Es un estilo de programacion es donde nos olvidamos de los argumentos de una funcion. Es una tecnica utilizada cuando se quiere realizar composicion o cuando se quiere eliminar codigo boilerplate o cuando se quiere ordenar mejor el codigo

### Currying
Es la tecnica que transforma todas las funciones en funciones "unary" o "unarias". Basicamente son funciones que solo reciben un argumento.