import React, {Component} from 'react';
import Error from './error';

class InputField extends Component {
    constructor(props){
        super(props);
        this.state = {isValid: true, message:'', email:''};
    }

    validate(type, e){
        var val = e.currentTarget.value;
        
        switch(type){
            case 'email':
            var re =  new RegExp("/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/","gi");
           
            // if(!re.test(val))
            //     this.setState({isValid: false, message:'Please enter a valid email address'});
            //     else
                console.log(re.test(val));
            break;
            default:
            break;
        }
    }

    render() {
        return ( 
            <div className = "form-group col-md-4" >
            <label htmlFor = {this.props.labelFor} > {this.props.labelText} < /label>
            <div className = "row">
                <div className = "col"> 
            <input type = {this.props.inputType}
            className = "form-control"
            id = {this.props.inputId}
            value = {this.props.email}
            aria-describedby = {this.props.helpId}
            placeholder = {this.props.inputPlaceHolder} onBlur={this.validate.bind(this, "email")} />
            </div>
            <div className= "col">
            {(!this.state.isValid.bind)? <label id="error" className = "alert alert-danger">{this.state.message}</label>: <small id="error" className = "hidden">{this.state.message.bind}</small>}
            </div>
            </div>
            </div>
        );
    }
}
export default InputField