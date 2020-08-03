import './App.css';
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../Checkout/Checkout';

const promise = loadStripe("pk_test_51HBqInBxokwILXMdMQPBnSmPxWRqkfhS9u9V5PjLeeUniScCP6tExKuDal1W6QzfKNZFTuSXsWajtXVjSucOuqoA009zh7bDfW");
function App() {
  return (
    <div className="App">
      <h1>Amandi Checkout</h1>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default App;