import React from 'react';
import InputField from '../global/partials/inputField';

class Form extends React.Component{
    render(){
        return(
            <div className="container-fluid form-page-main-container">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h3>register account</h3>
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m8 offset-m2">
                            <form method="POST">
                                <InputField type="text" placeholder="Enter your name" id="input-name" required="yes" classes="col s12" label="User Name"/>
                                <InputField type="email" placeholder="Enter your email address" id="input-email" required="yes" classes="col s12" label="User Email"/>
                                <InputField type="password" placeholder="Password" id="input-password" required="yes" classes="col s12" label="Login Password"/>
                                <InputField type="password" placeholder="Confirm Password" id="input-password-confirm" required="yes" classes="col s12" label="Login Password"/>
                                <div className="input-field col s12">
                                    <button type="submit" className="btn btn-large btn-primary">register</button>
                                    <button type="button" className="btn btn-large btn-secondary">cancel</button>
                                </div>
                                <div className="input-field col s12">
                                    <a className="btn-flat" href="#!">
                                        already have an account?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;