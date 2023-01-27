import CardDiscovery from "./CardDicovery";

const ListDiscoveries = () => {
    const discoveries = [
        {
            image: "/women-atlete.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            image: "/women-old.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            image: "/bubbles.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];
    return (
        <section className="keep-to-date">
            <h3>keep up to date with our discoveries</h3>

            <div className="list-discoveries">
                {discoveries.map((e) => (
                    <CardDiscovery image={e.image} content={e.content} />
                ))}
            </div>
            <button onClick={() => console.log("by Marcos")}>see more</button>
        </section>
    );
};

export default ListDiscoveries;
