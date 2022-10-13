import React, {useEffect, useState} from 'react';
import "./AllCategories.css"
import {listAliClient} from "../../api/listApiClient";
import {useNavigate} from "react-router-dom";
import Title from "../UI/Title/Title";
import Item from "../UI/Item/Item";
import ItemImg from "../UI/Item/ItemImg";
import ItemName from "../UI/Item/ItemName";
import ItemsList from "../UI/Item/ItemsList";


const AllCategories = () => {
    const [categories, setCategories] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        listAliClient.getMealCategories().then(res => {
            setCategories(res.data.categories)
        })
    }, [])

    return (
        <div className="all_categories_wrapper">
            <Title title={"All categories"}/>
            <ItemsList>
                {categories.map((category) =>
                    <Item key={category.idCategory} onClick={() => navigate(`/dishes/${category.strCategory}`)}>
                        <ItemImg imgSrc={category.strCategoryThumb} imgAlt={category.strCategory}/>
                        <ItemName itemName={category.strCategory}/>
                    </Item>
                )}
            </ItemsList>
        </div>
    );
};

export default AllCategories;