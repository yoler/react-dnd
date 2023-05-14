import React, { Component } from "react";
import propTypes from "prop-types";
import ctx from "./formContext";

export default class FormInput extends Component {
  static contextType = ctx;
  static defaultProps = {
    type: "text",
  };

  static propTypes = {
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
  };
  render() {
    return (
      <input
        value={this.context.formData[this.props.name] || ""}
        onChange={(e) => {
          this.context.changeFormData(this.props.name, e.target.value);
        }}
        type={this.props.type}
      />
    );
  }
}
