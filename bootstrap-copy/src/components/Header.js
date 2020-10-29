import React, {Component} from 'react';
import logo from '../media/logo.svg';
import hamburger from '../media/hamburger.png';


class Header extends Component {
    constructor() {
        super();

        this.state = {
            toggleShow: false
        }
    }

    toggleShowFunc = () => {
        this.setState( (prevState) => {
            return {
                toggleShow: !prevState.toggleShow
            }
        })
    }

    render () {
        return (
            <header classname="navbar">
                <img className="logo" src={logo}/>
                <nav>
                    <ul className="navMenu-list">
                        <li className="navMenu-item">SERVICES</li>
                        <li className="navMenu-item">PORTFOLIO</li>
                        <li className="navMenu-item">ABOUT</li>
                        <li className="navMenu-item">TEAM</li>
                        <li className="navMenu-item">CONTACT</li>
                    </ul>
                </nav>
                <button onClick={this.toggleShowFunc} alt="menu-icon" type="image" src={hamburger} id="nav-btn">MENU &#9776;</button>
            </header>
        )
    }
}

export default Header