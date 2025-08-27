import React, { useState } from "react";
import Categoria from "./tag";
import Tarea from "./task";

export default function FormularioTarea({ categorias, onCrearTarea })
{
    const [showForm, setShowForm] = useState(false);
    const [nombre, setNombre] = useState("");
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
        categorias.length > 0 ? categorias[0].id : null
    );

    const handleOpenForm = () => setShowForm(true);
    const handleCloseForm = () => setShowForm(false);

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        const categoriaObj = categorias.find(
            (cat) => cat.id === parseInt(categoriaSeleccionada)
        );

        const tarea = new Tarea(nombre, categoriaObj);
        onCrearTarea(tarea);

        setNombre("");
        setCategoriaSeleccionada(categorias.length > 0 ? categorias[0].id : null);
        setShowForm(false);
    };

    return (
        <div>
            <button onClick={handleOpenForm}>Abrir Formulario</button>

            {showForm && (
                <div>
                    <h2>Formulario de Tarea</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Nombre de la tarea:</label>
                            <input
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Categoría:</label>
                            <select
                                value={categoriaSeleccionada}
                                onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                            >
                                {categorias.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button type="submit">Crear Tarea</button>
                            <button type="button" onClick={handleCloseForm}>
                                Cerrar
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
