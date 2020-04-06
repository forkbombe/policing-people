import React from "react"
import PageLink from "./PageLink"

const Logo = () => (
    <div className="logo">
        <PageLink to="/" content={<img src={'/logo.svg'} alt="Policing People" />} />
    </div>
);

export default Logo;