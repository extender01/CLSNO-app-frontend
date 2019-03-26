import React from 'react';
import PropTypes from 'prop-types';

import Generic from './DataComponents/Generic';
import Where from './DataComponents/Where';
import WhenTransport from './DataComponents/WhenTransport';
import Draw from './DataComponents/Draw';
import CustomNote from './DataComponents/CustomNote';

const LabMetGeneric = ({lm, rights}) => (
    <React.Fragment>
        {!!lm && 
        <React.Fragment>
            <div className='f_stretch'>
                <h1>{lm.name}</h1>
            </div>
            <div className='f_stretch'>
                <Generic label='NÁZEV' value={lm.name} classNames='g1 colorName' />
                <Generic label='SYNONYMA' value={lm.syn} classNames='g1 colorSyn' />

                <Generic label='NÁZEV V AKORDU' value={lm.nameAk} classNames='g1 colorNameAk' />
                <Generic label='SKUPINY V AKORDU' value={lm.groupAk} classNames='g1 colorGroupAk' />
            </div>

            {lm.category === 'external' &&
            <div className='f_stretch'>
                <Where where={lm.where} classNames='g1 colorWhere'/>
                <WhenTransport where={lm.where} classNames='g2 colorWhenTransport' />  
            </div> 
            }

            <div className='f_stretch'>
                <Draw draw={lm.draw} classNames='g1 colorDraw' />
                <Generic label='PREANALYTICKÁ FÁZE' value={lm.preanal ? lm.preanal : 'Standardní podmínky preanalytické fáze'} classNames='g1 colorPreanal' />
            
                {lm.note && <Generic label='OBECNÁ POZNÁMKA' value={lm.note}  classNames='g1 colorNote'/>}
                {rights === 'department' && 
                    <CustomNote label='VAŠE POZNÁMKA' _id={lm._id} customNote={lm.customNotes[0] !== undefined ? lm.customNotes[0] : 'Kliknutím na tužku přidáte vlastní poznámku'} classNames='g1 colorCustomNote' />
                }
            </div>
        </React.Fragment>
        }
    </React.Fragment>

);

LabMetGeneric.propTypes = {
    lm: PropTypes.object,
    rights: PropTypes.string

};

export default LabMetGeneric;









