import React from 'react';
import PropTypes from 'prop-types';

const Where = (props) => (
    <div className={`box ${props.classNames}`}>
        <h4>KAM TO JEDE</h4>
        <div>
            {props.where==='Krnov' ? <img src="../../../images/krnov.png" /> : undefined}
            {props.where==='Nový Jičín' ? <img src="../../../images/agel.png" /> : undefined}
            {props.where==='FN Ostrava' ? <img src="../../../images/fno.png" /> : undefined}
            <p>{props.where}</p>
        </div>
    </div>
);


Where.propTypes = {
    where: PropTypes.string,
    classNames: PropTypes.string
};

export default Where;