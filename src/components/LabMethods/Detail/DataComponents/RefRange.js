import React from 'react';
import PropTypes from 'prop-types';


const RefRange = (props) => (
    <div className={`box ${props.classNames}`}>
        <h4>{props.label}</h4>
        <p>{props.value}</p>
    
        {props.refRange.length !== 0 && <table>
            <tbody>
                <tr>
                    <th>Pohlaví</th>
                    <th>Věk</th>
                    <th>Meze</th>
                    <th>Poznámka</th>
                </tr>
                
                {/* first create copy of refRange array to not mutate original from props (via map method, just returning same unchanged item)
                then sort refrange object in array, then return new array of sorted jsx ref ranges */}
                
                {props.refRange.map((item) => {return item;}).sort((a, b) => {
                    if (a.sortOrder < b.sortOrder) {
                        return -1;
                    } else if (a.sortOrder > b.sortOrder) {
                        return 1;
                    }
                    return 0;
                }).map((item, index) => {
                    return ( 
                        <tr key={index} className={`refRange__${item.sex}`}>
                            <td><img src={`/images/methods/sex_${item.sex}.svg`} width='32px'/></td>
                            <td>{item.age}</td>
                            <td>{item.range}</td>
                            <td>{item.refNote}</td>
                        </tr>
                    );
                })
                }
            </tbody>
        </table> }
    </div>
);


RefRange.propTypes = {
    classNames: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    refRange: PropTypes.arrayOf(PropTypes.object)
};


export default RefRange;