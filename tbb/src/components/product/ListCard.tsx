import CardItem from "../Card";

const ListProducts = () => {
    const products = [
        {
            item: "wellness",
            image: "/image-blue-mask@2x.png",
            color: "#389cd6",
        },
        { item: "active", image: "/image-green-mask@2x.png", color: "#309d5f" },
        { item: "agecare", image: "/image-pink-mask@2x.png", color: "#ee6381" },
    ];
    return (
        <section className="list-items">
            <h3>our products</h3>

            <div className="list-cards">
                {products.map((e) => (
                    <CardItem item={e.item} image={e.image} color={e.color} />
                ))}
            </div>
        </section>
    );
};

export default ListProducts;
