import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import MyCart from "./Pages/MyCart";

import SuccessPayment from "./Components/SuccessPayment";
import Header from "./Components/Header";
import HomeHeader from "./Components/HomeHeader";
import Footer from "./Components/Footer";
function RoutesApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <HomeHeader/>
                        <Home/>
                        <Footer/>
                        <MyCart/>
                    </>
                }/>
                <Route path="/success-payment" element={
                    <>
                        <HomeHeader/>
                        <Home/>
                        <Footer/>
                        <MyCart/>
                        <SuccessPayment/>
                    </>
                }/>
                <Route path="/categories" element={
                    <>
                        <Header/>
                        <Categories/>
                        <Footer/>
                        <MyCart/>
                    </>
                }/>
                <Route path="/sign-up" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
       
    )
}

export default RoutesApp;