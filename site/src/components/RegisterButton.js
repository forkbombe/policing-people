import React from "react";
import PageLink from "./PageLink";

const RegisterButton = ({theme}) => (
    <PageLink
        to="register"
        classes={"button register-button " + (theme ? theme : '')}
        content="Register your interest"
    />
);

export default RegisterButton;