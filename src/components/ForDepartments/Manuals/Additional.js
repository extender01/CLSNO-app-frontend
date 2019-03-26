import React from 'react';
import { Link } from 'react-router-dom';

const Additional = () => (
    <div className='container__blue'>
        <div className='additional'>
            <h1>Vytvoření dohlášky</h1>
        
            <p>Pokud oddělení nebo ambulance požaduje dohlásit nějáké vyšetření z předchozího odběru, je třeba v NIS AKORD vytvořit novou žádanku.</p>
            <p>Dohlašovat lze jen některé metody. Zda lze vaši požadovanou metodu dohlásit zjistíte v sekci <Link to='/metody'>METODY</Link></p>
            <p>Při vytváření nové laboratorní žádanky jsou vlevo k dispozici 4 kategorie: dohláška BIO do 24h, dohláška BIO do 4h, dohláška BIO po domluvě a ještě dohláška HEM. Metody z kategorie do 24h lze požadovat nejpozději do 24h od původního odběru. Analogicky funguje kategorie do 4h. Kategorie dohláška BIO po domluvě je zavedena z důvodu nutnosti ověření správné odběrové zkumavky původního odběru.</p>
            <p></p>
            <img src='/images/forDepartments/manuals/dohl1.jpg' alt='Dohláška metod' />
            
            <p>Z kategorií vyberete požadované metody a vytisknutou žádanku zašlete na příjem CL</p>
            <p>Nemusíte předem telefonicky volat na CL, že plánujete dohlášku.</p>
            <img src='/images/forDepartments/manuals/dohl3.jpg' alt='Dohláška metod' />
        </div>
    </div>

);

export default Additional;