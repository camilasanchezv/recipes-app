import React from "react";

const Recipe = ({ title, image, ingredients }) => {
    return (
        <div className="recipe">
            <img className="image" src={image} alt="" />
            <div className="recipe-info">
                <h1 className="title" >{title}</h1>
                <ul>
                    {ingredients.map(ingredient =>
                        <li>{ingredient.text}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Recipe;