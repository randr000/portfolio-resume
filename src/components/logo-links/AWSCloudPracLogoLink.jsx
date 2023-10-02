import React from "react";
import { awsCertifiedCloudPractitioner } from "../../img/images";
import LogoLink from "./LogoLink";

const AWSCloudPracLogoLink = () => {
    return (
        <LogoLink
            src={awsCertifiedCloudPractitioner}
            alt="AWS Cloud Practitioner Certification Logo"
            href="https://www.credly.com/badges/8acee579-f2ee-42fe-bbd0-d0a17fabcbc9/public_url"
        />
    );
};

export default AWSCloudPracLogoLink;