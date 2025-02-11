import { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            navigate("/tasks"); // Redirige a la página de tareas
        } catch (error) {
            alert("Error en el login");
        }
    };

    return (
        <div className="card p-4">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Usuario:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label>Contraseña:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default LoginForm;
