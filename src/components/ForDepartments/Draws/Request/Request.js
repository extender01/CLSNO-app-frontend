import React from 'react';
import RequestItem from './RequestItem';
import data from '../../../../data/request/request.json';

const Request = () => (
    <div className='container__blue'>
        <div className='request'>
            <h1>ŽÁDANKY</h1>
            <p>Žádanky z nemocničních ambulancí a oddělení jsou tištěny v NIS Akord</p>
            <p>Žádanky pro externí žadatele dodá na požádání CL nebo jsou volně ke stažení ZDE</p>

            <div className='request__items'>
                <RequestItem info={data.request[0]} image='checked.png' />
                <RequestItem info={data.request[1]} image='checked.png' />
                <RequestItem info={data.request[2]} image='checked.png' />
                <RequestItem info={data.request[3]} image='error.png' />
            </div>
        </div>
    </div>
);

export default Request;