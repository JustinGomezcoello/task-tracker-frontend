# Task Tracker Frontend

![Task Tracker Frontend]

## 🚀 Overview
Task Tracker Frontend is a modern **React-based web application** designed to manage tasks efficiently. It provides an intuitive user interface that allows users to **add, update, delete, and complete tasks** while ensuring proper authentication and role-based authorization.

This project serves as the **frontend** for the `TaskTracker.API` backend, consuming its **RESTful API** endpoints via `Axios`.

---

## ✨ Features
- **Secure Authentication** 🔐
  - Login functionality with JWT authentication.
  - Role-based access control (Admin & User).

- **Task Management** ✅
  - View all tasks in an organized layout.
  - Add new tasks with a title and description.
  - Edit task details.
  - Mark tasks as completed.
  - Delete tasks (Admin only).

- **Dynamic UI with React** ⚡
  - Clean and responsive design.
  - Real-time updates on task actions.
  - Smooth user experience with `React Router` for navigation.

- **API Integration** 🔄
  - Fully connected to `TaskTracker.API`.
  - Secure API calls using `Axios` with JWT headers.
  - Handles server responses and errors gracefully.

---

## 🛠 Tech Stack
- **Frontend:** React.js, Vite, JavaScript (ES6+)
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Routing:** React Router
- **API Handling:** Axios
- **Styling:** CSS, Bootstrap (or Tailwind, if applicable)
- **Authentication:** JWT (JSON Web Token)

---

## 🎯 Installation & Setup
To run the frontend locally, follow these steps:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/task-tracker-frontend.git
cd task-tracker-frontend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file and specify the API URL:
```
VITE_API_URL=http://localhost:5088/api
```

### 4️⃣ Start the Development Server
```sh
npm run dev
```

Your frontend will be available at: [http://localhost:5173](http://localhost:5173)

---

## 🔗 API Integration
The frontend communicates with the `TaskTracker.API` backend using `Axios`. Ensure that the backend is running before testing API calls.

Example API Calls:
```js
// Login User
const response = await axios.post(`${API_URL}/Auth/login`, { username, password });

// Get All Tasks
const response = await axios.get(`${API_URL}/Tasks`, {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});
```

---

## 👤 User Roles & Permissions
- **Admin**
  - Can **view, add, update, and delete** tasks.
  - Has full control over task management.
- **User**
  - Can **view, add, update, and complete** tasks.
  - Cannot delete tasks.

---

## 📌 Roadmap & Future Enhancements
- Implement a **task filtering** system (by status, date, priority).
- Add **drag-and-drop** functionality for task organization.
- Enhance UI/UX with animations and a modern theme.
- Improve **error handling** and **form validation**.

---

## 🏆 Contributing
Contributions are welcome! Feel free to open issues and pull requests. If you'd like to contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature X'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a **Pull Request**.

---

## 📄 License
This project is licensed under the MIT License.

---

## 💡 Acknowledgments
This project was developed as part of a **Full Stack Web Development** practice using the **MERN Stack** approach, applying best practices in API integration and user authentication.

---

📩 **Need Support?** Feel free to reach out via [email/justingomezcoello@gmail.com].


