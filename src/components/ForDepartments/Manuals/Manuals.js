import React from 'react';
import GeneralCard from '../../General/GeneralCard';

const Manuals = () => (
    
    <div className='container__blue>'>
        <div className='manuals'>
            <GeneralCard
                cardHead='ZOBRAZENÍ KOMENTÁŘE K VÝSLEDKU' 
                cardText='Jak zobrazit komentář u výsledku metody v NIS Akord' 
                cardLink='/navody/memo' 
                cardImg='/images/forDepartments/manuals/memo.jpg' 
            />

            <GeneralCard
                cardHead='ŽÁDANKY NA GENTAMICIN A VANKOMYCIN' 
                cardText='Jak vytvořit žádanku na stanovení antibiotik Gentamicinu nebo vankomycinu' 
                cardLink='/navody/gentavanko' 
                cardImg='/images/forDepartments/manuals/atb.jpg' 
            />

            <GeneralCard
                cardHead='VYTVOŘENÍ DOHLÁŠKY' 
                cardText='Jak vytvořit žádanku k dohlášení vyšetření z jiného odběru' 
                cardLink='/navody/dohlaska' 
                cardImg='/images/forDepartments/manuals/dohl.jpg' 
            />
        </div>
    </div>
);

export default Manuals;