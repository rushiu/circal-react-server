import React from 'react'
import {Container} from 'react-bootstrap'
import SignUp from './SignUp';
import PersonalInfo from './PersonalInfo';
import BillingInfo from './BillingInfo';
import ChooseFlow from './ChooseFlow';

export class SignUpNext extends React.Component {
    state = {
        step: 1,
        firstName: '',
        pricePlan: '',
        lastName: '',
        email: '',
        company: '',
        password: '',
        role: ''
    };

    nextStep = () => {
        const {step} = this.state;
        this.setState({step: step + 1});
    };

    prevStep = () => {
        const {step} = this.state;
        this.setState({step: step - 1});
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const {step} = this.state;
        const {firstName, lastName, company, role, email, password} = this.state;
        const values = {firstName, lastName, company, role, email, password}

        switch(step) {
            case 1:
                return(
                    <SignUp nextStep = {this.nextStep} inputChange = {this.inputChange} values = {values}/>
                );
            case 2:
                    return(
                        <ChooseFlow nextStep = {this.nextStep} prevStep = {this.prevStep}  inputChange = {this.inputChange} values = {values}/>
                    );
            case 3:
                return(
                    <PersonalInfo nextStep = {this.nextStep} prevStep = {this.prevStep} inputChange = {this.inputChange} values = {values}/>
                    );
            case 4:
                return (
                <BillingInfo nextStep = {this.nextStep} prevStep = {this.prevStep} inputChange = {this.inputChange} values = {values}/>
                );
        }
    }
}

export default SignUpNext