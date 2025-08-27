export default class Tarea 
{
    /**
     * @param {string} nombre - Nombre de la tarea
     * @param {boolean} estado - true = completado, false = no completado
     * @param {Categoria} categoria - Objeto de tipo Categoria
     */

    constructor(nombre, categoria, estado = false)
    {
        const ultimoId = parseInt(localStorage.getItem("ultimoIdTarea")) || 0;
        this.id = ultimoId + 1;
        localStorage.setItem("ultimoIdTarea", this.id);
        this.nombre = nombre;
        this.estado = estado;
        this.categoria = categoria;
    }
}
