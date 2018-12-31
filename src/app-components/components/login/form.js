
import React from 'react';
import InputField from '../global/partials/inputField';

class Form extends React.Component{
    render(){
        return(
            <div className="container-fluid form-page-main-container">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h3>account login</h3>
                            <div className="divider"></div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col s12 m8 offset-m2">
                            <div className="row">
                                <div className="col s12">
                                    <ul className="tabs">
                                        <li className="tab col s12 offset-s2 m6 l4 offset-l2">
                                            <a href="#user-form">login</a>
                                        </li>
                                        <li className="tab col s12 offset-2 m6 l4">
                                            <a href="#admin-form">
                                                admin form
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12">
                            {this.renderForm("user-form","user-input-email","user-input-password")}
                            {this.renderForm("admin-form","admin-input-email","admin-input-password")}
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    renderForm(id,emailID,passwordID){
        return(
            <form method="POST" id={id}>
                
                <InputField classes="col s12" type="email" placeholder="Enter your email" id={emailID} 
                required="yes"/>
                
                <InputField classes="col s12" type="password" placeholder="Enter your password" id={passwordID} 
                required="yes"/>

                <div className="input-field col s12 l6">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>remember me</span>
                        </label>
                    </p>
                </div>

                <div className="col s12 l6 forgot-pass-col">
                    <a className="btn-flat modal-trigger" href="#forget-password">forgot password?</a>
                </div>

                <div className="input-field col s12">
                    <button type="submit" className="btn btn-large btn-primary">login</button>
                    <button type="button" className="btn btn-large btn-secondary" onClick={this.handleClick}>cancel</button>
                </div>


            </form>
        )
    }

    handleClick(){
        let elems = document.getElementsByTagName('input');
        Array.prototype.forEach.call(elems,(elem)=>{
            elem.value = null;
        });
    }

}

export default Form;