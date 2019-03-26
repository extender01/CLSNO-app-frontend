import React from 'react';
import Instructions from './Instructions';

const FromMD = () => (
    <React.Fragment>
        <div className='container__blue'>
            <div className='fromMD'>
                <h1>Odběr krve s žádankou od lékaře</h1>
                <div className='fromMD__item'>
                    <div className='fromMD__item__map'>
                        <img src='/images/forPatients/md.jpg' />
                    </div>
                    <div className='fromMD__item__text'>
                        <h2>Odběry</h2>
                        <p>Odběry se provádí v pondělí až pátek 6:30 - 10:45 v odběrové místnosti centrálních laboratoří (pavilon U)</p>
                        <p>Na odběr se není potřeba dopředu objednávat, kromě vyšetření orálního glukózového tolerančního testu (OGTT, &quot;test na cukrovku&quot;)</p>
                        <p>Pokud není lékařem uvedeno jinak, provádí se odběry v ranních hodinách nalačno</p>
                        <p>S žádankou příjdete do čekárny a počkáte na odběrovou sestru, která si od Vás vezme žádanku a poté si Vás zavolá k odběru</p>
                    </div>
                </div>
            </div>
        </div>

        <Instructions />
        
    </React.Fragment>
);

export default FromMD;