import AniLink from "gatsby-plugin-transition-link/AniLink";
import variables from "../../variables.scss";
import React from "react";

const coverColour = variables.brand1;
const bodyClear = () => {
    const Body =
        document.querySelector("main");

    Body.classList.remove('main');
};

const PageLink = ({to, content, classes}) => {
    return <AniLink
        onClick={bodyClear}
        className={classes}
        paintDrip
        direction="bottom"
        hex={coverColour}
        duration={1}
        to={to}>{content}
    </AniLink>
};

export default PageLink;