import React from 'react';

const Memo = () => (
    <div className='container__blue'>
        <div className='memo'>
            <h1>Zobrazení komentáře k výsledku metody</h1>
           
            <p>Slovní komentář k výsledku metody lze v NIS Akord zobrazit dvěma způsoby:</p>
            <p>1. V okně kumulativního nálezu klikněte na ikonu modrého notesu.</p>
            <p>Dole vlevo se otevře bílé pole s textovým komentářem.</p>
            <img src='/images/forDepartments/manuals/memo_1.jpg' alt='Memo k žádance' />
            
            <p>2. V okně kumulativního nálezu klikněte na ikonu modré i.</p>
            <p>Komentář se objeví v pravé dolní části.</p>
            <img src='/images/forDepartments/manuals/memo_2.jpg' alt='Memo k žádance' />
        </div>
    </div>
);

export default Memo;