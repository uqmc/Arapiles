import React, { useEffect, useState, useContext } from "react";
import axios from "axios"
import marked from "marked";

import Spinner from "../../components/Spinner";
import ContextConsumer from "../../components/Context";

const BlueTapePage = () => {

    const context = useContext(ContextConsumer);
    const [data, setData] = useState(null);

    async function getContentData() {
      const res = await axios.get(process.env.GATSBY_CMS_HOST + "/blue-tape/");
      setData(res["data"]);
    }
  
    useEffect(() => {
        context.set({sideNavOpen: false});
        getContentData();
    }, []);

    const htmlContent = data ? marked(data.content) : undefined;

    if(!htmlContent) {
        return(
            <Spinner></Spinner>
        )
    } else {
        return(
            <>
                <h1>Blue tape</h1>
                <div className="head-divider"></div>
                <div
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </>
        );
    }
}

export default BlueTapePage;