interface DiscoveriesProps {
    image: string;
    content: string;
}

const CardDiscovery = ({ image, content }: DiscoveriesProps) => {
    return (
        <div className="card-discovery">
            <img src={image} />
            <span>{content}</span>
        </div>
    );
};

export default CardDiscovery;
