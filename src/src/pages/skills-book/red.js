import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import axios from "axios"
import marked from "marked";

import Spinner from "../../components/Spinner";
import TapePage from "../../layouts/tapePage";

const RedTapePage = () => {

    const [data, setData] = useState(null);

    async function getContentData() {
      const res = await axios.get(process.env.GATSBY_CMS_HOST + "/red-tape/");
      setData(res["data"]);
    }
  
    useEffect(() => {
        getContentData();
    }, []);

    const htmlContent = data ? marked(data.content) : undefined;

    if(!htmlContent) {
        return(
            <TapePage>
                <Helmet title="UQMC | Red Tape" />
                <Spinner />
            </TapePage>
        )
    } else {
        return(
            <TapePage>
                <Helmet title="UQMC | Red Tape" />
                <h1>Red tape</h1>
                <div className="tape-content"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </TapePage>
        );
    }
}

export default RedTapePage;