import React, { Component } from "react";
import interior from "../../../assets/img/interior.jpg";
import Joi from "joi-browser";

class Contact extends Component {
  state = {
    email: "",
    subject: "",
    message: "",
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    subject: Joi.string()
      .required()
      .label("Subject"),
    message: Joi.string()
      .required()
      .label("Message")
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) {
      return;
    }
  };

  handleChange = e => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.target);
    if (errorMessage) {
      errors[e.target.name] = errorMessage;
    } else {
      delete errors[e.target.name];
    }
    return this.setState({
      [e.target.name]: e.target.value,
      errors
    });
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  };

  validate = () => {
    const options = { abortEarly: false, allowUnknown: true };
    const result = Joi.validate(this.state, this.schema, options);
    console.log(result);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center mb-6">Contact Us</h1>
        <div className="row">
          <div className="row col-12 col-md-6 mb-5 mb-md-0">
            <img
              src={interior}
              className="col-8 col-md-12 img-fluid rounded"
              alt="Bocciani pizza restaurant interior"
            />
            <div className="col-4 col-md-12">
              <h2 className="mt-4">Open Hours:</h2>
              <p>Monday - Thursday 8am - 6pm</p>
              <p>Friday - Sunday 11am - 4pm</p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  title="Bocciani Restaurant map"
                  width="100%"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=italy%20pizza&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-6 text-center w-75" />
        <div className="row mt-6 text-center">
          <div className="col-4">
            <h2>Event Inquiries</h2>
            <p>boccianicatering@example.com</p>
            <p>For all other questions, please use the form on the right</p>
          </div>
          <div className="col-8">
            <form onSubmit={this.handleSubmit}>
              <div className="form-input">
                <input
                  className="w-75 m-3"
                  type="email"
                  placeholder="Email*"
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                />
                {this.state.errors.email && (
                  <div className="alert alert-danger w-75 mx-auto text-left">
                    {this.state.errors.email}
                  </div>
                )}
              </div>

              <div className="form-input">
                <input
                  className="w-75 m-3"
                  type="text"
                  placeholder="Subject*"
                  value={this.state.subject}
                  onChange={this.handleChange}
                  name="subject"
                />
                {this.state.errors.subject && (
                  <div className="alert alert-danger w-75 mx-auto text-left">
                    {this.state.errors.subject}
                  </div>
                )}
              </div>

              <div className="form-input">
                <textarea
                  className="w-75 resize-none m-3"
                  name="message"
                  cols="100"
                  rows="10"
                  placeholder="Message*"
                  value={this.state.message}
                  onChange={this.handleChange}
                ></textarea>
                {this.state.errors.message && (
                  <div className="alert alert-danger w-75 mx-auto text-left">
                    {this.state.errors.message}
                  </div>
                )}
              </div>
              <button
                disabled={this.validate()}
                className="btn btn-large btn-general-inverted"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
