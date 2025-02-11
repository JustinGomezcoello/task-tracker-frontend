import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api"; // 🔹 Asegúrate de que está bien importado

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
          const response = await login(username, password);
          localStorage.setItem("token", response.token);
          window.location.href = "/tasks"; // 🔹 Redirige completamente para recargar las tareas
      } catch (error) {
          console.error("Error al iniciar sesión", error);
      }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Iniciar Sesión</h2>
            <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Entrar</button>
        </form>
    );
};

export default LoginPage;
