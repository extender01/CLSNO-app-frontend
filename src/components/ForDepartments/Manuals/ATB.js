import React from 'react';

const ATB = () => (
    <div className='container__blue'>
        <div className='atb'>
            <h1>Stanovení hladin gentamicinu / vankomycinu</h1>
            <p>Gentamicin a vankomycin mají relativně úzký terapeutický index a z toho důvodu je jejich použítí riskantní u pacientů s poškozením funkce ledvin. Monitorování hladin těchto antibiotik má pomoci k optimalizaci dávkování a ke snížení rizika toxicity. K této optimalizaci je kromě hladin ATB v krvi potřeba znát i další údaje.</p>
            
            <div className='atb__items'>
                <div className='atb__item'>
                    <h2>Potřebné údaje</h2>
                    <ul>
                        <li>Hmotnost, výška, věk a pohlaví pacienta</li>
                        <li>Druh podávaného antibiotika</li>
                        <li>Dávka a časové schéma podávání ATB s uvedením přesných časů</li>
                        <li>Koncentrace ATB a kreatininu v plasmě / séru před podáním ATB a po podání ATB</li>
                    </ul>
                </div>

                <div className='atb__item'>
                    <h2>Odběr</h2>
                    <p>Odběr pro stanovení ATB je potřeba provést z jiného místa než kde je aplikována infuze s ATB.</p>
                    <ul>Standardní pacienti:
                        <li>0 - 30 min před podáním ATB</li>
                        <li>Po podání ATB - 30 minut po dokapání infuze nebo 1hod po i.m. injekci</li>
                    </ul>
                    <ul>Hemodialyzovaní pacienti:
                        <li>Těsně před dialýzou</li>
                        <li>3-4 hod po dialýze, popřípadě následně 1 hod po podání ATB</li>
                    </ul>
                    <p>Každý vzorek je nutné označit přesným časem odběru (hodina i minuta, např. 8:50). Správný údaj o čase odběru pro TDM a čas podávání ATB výrazně ovlivní správnost a přesnost interpretace účinnosti ATB.</p>
                </div>

                <div className='atb__item atb__request'>
                    <h2>Vytvoření žádanky v Akordu a zápis potřebných údajů</h2>
                    <p>JE POTŘEBA VYTVOŘIT 2 ŽÁDANKY - ZVLÁŠŤ PRO ODBĚR PŘED PODÁNÍM A PRO ODBĚR PO PODÁNÍ</p>
                    <div className='atb__request__item'>
                        <p>V nové laboratorní žádance vyberte kategorii CL BIO - TDM antibiotik</p>
                        <p>Zaškrtněte požadované antibiotikum a klikněte OK</p>
                        <img src='/images/forDepartments/manuals/atb1.jpg' alt='Gentamicin Vankomycin' />
                    </div>

                    <div className='atb__request__item'>
                        <p>Klikněte na metodu &#34;dopiš údaje pro TDM&#34; a do políčka &#34;Předat hodnotu&#34; napište 1. </p>
                        <p>Do okna pod tímto políčkem napište tdm a pak zmáčkněte SOUČASNĚ Ctrl + mezerník</p>
                        <img src='/images/forDepartments/manuals/atb2.jpg' alt='Gentamicin Vankomycin' />

                    </div>


                    <div className='atb__request__item'>
                        <p>V okně se vám objeví předvyplněný text, kam dopíšete údaje, nutné k vyhodnocení</p>
                        <img src='/images/forDepartments/manuals/atb3.jpg' alt='Gentamicin Vankomycin' />

                    </div>


                    <div className='atb__request__item'>
                        <p>Žádanku s materiálem odešlete standardní cestou na příjem CL.</p>
                        <p>Laboratoř po změření telefonicky nahlásí naměřené sérové hladiny ATB a kreatininu klinickému farmaceutovi do lékárny SNO (PharmDr. Fialová nebo PharmDr. Zajícová). Tam vyhledají i ostatní zadané údaje a vyhodnotí TDM. Výsledek z laboratoře přichází na oddělení obvyklým způsobem.</p>
                        <p>Po vyhodnocení klinickým farmaceutem bude výsledek odeslán do Akordu. Kde jej najdete pod ikonou (tabletka R) nebo pod otazníkem jako hodnocení klinického farmaceuta.</p>
                        <img src='/images/forDepartments/manuals/atb4.jpg' alt='Gentamicin Vankomycin' />

                    </div>

                    


                </div>


                <div className='atb__item'>
                    <h2>Nejčastější chyby</h2>
                    <p>Pouze jedna žádanka pro oba odběry. Je potřeba vytvořit zvášť žádanku pro odběr před podáním ATB a po podání ATB.</p>
                    <p>Nevyplněná nebo nepřesná doba odběru (často je tam omylem hodina pořízení žádanky místo doby uskutečněného odběru).</p>
                    <p>Chybějící údaje o pacientovi (výška, váha, kreatinin).</p>
                    <p>Chybná technika odběru – materiál se musí odebírat z odlišného místa, než je ATB aplikováno.</p>
                    <p>U hemodialyzovaných pacientů nedodány parametry dialýzy (rychlost, dny a délka HD).</p>

                </div>
            </div>




        </div>
    </div>

);

export default ATB;