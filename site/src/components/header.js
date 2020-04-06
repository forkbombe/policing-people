import PropTypes from "prop-types"
import React from "react"
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Navigation } from "./navigation";
import Headroom from "headroom.js";
import Logo from "./logo";

let eventMainPositioned;
if(typeof Event !== 'undefined') {
    eventMainPositioned =
        new Event('main-positioned');
}

const setMainOffset = () => {
    const Header =
            document.querySelector("header"),
        Main =
            document.querySelector("main");

    Main.addEventListener("main-positioned", e => {
        Main.classList.add('show');
    });

    if(Main && Header) {
        Main.style.marginTop =
            Header.offsetHeight + 'px';

        if(typeof window !== 'undefined') {
            /*window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });*/

            Main.dispatchEvent(eventMainPositioned);
        }

    } else {
        setMainOffset();
    }
};


class Header extends React.Component {
    componentDidMount() {
        const Header =
            document.querySelector("header");
        const headroom  =
            new Headroom(Header);
        headroom.init();

        window.addEventListener("resize", () => {
            setMainOffset();
        });
        setTimeout(() => {
            setMainOffset();
        }, 500);
    }

    render() {
        return(
            <>
                <header className="main-header">
                    <Grid>
                        <Row>
                            <Col sm={3}>
                                <Logo />
                            </Col>
                            <Col sm={9}>
                                <Navigation />
                            </Col>
                        </Row>
                    </Grid>
                </header>
            </>
        )
    }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
