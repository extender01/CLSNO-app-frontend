import React from 'react';
import Instructions from './Instructions';


const FromSPL = () => (
    <React.Fragment>
        <div className='container__blue'>
            <div className='fromSPL'>
                <h1>Odběr krve a vyšetření jako samoplátce bez žádanky od lékaře</h1>
                <div className='fromSPL__item'>
                    <div className='fromSPL__item__map'>
                        <img src='/images/forPatients/spl.jpg' />
                    </div>
                    <div className='fromSPL__item__text'>
                        <h2>Samoplátce</h2>
                        <p>Za poplatek si můžete nechat provést biochemické a hematologické vyšetření prováděné v centrálních laboratořích SNO bez lékařského doporučení.</p>
                        <p>ZDE si můžete stáhnout a vytisknout žádanku a zvolit požadovaná vyšetření. Vzorově vyplněnou žádanku najdete ZDE.</p>
                        <p>V případě, že nemáte možnost si žádanku vytisknout, můžete si ji vyžádat u okýnka centrálního příjmu pavilonu U.</p>
                        <p>Ceník vyšetření naleznete zde (k samotným vyšetřením je ještě třeba připočítat poplatek za odběr a za separaci séra).</p>
                    </div>
                    <ul className='fromSPL__item__description'>
                        <li>S vyplněnou žádankou nahlášíte u příjmového okýnka centrálních laboratoří na pavilonu U, že si chcete nechat uvedené testy nechat vyšetřit jako samoplátce.</li>
                        <li>Pracovník Vám oznámí cenu za požadované vyšetření, kterou zaplatíte předem v hotovosti a oznámí Vám za jak dlouho je možné přijít si pro výsledek.</li>
                        <li>Poté počkáte v čekárně na provedení odběru krve.</li>
                        <li>Výsledky si můžete vyzvednout pouze osobně v tištěné podobě s platným průkazem totožnosti.</li>
                    </ul>
                </div>
            </div>
        </div>

        <Instructions />
    </React.Fragment>
);

export default FromSPL;