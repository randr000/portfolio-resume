import React, {useContext, useState} from "react";
import smallScreenMaxWidth from '../smallScreenMaxWidth';
import { useMediaQuery } from 'react-responsive';
import AppContext from "../context/AppContext";

const HeaderInfo = () => {

    const isSmallScreen = useMediaQuery(smallScreenMaxWidth);
    const {appState, dispatch} = useContext(AppContext);
    const {accounting, tech} = appState;

    const [classString,] = useState(`google-font-400 ${isSmallScreen ? 'fs-5' : ''} text-center`)
    const [nameStyles,] = useState(!isSmallScreen ? {fontSize: "5rem"} : {});
    const [jobTitleStyles,] = useState(!isSmallScreen ? {fontSize: "2rem"} : {});
    const [locationStyles,] = useState(!isSmallScreen ? {fontSize: "2rem"} : {});

    const name = 'Raul J. Andrial';
    const accountingTitle = 'Revenue Accounting Manager';
    const techTitle = 'Full-Stack Software Engineer';
    const location = 'Miami, FL, USA';

    return (
        <div>
            <h1 className={classString} style={nameStyles}>
                {`${name}${accounting ? ', C.P.A.' : ''}`}
            </h1>
            <h2 className={classString} style={jobTitleStyles}>
                {tech ? techTitle : accountingTitle}
            </h2>
            <h3 className={classString} style={locationStyles}>
                {location}
            </h3>
        </div>
    );
};

export default HeaderInfo;