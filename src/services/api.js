import axios from "axios";

const API_URL = "http://localhost:5088/api"; // Ajusta la URL de tu backend

// Obtener el token de autenticación desde localStorage
const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
};

// Obtener el rol del usuario
const getUserRole = () => localStorage.getItem("role") || "";

// 🔹 Login (Autenticación)
export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/Auth/login`, { username, password });

        // Guardar token y rol
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);

        return response.data;
    } catch (error) {
        console.error("Error en la autenticación:", error.response?.data || error.message);
        throw error;
    }
};

// 🔹 Obtener tareas (GET)
export const getTasks = async () => {
    try {
        const response = await axios.get(`${API_URL}/Tasks`, { headers: getAuthHeader() });
        return response.data || [];
    } catch (error) {
        console.error("Error al obtener las tareas:", error.response?.data || error.message);
        return [];
    }
};

// 🔹 Crear tarea (POST) - Solo "User"
export const createTask = async (task) => {
    if (getUserRole() !== "User") {
        console.warn("Acción no permitida: Solo los usuarios pueden crear tareas.");
        return;
    }

    try {
        const response = await axios.post(`${API_URL}/Tasks`, task, { headers: getAuthHeader() });
        return response.data;
    } catch (error) {
        console.error("Error al crear la tarea:", error.response?.data || error.message);
        throw error;
    }
};

// 🔹 Actualizar tarea (PUT) - Solo "User"
export const updateTask = async (id, updatedTask) => {
    if (getUserRole() !== "User") {
        console.warn("Acción no permitida: Solo los usuarios pueden actualizar tareas.");
        return;
    }

    try {
        const response = await axios.put(`${API_URL}/Tasks/${id}`, updatedTask, { headers: getAuthHeader() });
        return response.data;
    } catch (error) {
        console.error("Error al actualizar la tarea:", error.response?.data || error.message);
        throw error;
    }
};

// 🔹 Marcar tarea como completada (PATCH) - Solo "User"
export const patchTask = async (id) => {
    if (getUserRole() !== "User") {
        console.warn("Acción no permitida: Solo los usuarios pueden completar tareas.");
        return;
    }

    try {
        const response = await axios.patch(`${API_URL}/Tasks/${id}/complete`, {}, { headers: getAuthHeader() });
        return response.data;
    } catch (error) {
        console.error("Error al completar la tarea:", error.response?.data || error.message);
        throw error;
    }
};

// 🔹 Eliminar tarea (DELETE) - Solo "Admin"
export const deleteTask = async (id) => {
    if (getUserRole() !== "Admin") {
        console.warn("Acción no permitida: Solo los administradores pueden eliminar tareas.");
        return;
    }

    try {
        await axios.delete(`${API_URL}/Tasks/${id}`, { headers: getAuthHeader() });
    } catch (error) {
        console.error("Error al eliminar la tarea:", error.response?.data || error.message);
        throw error;
    }
};

// 🔹 Marcar tarea como completada o no completada (PATCH) - Solo "User"
export const toggleTaskCompletion = async (id, currentStatus) => {
  if (getUserRole() !== "User") {
      console.warn("Acción no permitida: Solo los usuarios pueden modificar el estado de las tareas.");
      return;
  }

  try {
      const response = await axios.patch(
          `${API_URL}/Tasks/${id}/complete`,
          { isCompleted: !currentStatus }, // Enviar el estado actualizado al backend
          { headers: getAuthHeader() }
      );
      return response.data;
  } catch (error) {
      console.error("Error al cambiar el estado de la tarea:", error.response?.data || error.message);
      throw error;
  }
};
