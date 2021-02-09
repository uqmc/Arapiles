import React, {useEffect, useState} from "react";
import PrimaryLayout from "../layouts/primaryLayout";

const Payment = () => {
  const [stripe, setStripe] = useState(null);

  function getStripeData() {
    setStripe(process.env.GATSBY_STRIPE_KEY);
  }

  useEffect(() => {
    getStripeData();
  }, []);

  localStorage.setItem("pg-open", "payment");

  if (!stripe) {
    return (
      <PrimaryLayout>
        <p>Loading...</p>
      </PrimaryLayout>
    );
  } else {
    return(
      <PrimaryLayout> 
         
      </PrimaryLayout>
    )
  }
};

export default Payment;
