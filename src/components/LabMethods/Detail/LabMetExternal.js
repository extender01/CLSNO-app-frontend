import React from 'react';
import PropTypes from 'prop-types';

import Generic from './DataComponents/Generic';

const LabMetExternal = ({rights, lm}) => (
    <React.Fragment>
        {!!lm && 
            <React.Fragment> 
                {(rights === 'lab' || rights === 'admin') &&
                <div className='f_stretch'>
                    <Generic label='KDO POSILA' value={lm.parcelWho} classNames='g1 colorParcelInfo' />
                    <Generic label='LAB PREANAL' value={lm.parcelPreanal} classNames='g1 colorParcelInfo'/>
                    <Generic label='LAB POZNAMKA' value={lm.parcelNote} classNames='g1 colorParcelInfo'/>
                </div>   
                }          

                <div className='f_stretch'>
                    <Generic label='PROVÁDÍ SE' value={lm.extHowOften} classNames='g1 colorExtDetails' />
                    <Generic label='ODEZVA' value={lm.extResponse} classNames='g1 colorExtDetails'/>
                    <Generic label='JEDNOTKA' value={lm.unit} classNames='g1 colorExtDetails'/>
                    <Generic label='METODIKA' value={lm.metodics} classNames='g1 colorExtDetails'/>
                </div>
            </React.Fragment>
        }
    </React.Fragment>
);

LabMetExternal.propTypes = {
    rights: PropTypes.string,
    lm: PropTypes.object
};

export default LabMetExternal;





