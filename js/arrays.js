function Perro (nombre, edad,ubicacion){
    this.nombre = nombre;
    this.edad = edad;
    this.ubicacion = ubicacion;
}
let perro1 = new Perro("chucho",5,"zona sur");
console.log(perro1);
let perro2 = new Perro("pompi",3,"zona norte");
console.log(perro2);

let animal = [perro1,perro2];
console.log(animal);


