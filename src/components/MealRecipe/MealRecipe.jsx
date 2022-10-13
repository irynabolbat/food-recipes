import React, {useEffect, useState} from 'react';
import "./MealRecipe.css"
import {useParams} from "react-router-dom";
import {lookupApiClient} from "../../api/lookupApiClient";
import {getCaseStartsWith, getStepByStep} from "../../helpers/utils";
import ReactPlayer from "react-player";
import Title from "../UI/Title/Title";
import ItemImg from "../UI/Item/ItemImg";

const MealRecipe = () => {
    const [meal, setMeal] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [measures, setMeasures] = useState([])
    const [instructions, setInstructions] = useState([])
    const {mealId} = useParams()

    useEffect(() => {
        lookupApiClient.getDetailsById(mealId).then(res => {
            setMeal(res.data.meals[0])
            setIngredients(getCaseStartsWith('strIngredient', res.data.meals[0]))
            setMeasures(getCaseStartsWith('strMeasure', res.data.meals[0]))
            setInstructions(getStepByStep(res.data.meals[0].strInstructions))
            window.scrollTo(0, 0)
        })
    }, [mealId])

    return (
        <div className="meal_recipe_wrapper">
            <Title title={meal.strMeal}/>
            <ItemImg imgSrc={meal.strMealThumb} imgAlt={meal.meal} extraClassName="meal_recipe_img"/>

            <div className='meal_recipe_info'>
                <div>Category: <span className="meal_recipe_info_span">{meal.strCategory}</span></div>
                <div>Cuisine: <span className="meal_recipe_info_span">{meal.strArea}</span></div>
            </div>

            <div className="meal_recipe_table_box">
                <table className="meal_recipe_table">
                    <thead>
                    <tr>
                        <th>Ingredients:</th>
                        <th>Measure:</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ingredients.map((ingredient, index) =>
                        <tr key={index + 1}>
                            < td> {ingredient}</td>
                            <td>{measures[index]}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

            <div className="meal_recipe_instructions">
                {instructions.map((step, index) =>
                    <p key={index + 1}>{step}</p>
                )}
            </div>


            {meal.strYoutube !== "" && meal.strYoutube !== " " && meal.strYoutube !== null
                ? <div className="meal_recipe_video">
                    <ReactPlayer url={meal.strYoutube} className="recipe_video"/>
                </div>
                : <></>
            }
        </div>
    );
};

export default MealRecipe;