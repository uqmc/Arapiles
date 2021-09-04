import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios"
import marked from "marked";

import Spinner from "../../components/Spinner";
import TapePage from "../../layouts/tapePage";

const SkillsBookHome = () => {
    const [data, setData] = useState(null);

    async function getContentData() {
      const res = await axios.get(process.env.GATSBY_CMS_HOST + "/skills-home/");
      setData(res["data"]);
    }
  
    useEffect(() => {
        getContentData();
    }, []);

    const htmlContent = data ? marked(data.Content) : undefined;

    if(!htmlContent) {
        return(
            <TapePage>
                <Helmet title="UQMC | Skills Home" />
                <Spinner />
            </TapePage>
        )
    } else {
        return(
            <TapePage>
                <Helmet title="UQMC | Skills Home" />
                <h1>The Skills Book</h1>
                <div className="tape-content"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </TapePage>
        );
    }
};

export default SkillsBookHome;
