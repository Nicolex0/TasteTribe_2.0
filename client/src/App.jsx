import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch("https://tastetribe-server.onrender.com/users")
        .then(r => r.json())
        .then(data => setUsers(data))
        .catch(error => console.error(error));
    }, []);

    console.log(users);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Outlet context={ users }/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
