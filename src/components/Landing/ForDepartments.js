import React from 'react';
import GeneralCard from '../General/GeneralCard';


const ForDepartments = () => (
    <div className='container__blue'>
        <div id='oddeleni'></div>
        <h2>Informace pro ambulance a oddělení</h2>
        <div className='for-departments'>

            <GeneralCard
                cardHead='ODBĚRY'
                cardText='Informace ke odběrům, žádankám a vzorkům'
                cardLink='/odbery'
                cardImg='/images/forDepartments/about/draw_256.png'
            />

            <GeneralCard
                cardHead='SEZNAM METOD'
                cardText='Seznam metod prováděných v SNO a odesílaných do smluvních laboratoří.'
                cardLink='/metody'
                cardImg='/images/forDepartments/about/methods3_256.png'
            />

            <GeneralCard
                cardHead='ORGANIZACE PROVOZU'
                cardText='Kdy a jak laboratoř přijímá vzorky k analýze.'
                cardLink='/organizace'
                cardImg='/images/forDepartments/about/organization_256.png'
            
            />

            <GeneralCard
                cardHead='NÁVODY A POSTUPY'
                cardText='Návody týkající se laboratorních žádanek'
                cardLink='/navody'
                cardImg='/images/forDepartments/about/icons/help.svg'
            
            />

        </div>
    
    </div>
);

export default ForDepartments;