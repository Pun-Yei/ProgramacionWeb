import Categoria from "./tag";
import Tarea from "./task";

export function guardarTareasEnLocalStorage(tareas) 
{
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

export function obtenerTareasDesdeLocalStorage() 
{
    const tareasJSON = localStorage.getItem("tareas");
    if (!tareasJSON) return [];

    const tareasPlanas = JSON.parse(tareasJSON);

    return tareasPlanas.map(t =>
    {
        const categoria = new Categoria(t.categoria.nombre);
        categoria.id = t.categoria.id;

        const tarea = new Tarea(t.nombre, categoria, t.estado);
        tarea.id = t.id;

        return tarea;
    });
}

export function guardarCategoriasEnLocalStorage(categorias) 
{
    localStorage.setItem("categorias", JSON.stringify(categorias));
}

export function obtenerCategoriasDesdeLocalStorage() 
{
    const categoriasJSON = localStorage.getItem("categorias");
    if (!categoriasJSON) return [];

    const categoriasPlanas = JSON.parse(categoriasJSON);

    return categoriasPlanas.map(c => 
    {
        const categoria = new Categoria(c.nombre);
        categoria.id = c.id;
        return categoria;
    });
}

