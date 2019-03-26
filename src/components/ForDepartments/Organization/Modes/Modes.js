import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {statimFilter, erFilter, additionalFilter} from '../../../../actions/filterActions';

const Modes = (props) => (
    <div className='container__white'>
        <div className='modes'>
            <h1>Režimy provozu</h1>
            <div className='modes__items'>
            
                <div className='modes__item'>
                    <div className='modes__item__heading'>
                        <h2>RUTINA</h2>
                    </div>

                    <div className='modes__item__description'>

                        <ul>
                            <li>Rutinní provoz ve všední dny 6:30 - 15:00</li>
                            <li>Výsledky vydávány do 5 hodin od přijmu do laboratoře</li>
                            <li>Výsledky odesílány do NIS a tištěny až po VŠ kontrole výsledků</li>
                            <li>Výsledky jsou k dispozici tentýž den s výjimkou vyšetření neprováděných denně a pozdě přijatých vzorků</li>
                        </ul>
                    </div>
                </div>

                <div className='modes__item'>
                    <div className='modes__item__heading'>
                        <h2>POHOTOVOST</h2>
                    </div>

                    <div className='modes__item__description'>
                        <ul>
                            <li>Pohotovost mimo rutinní dobu, tzn. všední dny 15:00 - 6:30 a víkendy a svátky celý den</li>
                            <li>Výsledky vydávány do 5 hodin od přijmu do laboratoře</li>
                            <li>Výsledky odesílány do NIS ihned</li>
                            <li>Výsledky tištěny až po VŠ kontrole výsledků</li>
                            <li onClick={props.showEr}><Link to='/metody'>SEZNAM METOD DOSTUPNÝCH V REŽIMU POHOTOVOST</Link></li>
                        </ul>
                    </div>
                </div>            

                <div className='modes__item'>
                    <div className='modes__item__heading'>
                        <h2>STATIM</h2>
                    </div>

                    <div className='modes__item__description'>
                        <ul>
                            <li>Příjem 24h non-stop</li>
                            <li>Výsledky obvykle do 1 hodiny od příjmu</li>
                            <li>Výsledky odesílány do NIS ihned</li>
                            <li>Výsledky tištěny až po VŠ kontrole výsledků</li>
                            <li>Statimové žádanky musí být zvlášť pro biochemii a pro hematologii</li>
                            <li>Statimová žádanka musí být jasně označena jako STATIM, v SNO žádanky na růžovém papíře</li>
                            <li>Externím žadatelům se výsledky hlásí telefonicky (na žádance musí být uveden kontakt)</li>
                            <li>Určeno pro závažné stavy a akutní změny stavu nemocných, kdy výsledky mohou rozhodujícím způsobem ovlivnit péči o nemocné. Mají přednost při vyšetřování ostatních materiálů. Neslouží ke zkrácení čekaní na výsledky pro ambulatní pacienty. Neoprávněné požadavky a požadavky nesplňující dohodnutá pravidla spolupráce se evidují a řeší s příslušným nadřízeným ordinujícího lékaře</li>
                            <li onClick={props.showStatim}><Link to='/metody'>SEZNAM METOD DOSTUPNÝCH V REŽIMU STATIM</Link></li>
                        </ul>
                    </div>
                </div>   
                
                <div className='modes__item'>
                    <div className='modes__item__heading'>
                        <h2>DOHLÁŠKA</h2>
                    </div>

                    <div className='modes__item__description'>
                        <ul>
                            <li>Z předchozího odběru lze po splnění podmínek provést dodatečná vyšetření</li>
                            <li>Dohlášku z odběru je možné požadovat u vybraných metod a to pouze 1x a maximálně do 24h nebo do 4h podle metody</li>
                            <li>Na dohlášku se vytváří nová žádanka a metody se vybírají ze sekce Dohlášky BIO a Dohlášky HEM</li>
                            <li>NÁVOD NA VYTVOŘENÍ ŽÁDANKY NA DOHLÁŠKU V NIS Akord ZDE</li>
                            <li onClick={props.showAdditional}><Link to ='/metody'>V sekci Metody najdete u každé metody informaci, zda je možné provést dohlášku.</Link></li>
                        </ul>
                    </div>
                </div>            

                <div className='modes__item'>
                    <div className='modes__item__heading'>
                        <h2>PO DOHODĚ S VŠ</h2>
                    </div>

                    <div className='modes__item__description'>

                        <ul>
                            <li>Zpracovává se po telefonické domluvě s VŠ</li>
                            <li>V denním provozu 7:00 – 15:00</li>
                            <li>So, Ne, Svátky 6:30 – 13:00</li>
                            <li>Jedná se hlavně o spektrofotometrii likvoru a hepatitidy v době víkendové a sváteční pohotovosti</li>
                        </ul>
                    </div>
                </div>            
                
            </div>




        </div>

    </div>
);

//clicking on specific li triggers function specified in mapDispatchToProps which dispatches action to change redux state (activated filters) to show only desired mode of methods, Link then redirects to methods
const mapDispatchToProps = (dispatch) => {
    return {
        showStatim: () => {
            dispatch(statimFilter(true));
        },
        showEr: () => {
            dispatch(erFilter(true));
        },
        showAdditional: () => {
            dispatch(additionalFilter(true));
        }
    };
};


Modes.propTypes = {
    showEr: PropTypes.func,
    showStatim: PropTypes.func,
    showAdditional: PropTypes.func
};

export default connect(undefined, mapDispatchToProps)(Modes);


