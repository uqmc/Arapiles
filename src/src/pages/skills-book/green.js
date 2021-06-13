import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"
import axios from "axios"
import marked from "marked";

import Spinner from "../../components/Spinner";
import TapePage from "../../layouts/tapePage";

const GreenTapePage = () => {

    const [data, setData] = useState(null);

    async function getContentData() {
      const res = await axios.get(process.env.GATSBY_CMS_HOST + "/green-tape/");
      setData(res["data"]);
    }
  
    useEffect(() => {
        getContentData();
    }, []);

    const htmlContent = data ? marked(data.content) : undefined;

    if(!htmlContent) {
        return(
            <TapePage>
                <Helmet title="UQMC | Green Tape" />
                <Spinner />
            </TapePage>
        )
    } else {
        return(
            <TapePage>
                <Helmet title="UQMC | Green Tape" />
                <h1>Green tape</h1>
                <div className="tape-content"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </TapePage>
        );
    }
}

export default GreenTapePage;