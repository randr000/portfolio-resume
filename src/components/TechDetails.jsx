import React from "react";
import { Image } from "react-bootstrap";
import { liftlog, pyodideGif } from "../img/images";
import { useMediaQuery } from 'react-responsive';
import smallScreenMaxWidth from "../smallScreenMaxWidth";

const TechDetails = () => {

    const isSmallScreen = useMediaQuery(smallScreenMaxWidth);

    // For some reason I am not able to override bootstrap's default styling for 'hr'.
    // This is true event when using inline styles.
    // As a workaround, I created an empty div element and applied the following styles to it.
    const hrStyles = {
        border: '.25rem solid #333B4C',
        borderRadius: '1rem'
    };

    const hrClasses = 'w-50 mx-auto my-3';

    const projImgStyles = {
        ...hrStyles,
        width: '36rem',
        height: '18rem'
    }

    const headerClasses = 'google-font-500 mt-3';

    const h2Styles = {fontSize: '3.5rem'};
    const h3Styles = {fontSize: '2.25rem'};

    const pClasses = 'google-font-500 mt-3 mb-5 text-center mx-auto';
    const pStyles = {
        width: isSmallScreen ? '' : '50rem'
    };
    
    return (
        <div className="mt-5">

            <div className={hrClasses} style={hrStyles}></div>

            <h2 className={headerClasses} style={h2Styles}>Projects</h2>

            <h3 className={headerClasses} style={h3Styles}>liftlog</h3>
            <a href="https://lift-log-react.vercel.app/" target="_blank">
                <Image
                    src={liftlog}
                    alt="liftlog site preview picture"
                    style={projImgStyles}
                    fluid
                    thumbnail
                />
            </a>
            <p className={pClasses} style={pStyles}>
                This site allows a user to keep a log of how much weight they are lifting in the gym.
                For a more detailed description, please see the 
                project's <a href="https://github.com/randr000/lift-log-react-frontend" target="_blank">README</a>.
            </p>

            <div className={hrClasses} style={hrStyles}></div>

            <h3 className={headerClasses} style={h3Styles}>Pyodide React App</h3>
            <a href="https://randr000.github.io/react_pyodide_data_prep/" target="_blank">
                <Image
                    src={pyodideGif}
                    alt="pyodide react site preview picture"
                    style={projImgStyles}
                    fluid
                    thumbnail
                />
            </a>
            <p className={pClasses} style={pStyles}>
                This project is a prototype of a drag and drop data preparation app using python and react.
                All python code is completely run in the browser using pyodide. This project is still very 
                much a work in progress. For a more detailed description, please see the 
                project's <a href="https://github.com/randr000/react_pyodide_data_prep" target="_blank">README</a>.
                <br/>
                For more information about the pyodide project, please visit <a href="https://pyodide.org/" target="_blank">pyodide.org</a>.
            </p>

        </div>
    );
};

export default TechDetails;