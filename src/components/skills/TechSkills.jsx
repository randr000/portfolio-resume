import React from 'react';
import HTML5Logo from './HTML5Logo';
import CSS3Logo from './CSS3Logo';
import JSLogo from './JSLogo';
import TailwindCSSLogo from './TailwindCSSLogo';
import BootstrapLogo from './BootstrapLogo';
import ReactLogo from './ReactLogo';
import NextJSLogo from './NextJSLogo';
import ExpressJSLogo from './ExpressJSLogo';
import PythonLogo from './PythonLogo';
import FastAPILogo from './FastAPILogo';
import HuggingFaceLogo from './HuggingFaceLogo';
import JupyterLogo from './JupyterLogo';
import SQLLogo from './SQLLogo';
import VBALogo from './VBALogo';

const TechSkills = ({theme}) => {

    return (
        <>
            <hr/>
            <h1 className={theme}>Skills</h1>
            <HTML5Logo/>
            <CSS3Logo/>
            <JSLogo/>
            <TailwindCSSLogo/>
            <BootstrapLogo/>
            <ReactLogo/>
            <NextJSLogo/>
            <ExpressJSLogo/>
            <PythonLogo/>
            <FastAPILogo/>
            <HuggingFaceLogo/>
            <JupyterLogo/>
            <SQLLogo/>
            <VBALogo/>
        </>
    );
};

export default TechSkills;