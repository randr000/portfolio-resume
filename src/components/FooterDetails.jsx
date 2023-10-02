import React from "react";
import { useMediaQuery } from 'react-responsive';
import smallScreenMaxWidth from "../smallScreenMaxWidth";

const FooterDetails = () => {

    const isSmallScreen = useMediaQuery(smallScreenMaxWidth);

    // For some reason I am not able to override bootstrap's default styling for 'hr'.
    // This is true event when using inline styles.
    // As a workaround, I created an empty div element and applied the following styles to it.
    const hrStyles = {
        border: '.25rem solid #333B4C',
        borderRadius: '1rem'
    };

    const hrClasses = 'w-50 mx-auto my-3';

    const headerClasses = 'google-font-500 mt-3';

    const h2Styles = {fontSize: '3.5rem'};

    const pClasses = 'google-font-500 mt-3 mb-5 text-center mx-auto';
    const pStyles = {
        width: isSmallScreen ? '' : '50rem'
    };
    
    return (
        <div className="mt-5">

            <div className={hrClasses} style={hrStyles}></div>

            <p className={pClasses} style={pStyles}>
                For more information about how this page was built, please see
                the <a href="https://github.com/randr000/portfolio-resume" target="_blank">README</a>.
            </p>
        </div>
    );
};

export default FooterDetails;