import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet"
import axios from "axios"
import marked from "marked";

import Spinner from "../../components/Spinner";
import TapePage from "../../layouts/tapePage";

const YellowTapePage = () => {

    const [data, setData] = useState(null);

    async function getContentData() {
      const res = await axios.get(process.env.GATSBY_CMS_HOST + "/yellow-tape/");
      setData(res["data"]);
    }
  
    useEffect(() => {
        getContentData();
    }, []);

    const htmlContent = data ? marked(data.content) : undefined;

    if(!htmlContent) {
        return(
            <TapePage>
                <Spinner />
            </TapePage>
        )
    } else {
        return(
            <TapePage>
                <Helmet title="UQMC | Yellow Tape" />
                <h1>Yellow Tape</h1>
                <div className="tape-content"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </TapePage>
        );
    }
}

export default YellowTapePage;