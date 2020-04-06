import React from "react"

class Pentagon extends React.Component {

    render() {
        const { image } = this.props;

        let style = {};
        if(image) {
            style = {
                backgroundImage:'url(/'+image+')'
            }
        }
        return(
            <div className="pentagon" style={style}>
            </div>
        )
    }

};

export default Pentagon