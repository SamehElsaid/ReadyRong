import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Nav from "./components/Nav";
if (localStorage.getItem("dark")) {
  document.documentElement.classList.add("dark");
}
function App() {
  return (
    <div className="relative || overflow-hidden">
      <div className="overflow-hidden">
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div className="h-screen || flex || colorWrite || h-[calc(100vh-111px)  || justify-center || items-center">404 Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
