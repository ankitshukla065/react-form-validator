import React, {Component} from 'react';

class Error extends Component {
    constructor(props){
        super(props);
        this.state = {isValid: (this.props.isValid !== 'undefind')?this.props.isValid:true, message: this.props.message}
        console.log(this);

    }
    render(){
        if (!this.isValid) {
          return <small className = "form-text">{this.message}</small>;
        }
        else
            return <small></small>;
    }
}

export default Error
