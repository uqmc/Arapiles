import React, {useEffect, useState} from "react";
import PrimaryLayout from "../layouts/primaryLayout";
//import {Divider, PageHeader} from "antd";
import axios from "axios"

import styles from "./faq.module.css"
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
      <></>
      //<PrimaryLayout><Spinner /></PrimaryLayout>
    );
  } else {
    return(
      <></>
      /*<PrimaryLayout> 
        <PageHeader
          title="FAQ"
          onBack={() => window.history.back()}
        />

        {
          data.map((faq) => {
            return(
              <>
                <Divider orientation="left"><h1 className={styles.question}>{faq.question}</h1></Divider>
                <p>{faq.answer}</p>
              </>
            )
          })
        }
      </PrimaryLayout>*/
    )
  }
};

export default FAQ;
