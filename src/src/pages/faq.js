import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios"

import Spinner from "../components/Spinner";

/*

The world is in your hands and I cheers to your success
Follow salute, get in the back we're off to heaven's gates
I put you on the door so don't worry about your fate
We'll trek around time and space, we'll drink champagne to celebrate

*/

const FAQ = () => {

  const [data, setData] = useState(null);

  async function getFaqData() {
    const res = await axios.get(process.env.GATSBY_CMS_HOST  + "/faqs/");
    setData(res["data"]);
  }

  useEffect(() => {
    getFaqData();
  }, []);

  if (!data) {
    return (
      <main className="content-container">
        <Helmet title="UQMC | FAQ" />
        <Spinner />
      </main>
    );
  } else {
    return(
      <main className="content-container">
        <Helmet title="UQMC | FAQ" />
        <h1 className="content-full-width">FAQs</h1>

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
      </main>
    )
  }
};

export default FAQ;
