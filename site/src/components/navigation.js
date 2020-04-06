import React from "react"
import { stack as Menu } from 'react-burger-menu'
import PageLink from "./PageLink";
import RegisterButton from "./RegisterButton";

const Navigation = () => {
    if(typeof window !== 'undefined') {
        const path = window.location.pathname;

        return (
            <div className="nav-wrapper">
                <RegisterButton/>
                <nav className="navigation">
                    <ul>
                        <li>
                            <PageLink
                                to="/"
                                content="Home"
                                classes={(path === '/' ? 'active' : '')}
                            />
                        </li>
                        <li>
                            <PageLink
                                to="candidates"
                                content="Candidates"
                                classes={(path === '/candidates' ? 'active' : '')}
                            />
                        </li>
                        <li>
                            <PageLink
                                to="police-forces"
                                content="Police Forces"
                                classes={(path === '/police-forces' ? 'active' : '')}
                            />
                        </li>
                        <li>
                            <PageLink
                                to="who-we-are"
                                content="Who We Are"
                                classes={(path === '/who-we-are' ? 'active' : '')}
                            />
                        </li>
                    </ul>
                </nav>
                <div className="clear"/>
            </div>
        )
    }
    return false;
};

const MobileNavigation = () => {
    if(typeof window !== 'undefined') {

        const path = window.location.pathname;
        return (
            <Menu>
                <PageLink
                    to="/"
                    content="Home"
                    classes={(path === '/' ? 'active menu-item' : 'menu-item')}
                />
                <PageLink
                    to="candidates"
                    content="Candidates"
                    classes={(path === '/candidates' ? 'active menu-item' : 'menu-item')}
                />
                <PageLink
                    to="police-forces"
                    content="Police Forces"
                    classes={(path === '/police-forces' ? 'active menu-item' : 'menu-item')}
                />
                <PageLink
                    to="who-we-are"
                    content="Who We Are"
                    classes={(path === '/police-forces' ? 'active menu-item' : 'menu-item')}

                />

                    <RegisterButton/>
            </Menu>
        )
    }
    return false;
};


export {
    Navigation,
    MobileNavigation
}