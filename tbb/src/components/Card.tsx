interface ProductProps {
    item: string;
    image: string;
    color: string;
}

const CardItem = ({ item, image, color }: ProductProps) => {
    return (
        <div className="card-product">
            <img src={image} />
            <div style={{ backgroundColor: color || "none" }}>
                <span>{item}</span>
            </div>
        </div>
    );
};

export default CardItem;
