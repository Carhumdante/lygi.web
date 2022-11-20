import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./Example";
import First from "./First";
import NavBar from "./NavBar";


export default function App(){
    return (
        <div className = "App">
            <BrowserRouter>
                <Routes>
                    <Route path="/lygi.web/public/" element={<NavBar/>}>
                        <Route index element={<Example/>}/>
                        <Route path="example" element={<Example/>}/>
                        <Route path="first" element={<First/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}