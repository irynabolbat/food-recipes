import React, {useEffect, useState} from 'react';
import "./HotMeals.css"
import {useNavigate} from "react-router-dom";
import {lookupApiClient} from "../../api/lookupApiClient";
import Title from "../UI/Title/Title";
import Item from "../UI/Item/Item";
import ItemImg from "../UI/Item/ItemImg";
import ItemName from "../UI/Item/ItemName";
import ItemsList from "../UI/Item/ItemsList";

const HotMeals = () => {
    const [hotMeals, setHotMeals] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        lookupApiClient.getRandomMeals().then(res => {
            setHotMeals(res.data.meals)
        })
    }, [])

    return (
        <div className="hot_meal_wrapper">
            <Title title={"Hot Meals"}/>
            <ItemsList>
                {hotMeals.map((meal, index) =>
                    <Item key={meal.idMeal} onClick={() => navigate(`/meal/${meal.idMeal}`)}>
                        <ItemImg imgSrc={meal.strMealThumb} imgAlt={meal.strMeal}/>
                        <ItemName itemName={meal.strMeal}/>
                    </Item>
                )}
            </ItemsList>
        </div>
    );
};

export default HotMeals;