import React, {useEffect, useState} from 'react';
import "./Area.css"
import {useNavigate} from "react-router-dom";
import {listAliClient} from "../../api/listApiClient";
import Title from "../UI/Title/Title";
import Item from "../UI/Item/Item";
import ItemName from "../UI/Item/ItemName";
import ItemsList from "../UI/Item/ItemsList";

const Area = () => {
    const [areas, setAreas] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        listAliClient.getMealAreas().then(res => {
            setAreas(res.data.meals)
        })
    }, [])

    return (
        <div className="all_areas_wrapper">
            <Title title={"Areas"}/>
            <ItemsList>
                {areas.map((area, index) =>
                    <Item key={index + 1} onClick={() => navigate(`/dishes_area/${area.strArea}`)}
                          extraClassName="area">
                        <ItemName itemName={area.strArea}/>
                    </Item>
                )}
            </ItemsList>
        </div>
    );
};

export default Area;