export default class Categoria 
{
    constructor(nombre) 
    {
        // Obtener el ultimo id desde localStorage o usar 0
        const ultimoId = parseInt(localStorage.getItem("ultimoIdCategoria")) || 0;
        this.id = ultimoId + 1;
        localStorage.setItem("ultimoIdCategoria", this.id);
        this.nombre = nombre;
    }
}
