import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios"
import marked from "marked";

import Spinner from "../../components/Spinner";
import TapePage from "../../layouts/tapePage";

const BlackTapePage = () => {

    const [data, setData] = useState(null);

    async function getContentData() {
      const res = await axios.get(process.env.GATSBY_CMS_HOST + "/black-tape/");
      setData(res["data"]);
    }
  
    useEffect(() => {
        getContentData();
    }, []);

    const htmlContent = data ? marked(data.content) : undefined;

    if(!htmlContent) {
        return(
            <TapePage>
                <Helmet title="UQMC | Black Tape" />
                <Spinner />
            </TapePage>
        )
    } else {
        return(
            <TapePage>
                <Helmet title="UQMC | Black Tape" />
                <h1>Black tape</h1>
                <div className="tape-content"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </TapePage>
        );
    }
}

export default BlackTapePage;