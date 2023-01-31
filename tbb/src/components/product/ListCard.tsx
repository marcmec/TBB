import CardItem from "../Card";

const ListProducts = () => {
    const products = [
        {
            id: 0,
            item: "wellness",
            image: "/image-blue-mask@2x.png",
            content: {
                item: "intibiome wellness daily intimate wash",
                padding: "24px 32px",
            },
            color: "#389cd6",
        },
        {
            id: 1,
            item: "active",
            image: "/image-green-mask@2x.png",
            content: {
                item: "intibiome active extra protection intimate wash",
                padding: "0",
            },
            color: "#309d5f",
        },
        {
            id: 2,
            item: "agecare",
            image: "/image-pink-mask@2x.png",
            content: {
                item: "intibiome agecare dryness relief intimate wash",
                padding: "24px 32px",
            },
            color: "#ee6381",
        },
    ];
    return (
        <section className="list-items">
            <h3>our products</h3>

            <div className="list-cards">
                {products.map((e) => (
                    <CardItem
                        item={e.item}
                        image={e.image}
                        color={e.color}
                        content={e.content}
                        key={e.id}
                    />
                ))}
            </div>
        </section>
    );
};

export default ListProducts;
