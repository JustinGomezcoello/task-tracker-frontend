import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, role, onTaskDeleted, onTaskUpdated }) => {
    return (
        <div>
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <TaskItem key={task.id} task={task} role={role} onTaskDeleted={onTaskDeleted} onTaskUpdated={onTaskUpdated} />
                ))
            ) : (
                <p>No hay tareas disponibles</p>
            )}
        </div>
    );
};

export default TaskList;
