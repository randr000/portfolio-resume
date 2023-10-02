import React from "react";
import { cpaLogo } from "../../img/images";
import LogoLink from "./LogoLink";

const CPALogoLink = () => {
    return (
        <LogoLink
            src={cpaLogo}
            alt="CPA Logo"
            href="https://www.myfloridalicense.com/LicenseDetail.asp?SID=&id=9AE5479790EFA1F3FB9A96CF79234EEC"
        />
    );
};

export default CPALogoLink;