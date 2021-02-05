import React, {useEffect, useState} from "react";
import PrimaryLayout from "../layouts/primaryLayout";
import axios from "axios"

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

  localStorage.setItem("pg-open", "faq");

  if (!data) {
    return (
      <PrimaryLayout>
        <p>Loading...</p>
      </PrimaryLayout>
    );
  } else {
    return(
      <PrimaryLayout> 
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
      </PrimaryLayout>
    )
  }
};

export default FAQ;
