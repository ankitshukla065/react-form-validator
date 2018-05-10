import React, { Component } from 'react';
import InputField from './Component/inputField';

class App extends Component {
  render() {
    return (
      <div>
        <form>
      <InputField
      inputId="email"
      inputType="email"
      labelText="Enter email"
      inputPlaceHolder="Enter email"
      labelFor="email"
      helpId="helpEmail"
    />
    </form>
    </div>
    );
  }
}

export default App;
