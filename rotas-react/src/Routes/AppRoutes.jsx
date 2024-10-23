import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home'
import Sobre from '../Pages/Sobre'
import Produtos from '../Pages/Produtos'
import NotFound from '../Pages/NotFound'
import Contato from '../Pages/Contato'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sobre" element={<Sobre />}/>
            <Route path="/Produtos" element={<Produtos />}/>
            <Route path="/Contato" element={<Contato/>} />
            
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );
}
