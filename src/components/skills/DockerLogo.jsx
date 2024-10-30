import React from "react";
import SkillLogo from "./SkillLogo";
import { dockerLogo } from "../../img/images";

export const DockerLogo = () => {
    return (
        <SkillLogo src={dockerLogo} alt="Docker Logo"/>
    );
};

export default DockerLogo;