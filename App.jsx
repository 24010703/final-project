import React, { useState, useEffect } from "react";

// Simple App with Register, Login, and Dashboard
function App() {
  const [page, setPage] = useState("login"); // 'login', 'register', 'dashboard'
  const [user, setUser] = useState(null);

  // Load logged-in user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setPage("dashboard");
    }
  }, []);

  return (
    <div>
      <h1>Books Exchange</h1>
      {page === "login" && <p>Login page goes here</p>}
      {page === "register" && <p>Register page goes here</p>}
      {page === "dashboard" && <p>Dashboard page goes here</p>}
    </div>
  );
}

export default App;
