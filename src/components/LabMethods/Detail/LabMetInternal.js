import React from 'react';

import Generic from './DataComponents/Generic';
import GenericIcon from './DataComponents/GenericIcon';

import RefRange from './DataComponents/RefRange';



export default class LabMetInternal extends React.Component {
    constructor(props) {
        super(props);
        
    }


    responseNote = {
        _nextDay: 'Při doručení do laboratoře po 13:30 bude stanovení provedeno následující pracovní den voe pyco',
        _ahoj: 'Kuk jak se mas'
    };

    

    render () {
        //until props are loaded from redux, do not render any test details
        const {lm} = this.props;

        
        
        return (
            <React.Fragment>
                {!!lm && 
                    <React.Fragment>
                      
                        <div className='f_stretch'>
                            <GenericIcon label='RUTINA' value={lm.rutTime} isAvailable={true} classNames='g1 colorRunTime--yes'/>
                            <GenericIcon label='POHOTOVOST' value={lm.erTime}  isAvailable={lm.erCare} classNames={lm.erCare ? 'g1 colorRunTime--yes' : 'g1 colorRunTime--no'} />
                            <GenericIcon label='STATIM' value={lm.statTime} isAvailable={lm.statCare} classNames={lm.statCare ? 'g1 colorRunTime--yes' : 'g1 colorRunTime--no'} />
                            <GenericIcon label='DOHLÁŠKA' value={lm.additionalOrder} isAvailable={lm.additionalOrder} classNames={lm.additionalOrder ? 'g1 colorRunTime--yes' : 'g1 colorRunTime--no'} />
                            
                            {/* poznamka k dostupnosti - responseNote will rendeer only if it exists in db. If it is presaved string from this.responseNote (starts with _) it will render particular string from responseNote object, otherwise it will render plain text*/}
                            {lm.responseNote && (lm.responseNote.charAt(0) === '_' ?
                                <Generic label='POZNÁMKA K DOSTUPNOSTI' value={this.responseNote[lm.responseNote]} classNames='g1 colorRunTime' />
                                 :
                                 <Generic label='POZNÁMKA K DOSTUPNOSTI' value={lm.responseNote} classNames='g1 colorRunTime' />
                            )}
                        </div>
                        
                    
                        <div className='f_stretch'> 
                            <Generic label='JEDNOTKY' value={lm.unit} classNames='g1 colorUnit' />
                            <RefRange label='REFERENČNÍ MEZE' refRange={lm.refRange} classNames='g4 colorRefRange' />
                        </div>

                        

                        {(lm.interfereDown || lm.interfereUp || lm.physVar || lm.bioHalfLife) && <div className='f_stretch'>
                            {lm.interfereDown && <Generic label='SNIŽUJÍCÍ INTERFERENCE' value={lm.interfereDown} classNames='g1 colorInterference' />}
                            {lm.interfereUp && <Generic label='ZVYŠUJÍCÍ INTERFERENCE' value={lm.interfereUp} classNames='g1 colorInterference' />}
                        

                        
                            {lm.physVar && <Generic label='FYZIOLOGICKÁ VARIABILITA' value={lm.physVar} classNames='g1 colorInterference' />}
                            {lm.bioHalfLife && <Generic label='BIOLOGICKÝ POLOČAS' value={lm.bioHalfLife} classNames='g1 colorInterference' />}
                        </div>}


                    

                    </React.Fragment>
                }
            </React.Fragment>
            
        );
    }
}



