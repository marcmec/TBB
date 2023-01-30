import CardItem from "../Card";

const ListProducts = () => {
    const products = [
        {
            id: 0,
            item: "wellness",
            image: "/image-blue-mask@2x.png",
            color: "#389cd6",
        },
        {
            id: 1,
            item: "active",
            image: "/image-green-mask@2x.png",
            color: "#309d5f",
        },
        {
            id: 2,
            item: "agecare",
            image: "/image-pink-mask@2x.png",
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
                        key={e.id}
                    />
                ))}
            </div>
        </section>
    );
};

export default ListProducts;
