import React, { useState } from "react";
import Categoria from "./tag";

export default function FormularioCategoria({ onCrearCategoria }) {
    const [showForm, setShowForm] = useState(false);
    const [nombre, setNombre] = useState("");

    const handleOpenForm = () => setShowForm(true);
    const handleCloseForm = () => setShowForm(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const categoria = new Categoria(nombre);
        onCrearCategoria(categoria);

        setNombre("");
        setShowForm(false);
    };

    return (
        <div>
            <button onClick={handleOpenForm}>Agregar Categoría</button>

            {showForm && (
                <div>
                    <h2>Formulario de Categoría</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Nombre de la categoría:</label>
                            <input
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <button type="submit">Crear Categoría</button>
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
