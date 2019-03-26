import React from 'react';


const OGTT = () => (
    <React.Fragment>
        <div className='container__blue'>
            <div className='ogtt'>
                <h1>Orálně glukózový toleranční test (OGTT), &quot;test na cukrovku&quot;</h1>
                <div className='ogtt__item'>
                    <div className='ogtt__item__map'>
                        <img src='/images/forPatients/ogtt.jpg' />
                    </div>

                    <div className='ogtt__item__text'>
                        <h2>OGTT</h2>
                        <p>OGTT se provádí u pacientů s podezřením na cukrovku a také jako screeningový test v těhotenství standardně mezi 24. a 28. týdnem těhotenství</p>
                        <p>Při předchozím výskytu se test provádí půl roku po porodu a v případě dalšího těhotenství ve 13. týdnu těhotenství</p>
                        <p>Na test je potřeba mít žádanku od lékaře a dopředu se objednat na tel. 553 766 437. Je vhodné volat zhruba dva týdny před plánovaným termínem testu.</p>
                        <p>Test se provádí každý pracovní den v 7:30 a trvá zhruba do 10. hodin. Denní kapacita je 6 pacientů</p>
                    </div>

                    <div className='ogtt__item__description'>
                        <h2>Pokyny před odběrem</h2>
                        <ul>
                            <li>Odběr se provádí nalačno. Den před testem se navečeříte a po 23. hodině až do testu už nekonzumujete žádné jídlo</li>
                            <li>Pijete normální množství tekutin, jak jste zvyklí, ale NIC SLADKÉHO</li>
                            <li>Vezměte si s sebou žádanku na test od lékaře</li>
                            <li>Dostavte se v 7:20 do odběrové místnosti pavilonu U ve Slezské nemocnici v Opavě. Počkejte v čekárně na odběrovou sestru, která Vám sdělí instrukce</li>
                            <li>V případě, že onemocníte nebo se nebudete cítit dobře, zavolejte na číslo 553 766 437 a přeobjednejte se na jiný termín.</li>
                        </ul>
                    </div>

                    <div className='ogtt__item__description'>
                        <h2>Pokyny k testu</h2>
                        <ul>
                            <li>Sestra Vás poučí o průbehu testu a před započetím podepíšete informovaný souhlas</li>
                            <li>Nejprve Vám bude odebrána krev nalačno a bude zjištěno zda můžete test podstoupit.</li>
                            <li>V případě, že nesplníte kritérium hladiny cukru u odběru nalačno, test je ukončen a budete odeslání na diabetologii, kde bude konzultován další postup</li>
                            <li>V případě, že kritérium splníte, dá Vám sestra vypít 0,5 litru sladké vody a po 1 hodině a po 2 hodinách (u netěhotných pouze po 2 hodinách) Vám bude odebrána krev znovu na stanovení glukózy v krvi</li>
                            <li>V průběhu testu neodcházejte z čekárny a případné obtíže ihned hlašte odběrové sestře</li>
                            <li>V průběhu testu nesmíte nic jíst ani pít</li>
                            <li>O výsledky testu si zavolejte následující pracovní den do diabetologické poradny na číslo...</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default OGTT;