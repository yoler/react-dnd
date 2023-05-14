import React, { Component } from "react";
import { Provider } from "./formContext";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

export default class Form extends Component {
  state = {
    formData: {},
    changeFormData: (name, val) => {
      this.setState({
        formData: {
          ...this.state.formData,
          [name]: val,
        },
      });
    },
    submit: () => {
      this.props.onSubmit && this.props.onSubmit(this.state.formData);
    },
  };
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

Form.Input = FormInput;
Form.Button = FormButton;
