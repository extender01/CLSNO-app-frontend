import React from 'react';
import GeneralCard from '../General/GeneralCard';

const ForPatients = () => (
    <div className='container__blue'>
        <div id='pacienti'></div>
        <h2>Informace pro pacienty</h2>

        <div className='for-patients'>

            <GeneralCard 
                cardHead='JDU OD LÉKAŘE S ŽÁDANKOU NA ODBĚR' 
                cardText='Informace o odběrech, prováděných pro ambulance a oddělení' 
                cardLink='/pacient-od-lekare' 
                cardImg='/images/landing/mudr.svg'    
            />

            <GeneralCard 
                cardHead='CHCI SI SÁM NECHAT UDĚLAT VYŠETŘENÍ JAKO SAMOPLÁTCE' 
                cardText='Informace pro ty, kteří si chtějí sami nechat udělat a zaplatit vyšetření' 
                cardLink='/pacient-samoplatce' 
                cardImg='/images/landing/spl.svg'    
            />

            <GeneralCard 
                cardHead='OGTT' 
                cardText='Informace o orálně glukózovém tolerančním testu (test na cukrovku)' 
                cardLink='/pacient-ogtt' 
                cardImg='/images/landing/ogtt.svg'    
            />

        </div>
    </div>
);

export default ForPatients;