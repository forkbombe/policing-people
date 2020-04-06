import React from "react";

const Crosshead = ({text, align}) => (
    <div className={'crosshead ' + (align ? align : '')} >
        <h2>
            {text}
        </h2>
    </div>
);

export default Crosshead;