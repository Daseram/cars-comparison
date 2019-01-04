export class Car {
    public foto: string;
    public modelo: string;
    public marca: string;
    public precio: number;
    public anio: string;
    public id: string;

    constructor(foto: string, modelo: string, marca: string, precio: number, anio: string, id: string) {
        this.foto = foto;
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
        this.anio = anio;
        this.id = id;
    }
}
