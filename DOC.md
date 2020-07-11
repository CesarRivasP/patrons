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


- Estructura: nos va a proporcionar una interfaz sencilla o una forma de poder comunicar dos estructuras distintas de una manera mas simple.
- Comportamiento: Nos van a ayudar a desacoplar nuestro codigo de manera que pueda ser mas facil mantenerlo.