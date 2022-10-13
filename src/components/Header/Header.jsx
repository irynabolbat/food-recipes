import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom'
import './Header.css'
import logo from '../../img/logo.png'
import {searchApiClient} from "../../api/searchApiClient";
import AsyncSelect from "react-select/async";
import Footer from "../Footer/Footer";

const Header = () => {
    const navigate = useNavigate()

    const handlerChange = (selectedOptions) => {
        navigate(`/meal/${selectedOptions.value}`)
    }

    const loadOptions = (searchValue, callback) => {
        searchApiClient.getMealByName(searchValue).then((res) => {
            callback(res.data.meals.map((meal) => {
                return {value: meal.idMeal, label: meal.strMeal}
            }))
        })
    }

    return (
        <>
            <div>
                <div className={'header_container'}>
                    <img src={logo} alt={'Logo'} className='logo' onClick={() => navigate("/")}/>
                    <div className="search_input">
                        <AsyncSelect loadOptions={loadOptions} onChange={handlerChange}/>
                    </div>
                </div>

                <div className={'nav_wrapper'}>
                    <ul className={'nav_container'}>
                        <li className={'nav_item'}>
                            <button className={'nav_btn'} onClick={() => navigate("/")}>
                                Home
                            </button>
                        </li>
                        <li className={'nav_item'}>
                            <button className={'nav_btn'} onClick={() => navigate("/categories")}>
                                Categories
                            </button>
                        </li>
                        <li className={'nav_item'}>
                            <button className={'nav_btn'} onClick={() => navigate("/area")}>
                                Area
                            </button>
                        </li>
                        <li className={'nav_item'}>
                            <button className={'nav_btn'} onClick={() => navigate("/about")}>
                                About
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Header;