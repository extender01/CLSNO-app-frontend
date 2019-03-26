import React from 'react';
import TransportItem from './TransportItem';
import transportData from '../../../../data/transport/transport.json';

const Transport = () => (
    <div className='container__white'>
        <div className='transport'>
            <h2>Transport do laboratoře</h2>
            <p>Transport do laboratoře je kritickou částí preanalytické fáze. Pro obdržení validních výsledků je potřeba dodržovat několik důležitých pravidel</p>
            <div className='transport__items'>
                {transportData.transport.map((item, index) => (
                    <TransportItem key={index} transport={item} />
                ))}
            </div>
        </div>   
    </div>
);

export default Transport;