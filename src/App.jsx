import Nav from "./componant/Nav";
import Login from "./componant/Login";
import Regester from "./componant/Regester";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
     <Nav />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/login" element={<Login />} />
        <Route path="/regester" element={<Regester />} />
        <Route path="*" element={<h2>not found</h2>}/>
      </Routes>

    </>
  )
}
