import React, { useState } from "react";
import { completarTareaPorId, eliminarTareaPorId } from "./complete_delete_task";

function GridTareas({ listaTareas }) {
    const [tareas, setTareas] = useState([...listaTareas]);

    // Completa una tarea por su id
    const completarTarea = (id) => {
        const nuevasTareas = completarTareaPorId(tareas, id);
        setTareas(nuevasTareas);
    };

    // Elimina una tarea por su id
    const eliminarTarea = (id) => {
        const nuevasTareas = eliminarTareaPorId(tareas, id);
        setTareas(nuevasTareas);
    };

    return (
        <div>
            <div className="gridTareas">
                {tareas.map((tarea) => (
                    <div key={tarea.id}>
                        <h4>{tarea.nombre}</h4>
                        <p>{tarea.categoria?.nombre || "Sin categoría"}</p>

                        <button
                            onClick={() => completarTarea(tarea.id)}
                            disabled={tarea.estado}
                        >
                            Completar
                        </button>

                        <button onClick={() => eliminarTarea(tarea.id)}>
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GridTareas;
