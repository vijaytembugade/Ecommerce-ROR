import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import PayTypeSelector from 'PayTypeSelector'

document.addEventListener("turbolinks:load", function () {
  var element = document.getElementById("pay-type-component");
  ReactDOM.render(<PayTypeSelector />, element);
});
