interface ProductProps {
    item: string;
    image: string;
    color: string;
    content?: string;
}

const CardItem = ({ item, image, color, content }: ProductProps) => {
    return (
        <div className="card-product">
            <img src={image} />
            {content ? <p>{content}</p> : null}

            <div style={{ backgroundColor: color || "none" }}>
                <span>{item}</span>
            </div>
        </div>
    );
};

export default CardItem;
