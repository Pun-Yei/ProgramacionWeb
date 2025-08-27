/**
 * Marca la tarea como completada por su id dentro de la lista de tareas
 * @param {Tarea[]} listaTareas - Lista de objetos Tarea
 * @param {number} id - Id de la tarea a completar
 * @returns {Tarea[]} Lista de tareas actualizada
 */
export function completarTareaPorId(listaTareas, id)
{
    const tarea = listaTareas.find(t => t.id === id);

    if (tarea)
    {
        tarea.completar();
    }
    else
    {
        console.warn(`No se encontro tarea con id ${id}`);
    }

    return [...listaTareas];
}

/**
 * Elimina la tarea por su id dentro de la lista de tareas
 * @param {Tarea[]} listaTareas - Lista de objetos Tarea
 * @param {number} id - Id de la tarea a eliminar
 * @returns {Tarea[]} Lista de tareas actualizada
 */
export function eliminarTareaPorId(listaTareas, id)
{
    const tarea = listaTareas.find(t => t.id === id);

    if (tarea)
    {
        tarea.eliminar();
        listaTareas = listaTareas.filter(t => t.id !== id);
    }
    else
    {
        console.warn(`No se encontró tarea con id ${id}`);
    }

    return [...listaTareas];
}
