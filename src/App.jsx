import React, { useState, useEffect } from "react";
import GridTareas from "./create_grid";
import Tarea from "./task";
import Categoria from "./tag";
import FormularioCategoria from "./create_tag";
import FormularioTarea from "./create_task";
import { guardarTareasEnLocalStorage, obtenerTareasDesdeLocalStorage } from "./import_export";

// Funciones para manejar categorías en localStorage
function guardarCategoriasEnLocalStorage(categorias) {
  localStorage.setItem("categorias", JSON.stringify(categorias));
}

function obtenerCategoriasDesdeLocalStorage() {
  const categoriasJSON = localStorage.getItem("categorias");
  if (!categoriasJSON) return [];
  const categoriasPlanas = JSON.parse(categoriasJSON);
  return categoriasPlanas.map(c => new Categoria(c.nombre, c.id));
}

// Función para inicializar localStorage con datos por defecto si está vacío
function inicializarDatos() {
  // Inicializar categorías
  if (!localStorage.getItem("categorias")) {
    const trabajo = new Categoria("Trabajo");
    const estudio = new Categoria("Estudio");
    guardarCategoriasEnLocalStorage([trabajo, estudio]);
  }

  // Inicializar tareas
  if (!localStorage.getItem("tareas")) {
    const categoriasGuardadas = obtenerCategoriasDesdeLocalStorage();
    const trabajo = categoriasGuardadas.find(c => c.nombre === "Trabajo");
    const estudio = categoriasGuardadas.find(c => c.nombre === "Estudio");

    const listaInicialTareas = [
      new Tarea("Hacer informe", trabajo),
      new Tarea("Estudiar React", estudio),
      new Tarea("Enviar correo", trabajo),
    ];
    guardarTareasEnLocalStorage(listaInicialTareas);
  }
}

function App() {
  const [categorias, setCategorias] = useState([]);
  const [tareas, setTareas] = useState([]);

  // Inicializar datos y cargar desde localStorage al montar
  useEffect(() => {
    inicializarDatos();

    const categoriasGuardadas = obtenerCategoriasDesdeLocalStorage();
    setCategorias(categoriasGuardadas);

    const tareasGuardadas = obtenerTareasDesdeLocalStorage();
    setTareas(tareasGuardadas);
  }, []);

  // Crear nueva categoría
  const handleCrearCategoria = (categoria) => {
    const nuevasCategorias = [...categorias, categoria];
    setCategorias(nuevasCategorias);
    guardarCategoriasEnLocalStorage(nuevasCategorias);
  };

  // Crear nueva tarea
  const handleCrearTarea = (tarea) => {
    const nuevasTareas = [...tareas, tarea];
    setTareas(nuevasTareas);
    guardarTareasEnLocalStorage(nuevasTareas);
  };

  return (
    <div>
      <h1>To Do</h1>

      <FormularioCategoria onCrearCategoria={handleCrearCategoria} />
      <FormularioTarea categorias={categorias} onCrearTarea={handleCrearTarea} />

      <GridTareas listaTareas={tareas} />
    </div>
  );
}

export default App;