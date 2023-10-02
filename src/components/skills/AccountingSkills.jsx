import React from 'react';
import AppContext from '../../context/AppContext';
import ExcelLogo from './ExcelLogo';
import AccessLogo from './AccessLogo';
import WordLogo from './WordLogo';
import VBALogo from './VBALogo';
import PeopleSoftLogo from './PeopleSoftLogo';

const AccountingSkills = ({theme}) => {

    return (
        <>
            <hr/>
            <h1 className={theme}>Computer Skills</h1>
            <ExcelLogo/>
            <AccessLogo/>
            <WordLogo/>
            <VBALogo/>
            <PeopleSoftLogo/>
        </>
    );
};

export default AccountingSkills;