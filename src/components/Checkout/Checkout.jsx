import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/CartSelectors";
import { clearCart } from "../../redux/actions/CartActions";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import { Redirect } from "react-router-dom";
import StripeButton from "../UI/StripeButton/StripeButton";
import PropTypes from "prop-types";
import "./Checkout.css";

class Checkout extends Component {
  state = {
    showSuccessPaymentMessage: false,
    redirect: false
  };
  onPaymentCompleted = () => {
    this.props.clearCart();
    this.setState({
      showSuccessPaymentMessage: true
    });
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 4000);
  };
  render() {
    return this.state.showSuccessPaymentMessage ? (
      <div className="container text-center">
        <h2>
          Your payment was successful. Expect your order withing the next 45
          minutes.
        </h2>
        <p className="redirect-message">Redirecting to home page...</p>

        {this.state.redirect && <Redirect to="/" />}
      </div>
    ) : (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Single Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {this.props.cartItems.map(item => {
          return <CheckoutItem key={item.id} cartItem={item} />;
        })}
        <div className="total">
          <span>${this.props.total}</span>
        </div>
        <div className="card-info">
          * Use the following TEST credit card for payments *
          <br />
          4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripeButton
          price={this.props.total}
          onPaymentCompleted={this.onPaymentCompleted}
        />
      </div>
    );
  }
}

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps, { clearCart })(Checkout);
