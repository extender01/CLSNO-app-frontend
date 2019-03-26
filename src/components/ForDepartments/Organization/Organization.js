import React from 'react';
import GeneralCard from '../../General/GeneralCard';

const Organization = () => (
    <div className='container__blue'>
        <div className='organization'>
            <GeneralCard
                cardHead='REŽIMY VYŠETŘENÍ' 
                cardText='RUTINA, POHOTOVOST, STATIM a DOHLÁŠKY' 
                cardLink='/rezimy' 
                cardImg='/images/organization/modes.svg' 
            />

            <GeneralCard
                cardHead='ČASOVÝ ROZPIS PŘÍJMU VZORKŮ' 
                cardText='Časový harmonogram příjmu vzorků na pavilony U a C' 
                cardLink='/prijem' 
                cardImg='/images/organization/timetable.svg' 
            />

            <GeneralCard
                cardHead='TRANSPORT DO LABORATOŘE' 
                cardText='Informace o podmínkách a pravidlech transportu vzorků do laboratoře' 
                cardLink='/transport' 
                cardImg='/images/organization/transport.svg' 
            />
        </div>
    </div>
);

export default Organization;