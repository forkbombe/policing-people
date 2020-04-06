import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import RegisterButton from "./RegisterButton";

const Banner = () => (
    <div className="banner">
        <div className="banner-overlay">
            <div className="banner-content">
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <h1 className="underline">More than ever, police forces<br/>  need your skills and experience</h1>
                            <h3>We are looking for those with relevant policing-related skills<br />
                                Register now to offer <b>your support</b> as a contractor.</h3>
                            <RegisterButton />
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
        <div className="banner-image">
            <img src={'/homepage-banner.png'} alt="" />
        </div>
    </div>
);

const BannerSmall = ({title, subTitle}) => (
    <div className="banner">
        <div className="banner-overlay">
            <div className="banner-content">
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <h1 className="underline">{title}</h1>
                            <h3>{subTitle}</h3>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
        <div className="banner-image">
            <img src={'/small-banner.png'} alt="" />
        </div>
    </div>
);

export {
    Banner,
    BannerSmall
};