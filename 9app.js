import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

const AuthContext = createContext();

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}

function Login() {
  const { setUser } = useContext(AuthContext);
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => setUser("alice")}>Login</button>
    </div>
  );
}

function Dashboard() { return <h2>Dashboard (Protected)</h2>; }

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <nav>
          <Link to="/login">Login</Link> | <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}
//State Management & Protected Routes in React