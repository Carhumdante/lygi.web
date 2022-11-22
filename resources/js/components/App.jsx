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
                        <Route path="home" element={<Home/>}/>
                        <Route path="cars" element={<Cars/>}/>
                        <Route path="cars/:product" element={<Shop/>}/>
                        <Route path="motorcycles" element={<Motorcycles/>}/>
                        <Route path="motorcycles/:product" element={<Shop/>}/>
                        <Route path="planes" element={<Planes/>}/>
                        <Route path="planes/:product" element={<Shop/>}/>
                        <Route path="ships" element={<Ships/>}/>
                        <Route path="ships/:product" element={<Shop/>}/>
                        <Route path="trains" element={<Trains/>}/>
                        <Route path="trains/:product" element={<Shop/>}/>
                        <Route path="trucks" element={<Trucks/>}/>
                        <Route path="trucks/:product" element={<Shop/>}/>
                        <Route path="vintage" element={<Vintage/>}/>
                        <Route path="vintage/:product" element={<Shop/>}/>
                        <Route path="shop" element={<Shop/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
