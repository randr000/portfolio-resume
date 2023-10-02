import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import FIULogo from "./FIULogo";
import MDCLogo from "./MDCLogo";
import ForGeeksLogo from "./ForGeeksLogo";

const EducationSummary = ({titleTheme, textTheme}) => {

    const {appState, dispatch} = useContext(AppContext);
    const {accounting, tech} = appState;
    const eduSubsectionTheme = 'd-flex flex-row justify-content-between';
    const textStyles = {textAlign: 'left'};

    return (
        <>
            <hr/>
            <h1 className={titleTheme}>Education</h1>

            {
                tech &&
                <div>
                    <div className={eduSubsectionTheme}>
                        <p className={textTheme} style={textStyles}>
                            Miami Dade College
                            <br/>Cloud Computing
                            <br/>May 2023
                        </p>
                        <MDCLogo/>
                    </div>
                    <div className={eduSubsectionTheme}>
                        <p className={textTheme} style={textStyles}>
                            Miami Dade College
                            <br/>4Geeks Academy
                            <br/>Full-Stack Web Development
                            <br/>December 2022
                        </p>
                        <div><MDCLogo/><ForGeeksLogo/></div>
                    </div>
                </div>
            }


            <div className={eduSubsectionTheme}>
                <p className={textTheme} style={textStyles}>
                    M.S. Florida International University
                    <br/>Information Systems-Business Analytics Track
                    <br/>December 2021
                </p>
                <FIULogo/>
            </div>

            {
                accounting &&
                <div>
                    <div className={eduSubsectionTheme}>
                        <p className={textTheme} style={textStyles}>
                            M.S. Florida International University
                            <br/>Accounting
                            <br/>December 2013
                        </p>
                        <FIULogo/>
                    </div>
                    <div className={eduSubsectionTheme}>
                        <p className={textTheme} style={textStyles}>
                            B.S. Florida International University
                            <br/>Accounting and Finance
                            <br/>December 2011
                        </p>
                        <FIULogo/>
                    </div>
                </div>
            }
        </>
    );
};

export default EducationSummary;