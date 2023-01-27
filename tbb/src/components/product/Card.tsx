interface ProductProps {
    item: string;
    image: string;
}

const ProductCard = ({ item, image }: ProductProps) => {
    return (
        <div>
            <img src={image} />
            <p>{item}</p>
        </div>
    );
};

export default ProductCard;
