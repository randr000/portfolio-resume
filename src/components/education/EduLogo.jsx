import React from "react";
import { Image } from "react-bootstrap";

const EduLogo = ({src, alt}) => {

    const dimensions = '2rem';

    const styles = {
        width: dimensions,
        height: dimensions
    };

    return (
        <Image src={src} alt={alt} style={styles} className="mx-2 my-2" fluid/>
    );
};

export default EduLogo;