import React from 'react';

const DrawOrder = () => (
    
    <div className='container__blue'>
        <div className='draw__order'>
            <h1>Doporučené pořadí zkumavek při odběru</h1>

            <div className='draw__order__item'>
                <div className='hemoculture'></div>
                <p className='draw__order__item--additive'>1. Odběr na hemokultury</p>
                <p className='draw__order__item--example'>Odběrové nádoby určené na hemokultivaci</p>
            </div>   
            
            <div className='draw__order__item'>
                <img src='/images/forDepartments/drawsystem/koag.png' height='64px' />
                <p className='draw__order__item--additive'>2. Citrát sodný</p>
                <p className='draw__order__item--example'>Koagulace</p>
            </div>  
            
            <div className='draw__order__item'>
                <img src='/images/forDepartments/drawsystem/sed.png' height='64px' />
                <p className='draw__order__item--additive'>2. Citrát sodný</p>
                <p className='draw__order__item--example'>Sedimentace</p>
            </div>  
            
            <div className='draw__order__item'>
                <img src='/images/forDepartments/drawsystem/se.png' height='64px' />
                <p className='draw__order__item--additive'>4. Akcelerátor srážení bez gelu</p>
                <p className='draw__order__item--example'>Biochemie, RIA</p>
            </div>

            <div className='draw__order__item'>
                <img src='/images/forDepartments/drawsystem/sg.png' height='64px' />
                <p className='draw__order__item--additive'>4. Akcelerátor srážení s gelem</p>
                <p className='draw__order__item--example'>Biochemie</p>
            </div>  
            
            <div className='draw__order__item'>
                <img src='/images/forDepartments/drawsystem/pli.png' height='64px' />
                <p className='draw__order__item--additive'>5. Lithium heparin</p>
                <p className='draw__order__item--example'>Statim, hsTnI, NT-proBNP</p>
            </div>  

            <div className='draw__order__item'>
                <img src='/images/forDepartments/drawsystem/edta.png' height='64px' />
                <p className='draw__order__item--additive'>6. K2EDTA</p>
                <p className='draw__order__item--example'>KO, amoniak, laktát, homocystein</p>
            </div>  

            <div className='draw__order__item'>
                <img src='/images/forDepartments/drawsystem/naf.png' height='64px' />
                <p className='draw__order__item--additive'>7. K2EDTA, NaF</p>
                <p className='draw__order__item--example'>Glykemie</p>
            </div>  
        </div>
    </div>
);

export default DrawOrder;