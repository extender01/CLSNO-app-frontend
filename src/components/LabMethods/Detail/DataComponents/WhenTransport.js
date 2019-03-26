import React from "react";
import PropTypes from 'prop-types';

class WhenTransport extends React.Component {
    
    whenGoes = () => {
        console.log("ma to byt krnov");
        switch (this.props.where) {
            case "Krnov":
            console.log("je to krnov");
                // return (<div><p>Po - Pá: cca 7:30 a 11:30</p><p>So-Ne: cca 9:30</p></div>);
                return (
                    
                        <table>
                            <tbody>
                                <tr>
                                    <td>Po-Pa</td>
                                    <td>cca 7:30 a 11:30</td>
                                </tr>
                                <tr>
                                    <td>So-Ne</td>
                                    <td>cca 10:30</td>
                                </tr>
                                <tr>
                                    <td>Svatky</td>
                                    <td>cca 10:30</td>
                                </tr>
                            </tbody>
                        </table>
                    
                );
            case "Nový Jičín":
                return (
                    
                        <table>
                            <tbody>
                                <tr>
                                    <td>Po-Pa</td>
                                    <td>cca 8:30 a 12:30</td>
                                </tr>
                            </tbody>
                        </table>
                    
                );           
            case "FN Ostrava":
                return (
                    
                        <table>
                            <tbody>
                                <tr>
                                    <td>Po-Pa</td>
                                    <td>cca 8:00 a 12:00</td>
                                </tr>
                            </tbody>
                        </table>
                    
                );
         };
    };
   
    render() {
        return(
            <div className={`box ${this.props.classNames}`}>
                <h4>KDY JEZDÍ</h4>
                {this.whenGoes()}
            </div>
        )
    }
}    

WhenTransport.propTypes = {
    where: PropTypes.string
}

export default WhenTransport;


