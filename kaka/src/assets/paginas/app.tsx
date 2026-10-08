import { Route, Routes } from "react-router-dom";
import Navbar from "../organismos/Navbar";
import Inicio from "./inicio";
import Peliculas from "./Peliculas";
import DetallePelicula from "./DetallePelicula";
import "./App.css";

function App() {
    return (
        <>
            <Navbar />
            <main className="container py-4">
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/peliculas" element={<Peliculas />} />
                    <Route path="/peliculas/:id" element={<DetallePelicula />} />
                </Routes>
            </main>
        </>
    );
}

export default App;