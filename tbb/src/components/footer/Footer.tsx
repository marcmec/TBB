import { RxDividerHorizontal, RxDividerVertical } from "react-icons/rx";
const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <div className="li-footer-content">
                        <a>contact us</a>
                        <RxDividerHorizontal
                            size={32}
                            className={"horizontal-divider"}
                        />
                        <RxDividerVertical
                            size={32}
                            className={"vertical-divider"}
                        />
                    </div>
                </li>
                <li>
                    <div className="li-footer-content">
                        <a>faq</a>
                        <RxDividerHorizontal
                            size={32}
                            className={"horizontal-divider"}
                        />
                        <RxDividerVertical
                            size={32}
                            className={"vertical-divider"}
                        />
                    </div>
                </li>
                <li>
                    <div className="li-footer-content">
                        <a>site map</a>
                        <RxDividerHorizontal
                            size={32}
                            className={"horizontal-divider"}
                        />
                        <RxDividerVertical
                            size={32}
                            className={"vertical-divider"}
                        />
                    </div>
                </li>
                <li>
                    <div className="li-footer-content">
                        <a>privacy policy</a>
                        <RxDividerHorizontal
                            size={32}
                            className={"horizontal-divider"}
                        />
                        <RxDividerVertical
                            size={32}
                            className={"vertical-divider"}
                        />
                    </div>
                </li>
                <li>
                    <div className="li-footer-content">
                        <a>cookie policy</a>
                        <RxDividerHorizontal
                            size={32}
                            className={"horizontal-divider"}
                        />
                        <RxDividerVertical
                            size={32}
                            className={"vertical-divider"}
                        />
                    </div>
                </li>
                <li>
                    <div className="li-footer-content">
                        <a>legal notice</a>
                    </div>
                </li>
            </ul>
            <div className="social">
                <img src="/Image 1@2x.png" />
                <img src="/insta.svg" />
            </div>
        </footer>
    );
};

export default Footer;
