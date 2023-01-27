import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
const NavBar = () => {
    const liItems = [
        {
            item: "about us",
            content: ["brand philosophy", "product technology"],
        },
        {
            item: "our products",
            content: [
                "all products",
                "intibiome wellness",
                "intibiome active",
                "intibiome agecare",
            ],
        },
        {
            item: "intimate health",
            content: ["article 1", "article 2", "article 3", "faq"],
        },
        { item: "contact us" },
    ];
    return (
        <div className="header">
            <div className="logo-and-search">
                <Image width={195} height={79} alt={"logo"} src={"/logo.png"} />
                <Image
                    src={"/ic.search.png"}
                    width={24}
                    height={24}
                    alt={"ic.search"}
                />
            </div>
            <div className="nav-health">
                <ul>
                    {liItems.map((e) => (
                        <li>
                            <div className="li-content">
                                {e.item} <IoIosArrowDown />
                            </div>
                            <ul className="nav-sub">
                                {e.content?.map((i) => (
                                    <li>{i}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
