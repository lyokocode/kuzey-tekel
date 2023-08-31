
export const ProductItem = ({ product }) => {
    return (
        <article className="item ">
            <img
                src={product.image}
                alt={product.name}
            />
            <p className="title ">{product.name} </p>
        </article>
    )
}
