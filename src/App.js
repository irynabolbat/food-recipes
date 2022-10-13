import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import AllCategories from "./components/AllCategories/AllCategories";
import {Route, Routes} from "react-router-dom";
import HotMeals from "./components/HotMeals/HotMeals";
import MealRecipe from "./components/MealRecipe/MealRecipe";
import DishesByCategory from "./components/DishesByCategory/DishesByCategory";
import DishesByArea from "./components/DishesByArea/DishesByArea";
import Area from "./components/Area/Area";
import About from "./components/About/About";

function App() {
    return (
        <Routes>
            <Route element={<Header/>}>
                <Route path="/" element={<HotMeals/>}/>
                <Route path="/categories" element={<AllCategories/>}/>
                <Route path="/area" element={<Area/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/meal/:mealId" element={<MealRecipe/>}/>
                <Route path="/dishes/:dishCategory" element={<DishesByCategory/>}/>
                <Route path="/dishes_area/:dishArea" element={<DishesByArea/>}/>
            </Route>
        </Routes>
    );
}

export default App;
