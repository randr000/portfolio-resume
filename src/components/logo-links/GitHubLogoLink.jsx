import React from "react";
import { gitHubLogo } from "../../img/images";
import LogoLink from "./LogoLink";

const GitHubLogoLink = () => {
    return (
        <LogoLink src={gitHubLogo} alt="GitHub Logo" href="https://github.com/randr000"/>
    );
};

export default GitHubLogoLink;