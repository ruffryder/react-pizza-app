import React from "react";
import StripeCheckout from "react-stripe-checkout";
import PropTypes from "prop-types";

export default function StripeButton({ price, onPaymentCompleted }) {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_c4NlzsBKXZuoiXk5M3fVNDAX00lSUzTrLi";

  const onToken = token => {
    // alert("Payment Successful");
    onPaymentCompleted();
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Bocciani Restaurant"
      billingAddress
      shippingAddress
      description={`Your total is: $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

StripeButton.propTypes = {
  price: PropTypes.number.isRequired
};
