import React, { useState } from "react";
import { categories, products } from "../data";
import "../styles/products.scss"

export const Product = () => {

    // const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // if (isDarkMode) {
    //     alert("karanlık mod aktif");
    // } else {
    //     alert("karanlık mod aktif değil");
    // }

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (slug) => {
        setSelectedCategory(slug);
    };

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    return (
        <div className=" productPage  ">
            <h1 className="title">Products</h1>
            <div className="productContainer">

                <div className="categories">
                    <h2>Categories</h2>
                    <ul className="list ">
                        <li
                            className={`item  ${!selectedCategory ? "active" : ""}`}
                            onClick={() => handleCategoryClick(null)}
                        >
                            All
                        </li>
                        {categories.map((category) => (
                            <li
                                key={category.id}
                                className={`item ${selectedCategory === category.slug ? "active" : " "}`}
                                onClick={() => handleCategoryClick(category.slug)}
                            >
                                {category.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className=" products ">
                    <div className="content ">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="item ">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                />
                                <p className="title ">{product.name} </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
