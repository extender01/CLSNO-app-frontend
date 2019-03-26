import React from 'react';

import Contact from './Contact';
import Jumbotron from './Jumbotron';
import Departments from './Departments';
import ForPatients from './ForPatients';
import ForDepartments from './ForDepartments';

const Landing = () => (
    <React.Fragment>
        <Jumbotron />
        <ForDepartments />
        <ForPatients />
        <Departments />
        <Contact />
    </React.Fragment>
);

export default Landing;
