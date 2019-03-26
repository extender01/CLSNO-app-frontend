import React from 'react';

const Contact = () => (
    <div id='kontakt' className='container__blue'>
        <div className='general__heading'>     
            <h1>Kontakty</h1>
            <p>553 76 XXXX</p>
        </div>

        <div className='general__line'>
            
            <div className='contact__boss' >
                <h4>Primář</h4>
                <p>Vladimír Kurfürst</p>
                <p>553 76 6430</p>
                <p>vladimir.kurfurst@snopava.cz</p>
            </div>
            
            <div className='contact__boss' >
                <h4>Vrchní laborant</h4>
                <p>Eva Grabcová</p>
                <p>553 76 6432</p>
                <p>eva.grabcova@snopava.cz</p>
            </div>
        </div>


        <div className='general__line'>
            <div className='contact__table' >
                <h4>Centrální laboratoře</h4>
                <table className='contact__table--cl'>
                    <tbody>
                        <tr>
                            <td>Primář</td>
                            <td>6430</td>
                        </tr>
                        <tr>
                            <td>Zástupce primáře</td>
                            <td>6431</td>
                        </tr>
                        <tr>
                            <td>Vedoucí laborantka</td>
                            <td>6432</td>
                        </tr>
                        <tr>
                            <td>Administrativní pracovník, příjem</td>
                            <td>6433</td>
                        </tr>
                        <tr>
                            <td>Příjem hematologie</td>
                            <td>6436</td>
                        </tr>
                        <tr>
                            <td>Třídění materíálu, externí vyšetření</td>
                            <td>6568</td>
                        </tr>
                        <tr>
                            <td>Odběrová místnost</td>
                            <td>6267</td>
                        </tr>
                        <tr>
                            <td>Technik</td>
                            <td>6439</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className='contact__table'>
                <h4>Úsek biochemie</h4>
                <table className='contact__table--bch'>
                    <tbody>
                        <tr>
                            <td>Pracovna VŠ - kontrola kvality</td>
                            <td>6693</td>
                        </tr>
                        <tr>
                            <td>Pracovna VŠ</td>
                            <td>6434</td>
                        </tr>
                        <tr className='pohotovost'>
                            <td>POHOTOVOST</td>
                            <td>6437</td>
                        </tr>
                        <tr>
                            <td>Astrup, glykemie</td>
                            <td>6437</td>
                        </tr>
                        <tr>
                            <td>Močová laboratoř</td>
                            <td>6435</td>
                        </tr>
                        <tr>
                            <td>Automat RUTINA</td>
                            <td>6438</td>
                        </tr>
                        <tr>
                            <td>Automat STATIM</td>
                            <td>6268</td>
                        </tr>
                        <tr>
                            <td>Elektroforéza</td>
                            <td>6442</td>
                        </tr>
                    </tbody>
                </table>  
            </div>
        </div>

        <div className='general__line'> 
            <div className='contact__table'>
                <h4>Úsek Hematologie</h4>
                <table className='contact__table--hem'>
                    <tbody>
                        <tr>
                            <td>Automat KO</td>
                            <td>6478</td>
                        </tr>
                        <tr>
                            <td>Automat Quick</td>
                            <td>6498</td>
                        </tr>
                        <tr>
                            <td>Diferenciály</td>
                            <td>6499</td>
                        </tr>
                    </tbody>
                </table>    
            </div>  
            
            
            <div className='contact__table'>
                <h4>Úsek RIA</h4>
                <table className='contact__table--ria'>
                    <tbody>
                        <tr>
                            <td>Pracovna VŠ</td>
                            <td>6440</td>
                        </tr>
                        <tr>
                            <td>Laboratoř radiochemie</td>
                            <td>6441</td>
                        </tr>
                        <tr>
                            <td>Automat</td>
                            <td>6388</td>
                        </tr>
                    </tbody>
                </table>        
            </div>

            <div className='contact__table'>
                <h4>Úsek infekční sérologie</h4>
                <table className='contact__table--imu'>
                    <tbody>
                        <tr>
                            <td>Pracovna VŠ</td>
                            <td>6807</td>
                        </tr>
                        <tr>
                            <td>Automat</td>
                            <td>6269</td>
                        </tr>
                    </tbody>
                </table>    
            </div>        
        </div>
        
        <div className='general__line contact__phone_er'>
            <h3>V době 15:30 - 6:30 a přes celé víkendy a svátky je obsluhován pouze telefon POHOTOVOST</h3>
        </div>

        <div className='contact__address'>
            <img  className='contact__image' src='/images/forDepartments/about/pavU.jpg' />
            <iframe  frameBorder="0"
                className='contact__map'
                style={{border:0}}
                src="https://www.google.com/maps/embed/v1/place?q=49.935305%2C%2017.877637&key=AIzaSyA38w_aSuQlVqIz5KHE6eMDGcCzI3Vg-kw" allowFullScreen>
            </iframe>
        </div>
    </div>
);

export default Contact;