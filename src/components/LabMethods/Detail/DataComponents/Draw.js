import React from "react";
import Media from 'react-media';
import PropTypes from 'prop-types';

import bp from '../../../../helper/mediaQueryBreakPoint';



export default class Draw extends React.Component {

    drawTypes = {
        sg: 'Srážlivá krev s gelem',
        se: 'Srážlivá krev bez gelu',
        pli: 'Nesrážlivá krev Li Heparin',
        edta: 'Nesrážlivá krev K2EDTA',
        citr: 'Nesrážlivá krev Na citrát',

        moc: 'Moč jednorázová nebo sbíraná',
        mocj: 'Moč jednorázová',
        mocsb: 'Moč sbíraná',
        pu: 'Punktát',
        csf: 'Likvor'
    };

    coZaOdber = () => {
        if(!!this.props.draw) {
            let drawTypesToArray = this.props.draw.split(", ");
            return (
                drawTypesToArray.map((item, index) => {
                    if(item.startsWith('custom:')) {
                        const customDraw = 'je tam vlastni odber'
                        return (
                            <p key={index}>{item.substring(7)}</p>
                        )
                    } else {
                        return ( 
                            <div key={index} className="draw__type" >
                                {this.drawTypes[item] &&
                                    <React.Fragment>
                                        <img src={`/images/forDepartments/drawsystem/${item}.png`} title={this.drawTypes[item]} height='60px' />
                                        
                                        <Media query={`(min-width: ${bp})`}>
                                            {(matches) => 
                                                matches ? <p>{this.drawTypes[item]}</p> : null
                                            }
                                        </Media> 
                                    </React.Fragment>
                                }
                            </div>
                        );
                    }
                })
            );
        } else {
            return (
                <p>Údaje nejsou k dispozici</p>
            )
        }
    };

    render() {
        return (
            <div className={`box ${this.props.classNames}`}>
                <h4>ODBĚR</h4>
                <div className='draw__wrapper'>
                    {this.coZaOdber()}
                    
                </div>
            </div>
        )
    }
};

Draw.propTypes = {
    draw: PropTypes.string
};