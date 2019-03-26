import React from 'react';
import PropTypes from 'prop-types';

const DrawMistakesCons = (props) => (
    <div className='draw__mistakes__cons'>
        <h2>Přiklady možných důsledků</h2>

        {props.item.cons.map((arrItem, index) => (
            <div key={index} className='draw__mistakes__cons__item'>
                <h3>{arrItem.conHeading}</h3>
                <p>{arrItem.conText}</p>
                {arrItem.conTable && <div className='draw__mistakes__cons__table'>
                    {arrItem.conTable.map((inf) => (
                        
                        inf.analytes.map((analyte, ind) => (
                            <div className='draw__mistakes__cons__table__item' key={ind}><img src={inf.value} /><p>{analyte}</p></div>
                        ))
                        
                    ))}

                </div>}


            </div>
        ))}
        
    </div>
);

DrawMistakesCons.propTypes = {
    
    item: PropTypes.shape({
        cons: PropTypes.array
    })
};

export default DrawMistakesCons;


