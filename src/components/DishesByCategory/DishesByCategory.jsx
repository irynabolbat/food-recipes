import React, {useEffect, useState} from 'react';
import "./DishesByCategory.css"
import {useNavigate, useParams} from "react-router-dom";
import {filterAliClient} from "../../api/filterApiClient";
import LoadPaginationButton from "../UI/LoadPaginationButton/LoadPaginationButton";
import Title from "../UI/Title/Title";
import ButtonToTop from "../UI/ButtonToTop/ButtonToTop";
import Item from "../UI/Item/Item";
import ItemImg from "../UI/Item/ItemImg";
import ItemName from "../UI/Item/ItemName";
import ItemsList from "../UI/Item/ItemsList";

const DishesByCategory = () => {
    const [dishes, setDishes] = useState([])
    const [numberOfItems, setNumberOfItems] = useState(9)

    const {dishCategory} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        filterAliClient.getDishesByCategory(dishCategory).then(res => {
            setDishes(res.data.meals)
        })
    }, [])

    return (
        <>
            <div className="dishes_by_category_wrapper">
                <Title title={dishCategory}/>
                <ItemsList extraClassName={"dishes_by_category_container"}>
                    {dishes.slice(0, numberOfItems).map((dish) =>
                        <Item key={dish.idMeal} onClick={() => navigate(`/meal/${dish.idMeal}`)}>
                            <ItemImg imgSrc={dish.strMealThumb} imgAlt={dish.strMeal} />
                            <ItemName itemName={dish.strMeal}/>
                        </Item>
                    )}
                </ItemsList>
            </div>

            {numberOfItems >= dishes.length
                ? <></>
                : <LoadPaginationButton numberOfItems={numberOfItems} setNumberOfItems={setNumberOfItems}/>
            }

            {document.body.scrollHeight >= 1000
                ? <ButtonToTop/>
                : <></>
            }
        </>
    );
};

export default DishesByCategory;