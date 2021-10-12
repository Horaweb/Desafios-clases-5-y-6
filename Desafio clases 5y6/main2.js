let prodId = 0;
class Producto{
    constructor(tipo, marca, precio, talle, año, color){
        this.tipo =  tipo;
        this.marca =  marca;
        this.precio =  precio;
        this.talle = talle;
        this.año =  año;
        this.color = color;
        this.id = prodId;
        }  
        showDetail(){
            return "Tipo de producto: " + this.tipo + ", Marca: " + this.marca +  ", Precio: " + this.precio + ", Talle: " + this.talle + ", Año: " + this.año + ", Color: " + this.color
        }
}
let productos = [];
for(let i = 0; i <= 4; i++){
    let prod = prompt("Ingrese el tipo de producto")
    let prodmarca = prompt("Ingrese la marca del producto")
    let prodprecio = prompt("Ingrese el precio del producto")
    let prodtalle = prompt("Ingrese el talle del producto")
    let prodaño = prompt("Ingrese el año del producto")
    let prodcolor = prompt("Ingrese el color del producto")
    productos.push(new Producto(prod, prodmarca, prodprecio, prodtalle, prodaño, prodcolor))
    prodId = prodId +1
}
for(let i = 0; i < productos.length; i++){
    console.log(productos[i].showDetail())
}