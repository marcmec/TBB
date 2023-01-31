interface ProductProps {
    item: string;
    image: string;
    color: string;
    content?: { item: string; padding: string };
}

const CardItem = ({ item, image, color, content }: ProductProps) => {
    return (
        <div className="card-product">
            <img src={image} />
            {content ? (
                <div className="p-content">
                    <p style={{ padding: content?.padding }}>{content.item}</p>
                </div>
            ) : null}

            <div style={{ backgroundColor: color || "none" }}>
                <span>{item}</span>
            </div>
        </div>
    );
};

export default CardItem;
