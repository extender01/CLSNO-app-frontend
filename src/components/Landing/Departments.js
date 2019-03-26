import React from 'react';

const Departments = () => (
    <div className='container__white container__departments'>
        <div  id='o-laboratori' className='departments'>
            <div className='departments__item'>
                <h3>CENTRÁLNÍ LABORATOŘE</h3>
                <p>Centrální laboratoře provedou ročně kolem 1 250 000 analýz z palety více než 250 různých metod. Tyto výsledky poskytují důležité informace lékařům ostatních medicínských oborů, nutné ke stanovení diagnózy, léčbě a sledování průběhů nemocí.</p>
                <div className='departments__item__images'>
                    <img src='/images/forDepartments/about/pavU.jpg' />
                    <img src='/images/landing/cl3.jpg' />
                    <img src='/images/landing/cl2.jpg' />
                </div>
            </div>

            <div className='departments__item'>
                <h3>ÚSEK BIOCHEMIE</h3>
                <p>V non-stop režimu provádí vyšetření základních biochemických parametrů, parametrů vnitřního prostředí, kardiomarkerů, specifických proteinů, funkční testy, vyšetření moče, močových konkrementů a další. </p>
                <div className='departments__item__images'>
                    <img src='/images/landing/bch1.jpg' />
                    <img src='/images/landing/bch2.jpg' />
                    <img src='/images/landing/bch3.jpg' />
                </div>
            </div>

            <div className='departments__item'>
                <h3>ÚSEK HEMATOLOGIE</h3>
                <p>Provádí vyšetření krevních obrazů včetně diferenciálního počtu, krevních nátěrů, nátěrů kostní dřeně, vyšetření koagulačních parametrů a další.</p>
                <div className='departments__item__images'>
                    <img src='/images/landing/hem1.jpg' />
                    <img src='/images/landing/hem2.jpg' />
                    <img src='/images/landing/hem3.jpg' />
                </div>
            </div>

            <div className='departments__item'>
                <h3>ÚSEK RADIOIMUNOANALÝZY</h3>
                <p>Provádí vyšetření nádorových markerů, hormonů, vitaminů a další.</p>
                <div className='departments__item__images'>
                    <img src='/images/landing/ria1.jpg' />
                    <img src='/images/landing/ria2.jpg' />
                    <img src='/images/landing/ria3.jpg' />
                </div>
            </div>
        </div>
    </div>
);

export default Departments;