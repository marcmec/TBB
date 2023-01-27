interface ProductProps {
    item: string;
    image: string;
    color: string;
}

const ProductCard = ({ item, image, color }: ProductProps) => {
    return (
        <div className="card-product">
            <img src={image} />
            <div style={{ backgroundColor: color }}>
                <span>{item}</span>
            </div>
        </div>
    );
};

export default ProductCard;
