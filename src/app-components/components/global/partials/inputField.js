import React from 'react';

class InputField extends React.Component{
    render(){

        let classes = `input-field ${this.props.classes}`;
        let elem;
        
        if(this.props.required !== undefined){
            elem = (
                <input type={this.props.type} className="validate" placeholder={this.props.placeholder}
                    id={this.props.id} required/>
            )
        }
        else{
            elem = (
                <input type={this.props.type} className="validate" placeholder={this.props.placeholder}
                    id={this.props.id} />
            )
        }

        return(
            <div className={classes}>
                {elem}
                <label htmlFor={this.props.id}>{this.props.label}</label>
            </div>
        )
    }
}

export default InputField;