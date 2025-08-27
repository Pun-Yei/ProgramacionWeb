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
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#FAEEE5",
                            padding: "20px",
                            borderRadius: "8px",
                            minWidth: "300px",
                            maxWidth: "90%",
                        }}
                    >
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
                            <div style={{ marginTop: "10px" }}>
                                <button type="submit">Crear Categoría</button>
                                <button type="button" onClick={handleCloseForm} style={{ marginLeft: "10px" }}>
                                    Cerrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
