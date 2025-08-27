import React, { useState } from "react";
import GridTareas from "./create_grid";
import Categoria from "./tag";
import Tarea from "./task";
import FormularioCategoria from "./create_tag";
import FormularioTarea from "./create_task";
import { obtenerTareasDesdeLocalStorage, obtenerCategoriasDesdeLocalStorage } from "./import_export";

function App() {
  // Estado para categorias y tareas
  const [categorias, setCategorias] = useState(obtenerCategoriasDesdeLocalStorage());
  const [tareas, setTareas] = useState(obtenerTareasDesdeLocalStorage());

  // Funcion para crear nueva categoria sin duplicados
  const handleCrearCategoria = (nuevaCategoria) => {
    const existe = categorias.some(
      (cat) => cat.nombre.toLowerCase() === nuevaCategoria.nombre.toLowerCase()
    );

    if (!existe) {
      const nuevasCategorias = [...categorias, nuevaCategoria];
      setCategorias(nuevasCategorias);
      localStorage.setItem("categorias", JSON.stringify(nuevasCategorias));
    } else {
      alert("La categoría ya existe");
    }
  };

  // Funcion para crear nueva tarea sin duplicados
  const handleCrearTarea = (nuevaTarea) => {
    const existe = tareas.some(
      (t) =>
        t.nombre.toLowerCase() === nuevaTarea.nombre.toLowerCase() &&
        t.categoria.id === nuevaTarea.categoria.id
    );

    if (!existe) {
      const nuevasTareas = [...tareas, nuevaTarea];
      setTareas(nuevasTareas);
      localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
    } else {
      alert("La tarea ya existe en esa categoría");
    }
  };

  return (
    <div>
      <h1>To Do</h1>

      {/* Formulario para crear categorias */}
      <FormularioCategoria onCrearCategoria={handleCrearCategoria} />

      {/* Formulario para crear tareas */}
      <FormularioTarea categorias={categorias} onCrearTarea={handleCrearTarea} />

      {/* Grid de tareas */}
      <GridTareas listaTareas={tareas} />
    </div>
  );
}

export default App;
