import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Cars from "./Cars";
import Motorcycles from "./Motorcycles";
import Planes from "./Planes";
import Ships from "./Ships";
import Trains from "./Trains";
import Trucks from "./Trucks";
import Vintage from "./Vintage";
import Shop from "./Shop";

export default function App(){
    return (
        <div className = "App">
            <BrowserRouter>
                <Routes>
                    <Route path="/lygi.web/public/" element={<NavBar/>}>
                        <Route index element={<Home/>}/>
                        <Route path="home/" element={<Home/>}/>
                        <Route path="cars/" element={<Cars/>}/>
                        <Route path="motorcycles" element={<Motorcycles/>}/>
                        <Route path="planes" element={<Planes/>}/>
                        <Route path="ships" element={<Ships/>}/>
                        <Route path="trains" element={<Trains/>}/>
                        <Route path="trucks" element={<Trucks/>}/>
                        <Route path="vintage" element={<Vintage/>}/>
                        <Route path="shop" element={<Shop/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
