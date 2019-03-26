import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
 
export default class Hamburger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {burgerOpen: false};
    };

    burgerHide = () => {
        this.setState(() => {
            return {burgerOpen: false}
        })
    };
 
    render () {
        return (
            <div className='hambac'>
                <Menu isOpen={this.state.burgerOpen}>
                    <HashLink onClick={this.burgerHide} to='/#o-laboratori' className='g1'>O laboratoři</HashLink>
                    <HashLink onClick={this.burgerHide} to='/#pacienti' className='g1'>Pro pacienty</HashLink>
                    <HashLink onClick={this.burgerHide} to='/#oddeleni' className='g1'>Pro oddělení</HashLink>
                    <Link onClick={this.burgerHide} to='/metody' className='g1'>Metody</Link>
                    <HashLink onClick={this.burgerHide} to='/#kontakt' className='g1'>Kontakty</HashLink>
                    <Link onClick={this.burgerHide} to='/login'>Login</Link>
                    <Link onClick={this.burgerHide} to='/login'>Logout</Link>
                </Menu>
            </div>
        );
    };
};