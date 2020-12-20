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
        company: '',
        timeZone: '',
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
        const {firstName, lastName, accessCode, plan, company, role, timeZone, email, password} = this.state;
        const values = {firstName, lastName, accessCode, plan, company, timeZone, role, email, password}

        switch(step) {
            case 1:
                return(
                    <SignUp nextStep = {this.nextStep} inputChange = {this.inputChange} values = {values}/>
                );
            case 2:
                console.log("plan");
                console.log(plan);
                    return(
                        <ChooseFlow nextStep = {this.nextStep} prevStep = {this.prevStep}  inputChange = {this.inputChange} values = {values}/>
                    );
            case 3:
                if (company && !accessCode && step === 3) {
                return(
                    <BillingInfo nextStep = {this.nextStep} prevStep = {this.prevStep} inputChange = {this.inputChange} values = {values}/>
                    );
                } else {
                    return(
                        <Container>
                            <p>validation for access code then skip billing to personal info</p>
                        </Container>
                    );
                }
            case 4:
                return (
                    <PersonalInfo nextStep = {this.nextStep} prevStep = {this.prevStep} inputChange = {this.inputChange} values = {values}/>
                );
        }
    }
}

export default SignUpNext;