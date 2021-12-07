import React from "react";
import NoPayType from "./NoPayType";
import CreditCardPayType from "./CreditCardPayType";
import CheckPayType from "./CheckPayType";
import PurchaseOrderPayType from "./PurchaseOrderPayType";
import PayPal, {addPayPalScript} from "./PayPal";

class PayTypeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.onPayTypeSelected = this.onPayTypeSelected.bind(this);
    this.state = { selectedPayType: null };
  }
  onPayTypeSelected(e) {
    this.setState({ selectedPayType: e.target.value });
  }
  render() {
    let PayTypeCustomComponent = NoPayType;
    if (this.state.selectedPayType == "Credit card") {
      PayTypeCustomComponent = CreditCardPayType;
    } else if (this.state.selectedPayType == "Check") {
      PayTypeCustomComponent = CheckPayType;
    } else if (this.state.selectedPayType == "Purchase order") {
      PayTypeCustomComponent = PurchaseOrderPayType;
    }else if (this.state.selectedPayType == "PayPal") {
      PayTypeCustomComponent = PayPal;
      addPayPalScript()
    }
    return (
      <div>
        <div className="field">
          <label htmlFor="order_pay_type">Pay type</label>
          <select
            id="order_pay_type"
            onChange={this.onPayTypeSelected}
            name="order[pay_type]"
          >
            <option value="">Select a payment method</option>
            <option value="Check">Check</option>
            <option value="Credit card">Credit card</option>
            <option value="Purchase order">Purchase order</option>
            <option value="PayPal">PayPal</option>
          </select>
          
        </div>
        <PayTypeCustomComponent price={this.props.price}/>
      </div>
    );
  }
}
export default PayTypeSelector;
