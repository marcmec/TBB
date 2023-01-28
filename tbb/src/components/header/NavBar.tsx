import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const listItems = [
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
        { item: "contact us", content: ["contact us"] },
    ];

    return (
        <div className="header">
            <div className="logo-and-search">
                {!showMenu ? (
                    <RxHamburgerMenu
                        size={24}
                        className="menu-mobile"
                        onClick={handleShowMenu}
                    />
                ) : (
                    <RxCross2
                        size={24}
                        className="menu-mobile"
                        onClick={handleShowMenu}
                    />
                )}
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
                    {listItems.map((e) => (
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
            {showMenu ? (
                <div className="navbar-mobile">
                    <ul>
                        {listItems.map((e) => {
                            return e.content?.map((i) => <li>{i}</li>);
                        })}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default NavBar;
