import ProductCard from "./Card";

const ListProducts = () => {
    const products = [
        { item: "wellness", image: "/mask-wellness.png" },
        { item: "active", image: "/mask-active.png" },
        { item: "agecare", image: "/mask-agecare" },
    ];
    return (
        <div className="list-products">
            {products.map((e) => (
                <ProductCard item={e.item} image={e.image} />
            ))}
        </div>
    );
};

export default ListProducts;
