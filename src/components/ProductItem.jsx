
export const ProductItem = ({ product }) => {
    return (
        <article className="item ">
            <img
                loading="lazy"
                src={product.image}
                alt={product.name}
            />
            <p className="title ">{product.name} </p>
        </article>
    )
}
