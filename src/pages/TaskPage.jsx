import { useEffect, useState } from "react";
import { getTasks, createTask } from "../services/api";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const TaskPage = () => {
    const [tasks, setTasks] = useState([]);
    const [role, setRole] = useState("");

    const fetchTasks = async () => {
        try {
            const data = await getTasks();
            setTasks(data);
        } catch (error) {
            console.error("Error al obtener las tareas", error);
        }
    };

    useEffect(() => {
        fetchTasks();
        setRole(localStorage.getItem("role"));
    }, []);

    return (
        <div>
            <h2>Gestión de Tareas</h2>

            {role === "User" && <TaskForm onTaskAdded={fetchTasks} />}

            <TaskList tasks={tasks} role={role} onTaskDeleted={fetchTasks} onTaskUpdated={fetchTasks} />
        </div>
    );
};

export default TaskPage;
