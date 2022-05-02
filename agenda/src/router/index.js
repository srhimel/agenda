import { BrowserRouter, Route, Routes } from "react-router-dom"
import Update from "../pages/Agenda/Create"
import Create from "../pages/Agenda/Update"
import Home from "../pages/Home"

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Create/>} path="/agenda/create"/>
                <Route elament={<Update/>} path="/agenda/update/:id"/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router