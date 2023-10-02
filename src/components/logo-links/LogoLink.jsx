import React from "react";
import { Image } from "react-bootstrap";

const LogoLink = ({src, alt, href}) => {

    // const minDimensions = "4rem";
    // const maxDimensions = "4rem";
    const dimensions = "4rem"

    const styles = {
        // minWidth: minDimensions,
        // minHeight: minDimensions,
        // maxHeight: maxDimensions,
        // maxWidth: maxDimensions,
        width: dimensions,
        height: dimensions
    };

    return (
        <a href={href} target="_blank">
            <Image src={src} alt={alt} style={styles} className="mx-2" fluid/>
        </a>
    );
};

export default LogoLink;