import React from "react";
import { useMediaQuery } from 'react-responsive';
import smallScreenMaxWidth from "../smallScreenMaxWidth";

const AccountingDetails = () => {


    const isSmallScreen = useMediaQuery(smallScreenMaxWidth);

    // For some reason I am not able to override bootstrap's default styling for 'hr'.
    // This is true event when using inline styles.
    // As a workaround, I created an empty div element and applied the following styles to it.
    const hrStyles = {
        border: '.25rem solid #333B4C',
        borderRadius: '1rem'
    };

    const hrClasses = 'w-50 mx-auto my-3';

    const companyDateHeaderDivClasses = `d-flex ${isSmallScreen ? 'flex-column mt-3' : 'flex-row mt-4'} justify-content-between mx-3`;
    const jobTitleHeaderDivClasses = `d-flex flex-row ${isSmallScreen ? 'justify-content-center' : 'flex-start'} ms-3`;

    const ulClasses = `google-font-500 d-flex flex-column align-items-start ${isSmallScreen ? 'mb-4' : 'ms-5 mb-5'}`;
    const ulStyles = {textAlign: 'left'};

    const headerClasses = 'google-font-500';

    const h2Styles = {fontSize: "3.5rem"};
    const h3Styles = {fontSize: isSmallScreen ? '1.5rem' : '2.25rem'};
    
    return (
        <div>
            <div className={hrClasses} style={hrStyles}></div>

            <h2 className={headerClasses} style={h2Styles}>Work Experience</h2>

            <div className={companyDateHeaderDivClasses}>
                <h3 className={headerClasses} style={h3Styles}>Interval International</h3>
                <h3 className={headerClasses} style={h3Styles}>Nov{`${isSmallScreen ? '.' : 'ember'}`} 2018 - Present</h3>
            </div>

            <div className={jobTitleHeaderDivClasses}>
                <h3 className={headerClasses} style={h3Styles}>Revenue Accounting Manager</h3>
            </div>

            <ul className={ulClasses} style={ulStyles}>
                <li>Supervise month-end GL and accounts receivable/billing processes</li>
                <li>Review contracts to calculate developer rebates and ensured they are recorded in accordance with US GAAP</li>
                <li>Prepare monthly and quarterly intercompany and balance sheet reconciliations</li>
                <li>Coordinate internal and external audit requests and associated testing</li>
                <li>Supervise Senior Revenue Accountant</li>
                <li>Responsible for ongoing analysis of existing reports and processes</li>
                <li>Automated reports and journal entries using advanced Excel formulas, VBA macros, & PivotTables</li>
            </ul>

            <div className={hrClasses} style={hrStyles}></div>

            <div className={companyDateHeaderDivClasses}>
                <h3 className={headerClasses} style={h3Styles}>Interval International</h3>
                <h3 className={headerClasses} style={h3Styles}>Aug{`${isSmallScreen ? '.' : 'ust'}`} 2015 - Nov{`${isSmallScreen ? '.' : 'ember'}`} 2018</h3>
            </div>

            <div className={jobTitleHeaderDivClasses}>
                <h3 className={headerClasses} style={h3Styles}>Senior Accountant</h3>
            </div>

            <ul className={ulClasses} style={ulStyles}>
                <li>Reviewed and administered space procurement contracts to be able to adequately determine the liability</li>
                <li>Created multiple Access databases with custom queries in order to speed up the preparation of journal entries and compilation of reports</li>
                <li>Analyzed data provided by Inventory Revenue Management and compiled reports to ensure monthly space expense was recorded accurately</li>
                <li>Reviewed the monthly space payable journal entry prepared by the Senior Accounting clerk</li>
                <li>On a monthly basis, compiled cost information by product line and prepared cost schedules used to support the company's deferral of membership fulfillment materials</li>
                <li>Created Access Database with custom forms and VBA code to automate compilation and journal preparation</li>
                <li>Enforced company policies and procedures as they related to depreciation, recording, and reporting of company's fixed assets</li>
                <li>Reviewed the processing of capital expenditures, long term maintenance contracts, prepaid managed services, and software agreements to determine the appropriate accounting required</li>
                <li>Prepared monthly and quarterly account reconciliations and analyzed variances</li>
            </ul>

            <div className={hrClasses} style={hrStyles}></div>

            <div className={companyDateHeaderDivClasses}>
                <h3 className={headerClasses} style={h3Styles}>Goldstein Schechter Koch</h3>
                <h3 className={headerClasses} style={h3Styles}>Jan{`${isSmallScreen ? '.' : 'uary'}`} 2014 - Jul{`${isSmallScreen ? '.' : 'y'}`} 2015</h3>
            </div>

            <div className={jobTitleHeaderDivClasses}>
                <h3 className={headerClasses} style={h3Styles}>Assurance Associate</h3>
            </div>

            <ul className={ulClasses} style={ulStyles}>
                <li>Performed audit procedures for clients of various sizes and industries</li>
                <li>Identified and communicated accounting and audit matters to senior associates and managers</li>
                <li>Proposed adjusting journal entries and discussed audit findings with clients</li>
                <li>Drafted management representation letters and financial statements</li>
            </ul>

            <div className={hrClasses} style={hrStyles}></div>

            <div className={companyDateHeaderDivClasses}>
                <h3 className={headerClasses} style={h3Styles}>Parmenter Realty Partners</h3>
                <h3 className={headerClasses} style={h3Styles}>Jan{`${isSmallScreen ? '.' : 'uary'}`} 2012 - Jan{`${isSmallScreen ? '.' : 'uary'}`} 2014</h3>
            </div>

            <div className={jobTitleHeaderDivClasses}>
                <h3 className={headerClasses} style={h3Styles}>Accounts Payable {`${isSmallScreen ? '&' : 'and'}`} Property Accountant</h3>
            </div>

            <ul className={ulClasses} style={ulStyles}>
                <li>Responsible for the accurate recording of all cash, fixed assets, liabilities, expenses, and revenue for multiple properties</li>
                <li>Assembled debt compliance packages to lenders</li>
                <li>Monitored and properly accounted CIP for tenant and building improvements</li>
                <li>Read, interpreted, and abstracted loan and lease documents</li>
                <li>Prepared monthly bank reconciliations</li>
                <li>Entered payables at the corporate and fund levels</li>
                <li>Processed checks at the corporate, fund, and property levels</li>
            </ul>

        </div>
    );
};

export default AccountingDetails;