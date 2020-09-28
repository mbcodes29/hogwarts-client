import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Hyph } from '../Utils/Utils';
import TokenService from '../../services/token-service';
import './Header.css';
import AppContext from '../../contexts/context'


export default class Header extends Component {
    static contextType = AppContext

    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        this.context.clearStudents()
    }

    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <Link className="headerlink"
                 onClick={this.handleLogoutClick} to='/'> Log out </Link>
            </div>
        );
    }

    renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
                <Link className="registerlink" to='/register'> Create an account </Link>
                <Hyph />
                <Link className="loginlink" to='/login'> Log in </Link>
            </div>
        );
    }

    render() {
        return (
            <nav className='Header'>
                <h1 className="headerlink">
                    <Link to='/'>Create A Hogwarts Student!</Link>
                </h1>
                {TokenService.hasAuthToken()
                ? this.renderLogoutLink()
                : this.renderLoginLink()}
            </nav>
        );
    }
}