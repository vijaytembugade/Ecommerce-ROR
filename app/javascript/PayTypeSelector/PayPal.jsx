import React, { useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
const PayPal = ({ price }) => {
  const [showButton, setButton] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState();

  useEffect(() => {
    console.log(paymentDetails);
  }, [showButton]);
  return (
    <>
      {showButton && (
        <PayPalButton
          amount={price}
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details, data) => {
            // alert("Transaction completed by " + details.payer.name.given_name);
            setPaymentDetails({ details, data });
            setButton(false);

            // OPTIONAL: Call your server to save the transaction
            //   return fetch("localhost:3000/", {
            //     method: "post",
            //     body: JSON.stringify({
            //       orderID: data.orderID,
            //     }),
            //   });
          }}
        />
      )}

      {paymentDetails && (
        <>
          <input
            value={paymentDetails.data.orderID}
            name="order[paypal_id]"
            hidden={true}
          />
          <input
            value={
              paymentDetails.details.payer.name.given_name +
              paymentDetails.details.payer.name.surname
            }
            name="order[name]"
            hidden={true}
          />
        </>
      )}

      {!showButton && (
        <>
        <h3>Payment is successful!</h3>
        <h4>
          Paid By:{" "}
          {paymentDetails.details.payer.name.given_name +
            paymentDetails.details.payer.name.surname}
        </h4>
        <h3>Click on Place Order button and Continue</h3>
        </>
      )}
    </>
  );
};

export const addPayPalScript = async () => {
  const clientId =
    "Ae7Y4CGD8fyfe5PyTzqnFB3C3bbtBsUzs5EkFEVoVzv01wy7DdExKaKBuvFPmXKGMQ6xqq6UDtEb0mOt";
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
  script.async = true;
  document.body.appendChild(script);
};
export default PayPal;
