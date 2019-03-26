import React from 'react';
import Collapsible from 'react-collapsible';
import DrawMistakesItem from './DrawMistakesItem';
import mistakes from '../../../../data/drawMistakes.json';
import DrawMistakesTrigger from './DrawMistakesTrigger';
import VADRecommendations from './VADRecommendations';

export default class DrawMistakesSummary extends React.Component {
    
    render() {
        return (
            <div className='container__white'>
                <div className='draw__mistakes'>
                    <h1>Chyby v preanalytické fázi vyšetření</h1>

                    <Collapsible openedClassName='Collapsible__open' trigger={<DrawMistakesTrigger box={mistakes.tubeCont.box} />} classParentString='draw__mistakes__collaps_box'>
                        <DrawMistakesItem item={mistakes.tubeCont} />
                    </Collapsible>

                    <Collapsible trigger={<DrawMistakesTrigger box={mistakes.infusionCont.box} />} classParentString='draw__mistakes__collaps_box'>
                        <DrawMistakesItem item={mistakes.infusionCont} />
                        <VADRecommendations />
                    </Collapsible>

                    <Collapsible trigger={<DrawMistakesTrigger box={mistakes.hemolysis.box} />} classParentString='draw__mistakes__collaps_box'>
                        <DrawMistakesItem item={mistakes.hemolysis} />
                    </Collapsible>

                    <Collapsible trigger={<DrawMistakesTrigger box={mistakes.abr.box} />} classParentString='draw__mistakes__collaps_box'>
                        <DrawMistakesItem item={mistakes.abr} />
                    </Collapsible>


                    <Collapsible trigger={<DrawMistakesTrigger box={mistakes.preparation.box} />} classParentString='draw__mistakes__collaps_box'>
                        <DrawMistakesItem item={mistakes.preparation} />
                    </Collapsible>
                </div>
            </div>
        );
    }
}


