import { useState } from "react";
import { categories, products } from "../data";
import { ProductItem, CategoryItem } from "../components"
import "../styles/products.scss"
import { Helmet } from "react-helmet";

export const Products = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (slug) => {
        setSelectedCategory(slug);
    };

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    return (
        <div className=" productPage  ">
            {/* seo */}
            <Helmet>
                <title>Kuzey Tekel - Ürünler</title>
                <meta
                    name="description"
                    content="Kuzey Tekel'de geniş bir ürün yelpazesi bulunmaktadır. Alkol, içecek ve daha fazlası için bizi ziyaret edin."
                />
                <meta
                    name="keywords"
                    content="Kuzey Tekel, tekel bayii, ürünler, içki, alkol, paket servis"
                />
                <meta name="robots" content="index, follow" />
            </Helmet>

            {/* product page */}
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
