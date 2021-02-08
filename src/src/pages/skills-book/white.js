import React, {useEffect, useState} from "react";
import axios from "axios"
import marked from "marked";

import Spinner from "../../components/Spinner";

const WhiteTapePage = () => {
    const [data, setData] = useState(null);

    async function getContentData() {
      const res = await axios.get(process.env.GATSBY_CMS_HOST + "/white-tape/");
      setData(res["data"]);
    }
  
    useEffect(() => {
        localStorage.setItem("dd-one", "true");
        localStorage.setItem("pg-open", "white-tape");
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
                <h1>White tape</h1>
                <div
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </>
        );
    }
}

export default WhiteTapePage;