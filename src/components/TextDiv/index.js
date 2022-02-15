import React from "react";
import styles from "../styles/style";

class TextDiv extends React.Component {


    render() {
        const data = this.props.data;

        return (data.map((dataItem) =>
            <div style={styles.base} key={dataItem}>{dataItem}</div>
        ));
    }
}

export default TextDiv;