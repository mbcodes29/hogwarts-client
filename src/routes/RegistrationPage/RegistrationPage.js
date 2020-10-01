import React, {Component} from 'react';
import { Section } from '../../components/Utils/Utils';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './RegistrationPage.css';
import renderer from "react-test-renderer"

export default class RegistrationPage extends Component {
    static defaultProps = {
        history: {
            push: () => {},
        },
    }

    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/login')
    }

    render() {
        return (
            <Section className='RegistrationPage'>
                <h2>Register</h2>
                <RegistrationForm
                  onRegistrationSuccess={this.handleRegistrationSuccess}
                />
            </Section>
        );
    }
};