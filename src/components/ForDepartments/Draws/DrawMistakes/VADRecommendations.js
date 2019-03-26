import React from 'react';

const VADRecommendations = () => (
    <div className='container__blue'>
        <div className='VADRec'>
            <h3>Doporučení při odběru krve přes katetr / kanylu</h3>
            <p>Za standardních podmínek vzhledem k vyššímu riziku hemolýzy a kontaminace infuzním roztokem <span className='important' >není odběr krve přes žilní přístup doporučen a měl by být prováděn jen v klinicky nutných případech</span></p>

            <div className='VADRec__item'>
                <div className='VADRec__item__heading'>
                    <h4>ZASTAVIT INFUZI</h4>
                    <img src='/images/mistakes/stop.svg' />
                </div>
                <div className='VADRec__item__text'>
                    <p>Před odběrem krve je potřeba zastavit kapání infuze minimálně na 2 minuty</p>
                    <p>U centrálního přístupu minimálně 10 minut, ale neexistuje dostatek ověřených dat</p>
                    <p>Vhodnější je odběr ještě před započetím aplikace infuze</p>
                </div>
            </div>

            <div className='VADRec__item'>
                <div className='VADRec__item__heading'>
                    <h4>ČISTÉ TRUBKY</h4>
                    <img src='/images/mistakes/pipes.jpg' />
                </div>
                <div className='VADRec__item__text'>
                    <p>Doporučuje se proplach minimálně 10 ml fyziologického roztoku bez dalších aditiv (ne heparin nebo citrát - ty musí pryč)</p>
                    <p>Před odsáváním krve nesmí být v hadičky takto pročištěny</p>
                </div>
            </div>   
            
            <div className='VADRec__item'>
                <div className='VADRec__item__heading'>
                    <h4>ODSÁT A VYHODIT</h4>
                    <img src='/images/forDepartments/draw/VAD_discard.jpg' />
                </div>
                <div className='VADRec__item__text'>
                    <p>První nasávaná krev se musí vyhodit, dokud není zcela vymytý fyziologický roztok z hadiček pryč.</p>
                    <p>Jaký objem vyhodit?...Závisí na objemu vnitřního prostoru hadiček. Doporučení je více a mírně se od sebe liší, proto čím více odsáté krve, tím menší riziko kontaminace</p>
                    <ul className='VADRec__item__text--special'>Doporučení CLSI GP 41-A6 a INS 2016 Standard:
                        <li>2x objem hadiček pro nekoagulační testy, minimálně 2 ml</li>
                        <li>6x objem hadiček pro koagulační testy, minimálně 5 ml</li>
                        <li>U centrálních přístupů 6 ml pro netunelové katetry a 9 ml pro tunelové katetry</li>
                    </ul>
                </div>
            </div>   

            <div className='VADRec__item'>
                <div className='VADRec__item__heading'>
                    <h4>PŘIPOJENÍ ZKUMAVKY</h4>
                    <img src='/images/mistakes/tube_connection.jpg' />
                </div>
                <div className='VADRec__item__text'>
                    <p>Vakuum ve zkumavce je vhodné pro standardní odběr přes jehlu. Při odběru přes katetr jsou však krvinky vystaveny větším třecím silám a existuje signifikantně vyšší riziko hemolýzy. Proto je doporučeno používat zkumavky s menším celkovým objemem, kde je podtlak menší a tím i menší riziko hemolýzy</p>
                    <p>Pozor však na nabrání dostatečného objemu pro všechna vyšetření a dodržení správného poměru objemů krve a aditiv ve zkumavce</p>
                    <p>Je doporučeno používat speciální konektory pro napojení a napíchnutí zkumavek</p>
                </div>
            </div>   
        </div>
    </div>
);

export default VADRecommendations;