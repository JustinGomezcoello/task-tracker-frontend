import { useState } from "react";
import { createTask } from "../services/api";
import "../styles.css"; // 📌 Importar estilos

const TaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createTask({ title, description, isCompleted: false });
            onTaskAdded();
            setTitle("");
            setDescription("");
        } catch (error) {
            console.error("Error al agregar la tarea", error);
        }
    };

    return (
        <div className="container">
            <h2>Agregar Tarea</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
};

export default TaskForm;
