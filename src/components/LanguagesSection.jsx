import React from "react";

const LanguagesSection = ({titleTheme, textTheme}) => {

    return (
        <>
            <hr/>
            <h1 className={titleTheme}>Languages</h1>
            <p className={textTheme}>English<br/>Spanish</p>
        </>
    );
};

export default LanguagesSection;