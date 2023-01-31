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
            id: 0,
            item: "about us",
            content: ["brand philosophy", "product technology"],
        },
        {
            id: 1,
            item: "our products",
            content: [
                "all products",
                "intibiome wellness",
                "intibiome active",
                "intibiome agecare",
            ],
        },
        {
            id: 2,
            item: "intimate health",
            content: ["article 1", "article 2", "article 3", "faq"],
        },
        { id: 3, item: "contact us", content: ["contact us"] },
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
                <a href="/">
                    <Image
                        width={195}
                        height={79}
                        alt={"logo"}
                        src={"/Module 1 - Header 970x60025@2x.png"}
                    />
                </a>
                <Image
                    src={"/ic.search@2x.png"}
                    width={24}
                    height={24}
                    alt={"ic.search@2x"}
                />
            </div>
            <nav className="nav-health">
                <ul>
                    {listItems.map((e) => (
                        <li key={e.id}>
                            <div className="li-content">
                                {e.item}
                                {e.content.length > 1 ? (
                                    <IoIosArrowDown />
                                ) : null}
                            </div>
                            {e.content.includes("contact us") ? null : (
                                <ul className="nav-sub">
                                    {e.content?.map((i) => (
                                        <li key={i + 1}>{i}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            {showMenu ? (
                <nav
                    className={` navbar-mobile ${
                        !showMenu ? " show-mobile" : ""
                    }`}
                >
                    <ul>
                        {listItems.map((e) => {
                            return e.content?.map((i) => (
                                <li onClick={handleShowMenu} key={i + 1}>
                                    {i}
                                </li>
                            ));
                        })}
                    </ul>
                </nav>
            ) : null}
        </div>
    );
};

export default NavBar;
