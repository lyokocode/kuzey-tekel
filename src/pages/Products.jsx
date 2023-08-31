import { useState } from "react";
import { categories, products } from "../data";
import { ProductItem, CategoryItem } from "../components"
import "../styles/products.scss"

export const Products = () => {

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
                            <CategoryItem
                                key={category.id}
                                category={category}
                                selectedCategory={selectedCategory}
                                handleCategoryClick={handleCategoryClick}
                            />
                        ))}

                    </ul>
                </div>

                <div className=" products ">
                    <div className="content ">
                        {filteredProducts.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
