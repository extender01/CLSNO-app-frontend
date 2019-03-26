import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Generic from './DataComponents/Generic';



const LabMetCalculated = ({lm}) => (
    <React.Fragment>
        {!!lm && 
        <React.Fragment>
            
            <div className='f_stretch'>
                <Generic label='NUTNÉ METODY' value={depParse(lm.dependencies)} classNames='g1 colorName' />
                <Generic label='VZOREC' value={lm.formula} classNames='g1 colorSyn' />
                <Generic label='JEDNOTKY' value={lm.unit} classNames='g1 colorSyn' />
            </div>

        </React.Fragment>
        }
    </React.Fragment>

);

export default LabMetCalculated;



   
   
// takes string of calculated methods in format 'method1:id, method2:id', splits it do array for particular methods by ',' then it goes through each item, checks if it contains id (if there is :) if so,..
//..then create link to id and name it by method name. If there is no id then show just name in paragraph
const depParse = (dependencies)  => {
    console.log('probehlo parsovani nutnych metod', dependencies);
    let depArray = dependencies.split(',');
    console.log(depArray);
    return depArray.map((item) => {
        if (item.indexOf(':') === -1) {
            return item;
        } else {
            return <Link key={item} to={`/metody/detail/${item.substring(item.indexOf(':')+1)}`}>{item.substring(0, item.indexOf(':'))}</Link>;
        }
    });
    
};




LabMetCalculated.propTypes = {
    lm: PropTypes.object
};
    










