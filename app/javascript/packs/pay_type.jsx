import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import PayTypeSelector from 'PayTypeSelector'

let total_price = document.getElementById("total_order_amount").innerText;
console.log(total_price)

document.addEventListener("turbolinks:load", function () {
  var element = document.getElementById("pay-type-component");
  ReactDOM.render(<PayTypeSelector price={Number(total_price)}/>, element);
});
