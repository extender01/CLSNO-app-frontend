import React from 'react';
import PropTypes from 'prop-types';

//data from json, props in approuter

const DrawGuideTemplate = (props) => (
    <div className='container__white'>
        <div className='drawguide__template'>
            <h1>{props.data.name}</h1>
            <h2>To nejdůležitější</h2>
            <div className='drawguide__template__important'>
                
                {props.data.important.map((item, index) => (
                    <div key={index} className='drawguide__template__important__item'>
                        {item.image && <img src={item.image} alt={item.head} />}
                        <h3>{item.head}</h3>
                        <p>{item.text}</p>
                        {item.link && <p>Více informací zde: {item.link}</p>}
                    </div>
                ))}
            
            
            </div>
            
            <h2>Celý návod</h2>
            <ul className='drawguide__template__guide'>
                {props.data.guide.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
);

DrawGuideTemplate.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        important: PropTypes.array,
        guide: PropTypes.array
    })
};

export default DrawGuideTemplate;