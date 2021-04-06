import React, { useEffect, useState, useContext } from "react";
import axios from "axios"

import Spinner from "../components/Spinner";
import ContextConsumer from "../components/Context";

/*

The world is in your hands and I cheers to your success
Follow salute, get in the back we're off to heaven's gates
I put you on the door so don't worry about your fate
We'll trek around time and space, we'll drink champagne to celebrate

*/

const FAQ = () => {

  const context = useContext(ContextConsumer);
  const [data, setData] = useState(null);

  async function getFaqData() {
    const res = await axios.get(process.env.GATSBY_CMS_HOST  + "/faqs/");
    setData(res["data"]);
  }

  useEffect(() => {
    context.set({sideNavOpen: false});
    getFaqData();
  }, []);

  if (!data) {
    return (
      <Spinner></Spinner>
    );
  } else {
    return(
      <> 
        <h1>FAQs</h1>
        <div className="head-divider"></div>
        {
          data.map((faq) => {
            return(
              <>
                <h2>{faq.question}</h2>
                <p>{faq.answer}</p>
              </>
            )
          })
        }
      </>
    )
  }
};

export default FAQ;
