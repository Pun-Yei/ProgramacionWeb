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

    /**
     * Marca la tarea como completada
     */
    completar()
    {
        this.estado = true;

        const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
        const index = tareas.findIndex(t => t.id === this.id);

        if (index !== -1)
        {
            tareas[index].estado = true;
            localStorage.setItem("tareas", JSON.stringify(tareas));
        }
    }

    /**
     * Elimina la tarea del localStorage
     */
    eliminar()
    {
        let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
        tareas = tareas.filter(t => t.id !== this.id);
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }
}
