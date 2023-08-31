
export const CategoryItem = ({ category, selectedCategory, handleCategoryClick }) => {
    return (
        <li
            className={`item ${selectedCategory === category.slug ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.slug)}
        >
            {category.name}
        </li>
    )
}
