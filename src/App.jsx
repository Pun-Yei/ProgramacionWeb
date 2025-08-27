import React, { useState, useEffect } from "react";
import GridTareas from "./create_grid";
import Categoria from "./tag";
import Tarea from "./task";
import FormularioCategoria from "./create_tag";
import FormularioTarea from "./create_task";
import { obtenerTareasDesdeLocalStorage, obtenerCategoriasDesdeLocalStorage } from "./import_export";

function App() {
  // --- Inicializar categorias ---
  const categoriasIniciales = obtenerCategoriasDesdeLocalStorage();
  const [categorias, setCategorias] = useState(() => {
    if (categoriasIniciales.length > 0) return categoriasIniciales;

    // Crear 5 categorías iniciales si no hay en localStorage
    const c1 = new Categoria("Trabajo"); c1.id = 1;
    const c2 = new Categoria("Personal"); c2.id = 2;
    const c3 = new Categoria("Estudio"); c3.id = 3;
    const c4 = new Categoria("Hogar"); c4.id = 4;
    const c5 = new Categoria("Salud"); c5.id = 5;

    const lista = [c1, c2, c3, c4, c5];
    localStorage.setItem("categorias", JSON.stringify(lista));
    return lista;
  });

  // --- Inicializar tareas ---
  const tareasIniciales = obtenerTareasDesdeLocalStorage();
  const [tareas, setTareas] = useState(() => {
    if (tareasIniciales.length < 0) return tareasIniciales;

    const lista = [
      new Tarea("Enviar reporte", categorias[0], false),
      new Tarea("Comprar leche", categorias[1], false),
      new Tarea("Estudiar React", categorias[2], false),
    ];

    lista.forEach((t, i) => t.id = i + 101); // IDs únicos
    localStorage.setItem("tareas", JSON.stringify(lista));
    return lista;
  });

  // --- Funciones para crear categorías y tareas ---
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
