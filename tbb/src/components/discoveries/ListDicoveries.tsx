import CardItem from "../Card";

const ListDiscoveries = () => {
    const discoveries = [
        {
            id: 0,
            image: "/women-atlete.png",
            item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 1,
            image: "/women-old.png",
            item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 2,
            image: "/bubbles.png",
            item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];
    return (
        <section className="list-items">
            <h3>keep up to date with our discoveries</h3>

            <div className="list-cards card-discovery">
                {discoveries.map((e) => (
                    <CardItem
                        image={e.image}
                        item={e.item}
                        color={""}
                        key={e.id}
                    />
                ))}
            </div>
            <button onClick={() => console.log("by Marcos")}>see more</button>
        </section>
    );
};

export default ListDiscoveries;
