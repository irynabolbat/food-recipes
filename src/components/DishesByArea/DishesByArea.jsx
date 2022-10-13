import React, {useEffect, useState} from 'react';
import "./DishesByArea.css"
import {useNavigate, useParams} from "react-router-dom";
import {filterAliClient} from "../../api/filterApiClient";
import LoadPaginationButton from "../UI/LoadPaginationButton/LoadPaginationButton";
import Title from "../UI/Title/Title";
import ButtonToTop from "../UI/ButtonToTop/ButtonToTop";
import Item from "../UI/Item/Item";
import ItemImg from "../UI/Item/ItemImg";
import ItemName from "../UI/Item/ItemName";
import ItemsList from "../UI/Item/ItemsList";

const DishesByArea = () => {
    const [dishes, setDishes] = useState([])
    const [numberOfItems, setNumberOfItems] = useState(9)

    const {dishArea} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        filterAliClient.getDishesByArea(dishArea).then(res => {
            setDishes(res.data.meals)
        })
    }, [])

    return (
        <>
            <div className="dishes_by_area_wrapper">
                <Title title={`${dishArea} cuisine`}/>
                <ItemsList extraClassName={"dishes_by_area_container"}>
                    {dishes.slice(0, numberOfItems).map((dish) =>
                        <Item key={dish.idMeal} onClick={() => navigate(`/meal/${dish.idMeal}`)}>
                            <ItemImg imgSrc={dish.strMealThumb} imgAlt={dish.strMeal}/>
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

export default DishesByArea;