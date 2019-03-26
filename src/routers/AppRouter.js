import React from 'react';
import {Router, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import createHistory from 'history/createBrowserHistory';


import AdminRoute from './AdminRoute';

import MainHeader from '../components/Headers/MainHeader';
import AdminHeader from '../components/Headers/AdminHeader';

import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

import Landing from '../components/Landing/Landing';

import LabMetDash from '../components/LabMethods/LabMetDash';
import LabMetDetail from '../components/LabMethods/Detail/LabMetDetail';
import CustomNoteForm from '../components/LabMethods/Detail/DataComponents/CustomNoteForm';

import DrawDash from '../components/ForDepartments/Draws/DrawDash';
import DrawSystem from '../components/ForDepartments/Draws/DrawSystem/DrawSystem';
import DrawOrder from '../components/ForDepartments/Draws/DrawOrder/DrawOrder';
import DrawMistakesSummary from '../components/ForDepartments/Draws/DrawMistakes/DrawMistakesSummary';

import DrawGuideTemplate from '../components/ForDepartments/Draws/DrawGuide/DrawGuideTemplate';
import VADRecommendations from '../components/ForDepartments/Draws/DrawMistakes/VADRecommendations';

import FromMD from '../components/ForPatients/FromMD';
import FromSPL from '../components/ForPatients/FromSPL';
import OGTT from '../components/ForPatients/OGTT';

import Organization from '../components/ForDepartments/Organization/Organization';
import Transport from '../components/ForDepartments/Organization/Transport/Transport';
import Modes from '../components/ForDepartments/Organization/Modes/Modes';
import Reception from '../components/ForDepartments/Organization/Reception/Reception';
import Request from '../components/ForDepartments/Draws/Request/Request';
import Manuals from '../components/ForDepartments/Manuals/Manuals';
import Memo from '../components/ForDepartments/Manuals/Memo';
import Additional from '../components/ForDepartments/Manuals/Additional';
import ATB from '../components/ForDepartments/Manuals/ATB';

import AddTestPage from '../components/LabMethods/AddTestPage';
import EditTestPage from '../components/LabMethods/EditTestPage';
import LoginPage from '../components/LoginPage';
import Forbidden from '../components/Forbidden';
import NotFoundPage from '../components/NotFoundPage';
import SignupPage from '../components/SignupPage';

import Contact from '../components/Landing/Contact';

//import Footer from '../components/Headers/Footer';



//==============import JSON data =============
import drawGuideData from '../data/drawGuides.json';


//ScrollToTop is parrent component to all routes inside router, that when link is clicked, page is automatically scrolled to top - ScollToTop component says scroll to top on every component update and then render all children

export const history = createHistory();

const AppRouter = (props) => (
    <Router history={history}>
        <ScrollToTop>
            <MainHeader />
            {props.rights === 'admin' && <AdminHeader />}

            <div className='container'>
                {(!!props.user && !!props.labmets) &&
                <Switch>
                    <Route path='/' component={Landing} exact={true}/>

                    <Route path='/metody' component={LabMetDash} exact={true} />
                    <Route path="/metody/detail/:id" component={LabMetDetail} />
                    <Route path='/customNote/:id' component={CustomNoteForm} />
                    
                    <Route path='/odbery' component={DrawDash} />
                    <Route path='/odberovy-system' component={DrawSystem} />
                    <Route path='/odbery-poradi' component={DrawOrder} />
                    <Route path='/odbery-chyby' component={DrawMistakesSummary} />

                    <Route path='/odbery-zilni' render={props => <React.Fragment><DrawGuideTemplate data={drawGuideData.venipuncture} {...props}  /><VADRecommendations /></React.Fragment>} />
                    <Route path='/odbery-abr' render={props => <DrawGuideTemplate data={drawGuideData.abr} {...props}  />} />
                    <Route path='/odbery-glyk' render={props => <DrawGuideTemplate data={drawGuideData.glykemie} {...props}  />} />
                    <Route path='/odbery-moc-ranni' render={props => <DrawGuideTemplate data={drawGuideData.ranniMoc} {...props}  />} />
                    <Route path='/odbery-moc-sber' render={props => <DrawGuideTemplate data={drawGuideData.sbiranaMoc} {...props}  />} />
                    <Route path='/odbery-hambac' render={props => <DrawGuideTemplate data={drawGuideData.hambac} {...props}  />} />
                    <Route path='/odbery-stolice' render={props => <DrawGuideTemplate data={drawGuideData.hovno} {...props}  />} />

                    <Route path='/pacient-od-lekare' component={FromMD} />
                    <Route path='/pacient-samoplatce' component={FromSPL} />
                    <Route path='/pacient-ogtt' component={OGTT} />

                    <Route path='/organizace' component={Organization} />
                    <Route path='/transport' component={Transport} />
                    <Route path='/rezimy' component={Modes} />
                    <Route path='/prijem' component={Reception} />
                    <Route path='/zadanky' component={Request} />

                    <Route path='/navody' component={Manuals} exact={true} />
                    <Route path='/navody/memo' component={Memo} />
                    <Route path='/navody/dohlaska' component={Additional} />
                    <Route path='/navody/gentavanko' component={ATB} />

                    <Route path='/kontakty' component={Contact}/>

                    <AdminRoute path='/create' component={AddTestPage}/>
                    <AdminRoute path='/signup' component={SignupPage} />
                    <AdminRoute path='/edit/:id' component={EditTestPage} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/forbidden' component={Forbidden} />

                    <Route component={NotFoundPage}/>
                </Switch>
                }
            </div>

        </ScrollToTop>
    </Router>
);

const mapStateToProps = (state) => ({
    rights: state.users.user.rights,
    user: state.users.user.nick,
    labmets: state.labTests.tests
});

export default connect(mapStateToProps)(AppRouter);