import React, { useState } from "react";
import { deleteTask, toggleTaskCompletion, updateTask } from "../services/api";
import "../styles.css"; // 📌 Importar estilos

const TaskItem = ({ task, role, onTaskDeleted, onTaskUpdated }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDescription, setEditedDescription] = useState(task.description);

    if (!task || !task.title) {
        return null;
    }

    // 🔹 Alternar estado de completado/no completado
    const handleToggleCompletion = async () => {
        try {
            await toggleTaskCompletion(task.id, task.isCompleted);
            onTaskUpdated();
        } catch (error) {
            console.error("Error al actualizar la tarea", error);
        }
    };

    // 🔹 Guardar edición de la tarea
    const handleEdit = async () => {
        try {
            await updateTask(task.id, { ...task, title: editedTitle, description: editedDescription });
            setIsEditing(false);
            onTaskUpdated();
        } catch (error) {
            console.error("Error al actualizar la tarea", error);
        }
    };

    return (
        <div className="task-item">
            {isEditing ? (
                <>
                    <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                    <textarea value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
                    <div className="actions">
                        <button className="complete-btn" onClick={handleEdit}>Guardar</button>
                        <button className="delete-btn" onClick={() => setIsEditing(false)}>Cancelar</button>
                    </div>
                </>
            ) : (
                <>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p className={task.isCompleted ? "completed" : "pending"}>
                        {task.isCompleted ? "✅ Completada" : "❌ Pendiente"}
                    </p>

                    <div className="actions">
                        {role === "User" && (
                            <button className="complete-btn" onClick={handleToggleCompletion}>
                                {task.isCompleted ? "Marcar como No Completada" : "Marcar como Completada"}
                            </button>
                        )}

                        {role === "User" && (
                            <button className="edit-btn" onClick={() => setIsEditing(true)}>Editar</button>
                        )}

                        {role === "Admin" && (
                            <button className="delete-btn" onClick={() => deleteTask(task.id).then(onTaskDeleted)}>Eliminar</button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default TaskItem;
