import ProductCard from "./Card";

const ListProducts = () => {
    const products = [
        { item: "wellness", image: "/mask-wellness.png", color: "#389cd6" },
        { item: "active", image: "/mask-active.png", color: "#309d5f" },
        { item: "agecare", image: "/mask-agecare.png", color: "#ee6381" },
    ];
    return (
        <section className="card-list-products">
            <h3>our products</h3>

            <div className="list-products">
                {products.map((e) => (
                    <ProductCard
                        item={e.item}
                        image={e.image}
                        color={e.color}
                    />
                ))}
            </div>
        </section>
    );
};

export default ListProducts;
