import CardOfInfo from "../components/PageMain/cardOfInfo";
import React from "react";

export const reducer = (state = {}, action) => {
    let elements = [];
    let components = [];
    switch (action.type) {
        case 'GET':
            elements = action.data.data;
            components = elements.map((currentValue) =>{
                return  <CardOfInfo id={currentValue._id} name={currentValue.Title} year={currentValue.ReleaseYear} format={currentValue.Format} stars={currentValue.Stars}/>
            });
            return {data: components};
        case 'ADD':
            components = {...state};
            components.data = [...state.data];
            elements = action.data.data;
            components.data.unshift(<CardOfInfo id={elements._id} name={elements.Title} year={elements.ReleaseYear} format={elements.Format} stars={elements.Stars}/>);
            return components;
        case 'ADD_FILE':
            components = {...state};
            components.data = [...state.data];
            elements = action.data.data;
            elements.forEach(el => components.data.unshift(<CardOfInfo id={el._id} name={el.Title} year={el.ReleaseYear} format={el.Format} stars={el.Stars}/>));
            return components;
        case "FIND":
            elements = action.data.data;
            components = elements.map((currentValue) =>{
                return  <CardOfInfo id={currentValue._id} name={currentValue.Title} year={currentValue.ReleaseYear} format={currentValue.Format} stars={currentValue.Stars}/>
            });
            return {data: components};
        case "SORT":
            elements = action.data.data;
            components = elements.map((currentValue) =>{
                return  <CardOfInfo id={currentValue._id} name={currentValue.Title} year={currentValue.ReleaseYear} format={currentValue.Format} stars={currentValue.Stars}/>
            });
            return {data: components};
        case "DELETE":
            elements = state.data;
            components = elements.filter(el => el.props.id != action.id);
            return {data: components};
        case "CONTROL":
            return {action: action.action};
        default:
            return state;

    }
};