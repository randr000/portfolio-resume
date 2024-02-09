import './App.css';
import { useReducer, useEffect } from 'react';
import AppContext from './context/AppContext';
import { Col, Row, Container, Image, ButtonGroup, Button } from 'react-bootstrap';
import { APP_INITIAL_STATE, appReducer } from './reducers/appReducer';
import APP_ACTION_TYPES from './action-types/appActionTypes';
import { useMediaQuery } from 'react-responsive';
import smallScreenMaxWidth from './smallScreenMaxWidth';

import { headshotAccounting } from './img/images';
import LinkedInLogoLink from './components/logo-links/LinkedInLogoLink';
import GitHubLogoLink from './components/logo-links/GitHubLogoLink';
import AWSCloudPracLogoLink from './components/logo-links/AWSCloudPracLogoLink';
import CPALogoLink from './components/logo-links/CPALogoLink';
import TechSkills from './components/skills/TechSkills';
import AccountingSkills from './components/skills/AccountingSkills';
import HeaderInfo from './components/HeaderInfo';
import EducationSummary from './components/education/EducationSummary';
import LanguagesSection from './components/LanguagesSection';
import AccountingDetails from './components/AccountingDetails';
import TechDetails from './components/TechDetails';
import FooterDetails from './components/FooterDetails';
import Chatbot from './components/chatbot/Chatbot';


function App() {

  const [appState, dispatch] = useReducer(appReducer, APP_INITIAL_STATE);
  const {tech, accounting} = appState;
  const {TECH, ACCOUNTING} = APP_ACTION_TYPES;

  const isSmallScreen = useMediaQuery(smallScreenMaxWidth);

  const sideSectionTitleTheme = 'google-font-800 fs-4 text-center';
  const sideSectionDetailTextTheme = 'google-font-400';

  useEffect(() => {
    // navigate to accounting or tech page depending on page typed in url bar
    const acctg = [
      'accounting', 'acctg', 'actg', 'finance', 'accntng', 'acounting',
      'acouting', 'count', 'cnt', 'acc', 'accg', 'fin', 'fnnc', 'fnce'
  ];
    const {page} = getURLparts();
    if (acctg.includes(page)) handleAccountingClick();
    else handleTechClick();
  }, [window.location.pathname]);


  /**
   * Returns the protocol, host, pathname, and page of the url
   * 
   * @returns {Object} An object containing the different parts of the url
   * @returns {string} protocol - A string representing the protocol ex. 'http:' or 'https:'
   * @returns {string} host - A string representing the hostname of the site.
   * @returns {Array} path - An array of strings containing the site path after the hostname
   * @returns {string} page - The current page the site is on. This will always be the last item in the path array.
   */
  function getURLparts() {
    const path = window.location.pathname.split('/');
    return {
      protocol: window.location.protocol,
      host: window.location.host,
      path: path,
      page: path[path.length - 1]
    };
  }

  /**
   * Generates the new URL string for the site
   * 
   * @param {string} page - The page name to display. Should only be 'tech' or 'accounting'.
   * @returns {void} This function does not return any value.
   */
  function generateURL(page) {
    const {protocol, host, path} = getURLparts();
    path[path.length - 1] = page;
    const url = `${protocol}//${host}${path.join('/')}`
    window.history.replaceState(null, document.title, url);
  }

  /**
   * Event handler for when tech button is clicked
   * 
   * @returns {void} This function does not return any value
   */
  function handleTechClick() {
    dispatch({type: TECH});
    generateURL(TECH.toLowerCase());
  }

  /**
   * Event handler for when accounting button is clicked
   * 
   * @returns {void} This function does not return any value
   */
  function handleAccountingClick() {
    dispatch({type: ACCOUNTING});
    generateURL(ACCOUNTING.toLowerCase());
  }

  return (
    <div className="App">
      <AppContext.Provider value={{appState: appState, dispatch: dispatch}}>
        <Chatbot/>
        <Container fluid>
          <Row className="vh-100">
            <Col xs={12} md={3} className="background-gray text-white google-font-800">
              <Image src={headshotAccounting} alt="headshot" className="my-1 p-lg-3 p-1 mx-auto d-block" fluid roundedCircle/>
              <ButtonGroup className="mb-4 d-flex">
                <Button variant="secondary" className="border" onClick={handleTechClick}>Tech</Button>
                <Button variant="secondary" className="border" onClick={handleAccountingClick}>Accounting</Button>
              </ButtonGroup>
              {isSmallScreen && <HeaderInfo/>}
        
              <div className="d-flex flex-row justify-content-center">
                <LinkedInLogoLink/>
                {tech && <GitHubLogoLink/>}
              </div>
              <hr/>
              <h1 className={sideSectionTitleTheme}>Certifications</h1>
              <div className="d-flex flex-row justify-content-center">
                <AWSCloudPracLogoLink/>
                {accounting && <CPALogoLink/>}
              </div>
              {tech && <TechSkills theme={sideSectionTitleTheme}/>}
              {accounting && <AccountingSkills theme={sideSectionTitleTheme}/>}
              <EducationSummary titleTheme={sideSectionTitleTheme} textTheme={sideSectionDetailTextTheme}/>
              <LanguagesSection titleTheme={sideSectionTitleTheme} textTheme={sideSectionDetailTextTheme}/>
            </Col>
            <Col xs={12} md={9} className="text-gray google-font-800 fs-5">
              {!isSmallScreen && <HeaderInfo/>}
              {accounting && <AccountingDetails/>}
              {tech && <TechDetails/>}
              <FooterDetails/>
            </Col>
          </Row>
        </Container>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;