import React, {useEffect, useState} from "react";
import axios from "axios"
import marked from "marked";

import Spinner from "../../components/Spinner";

const RedTapePage = () => {
    const [data, setData] = useState(null);

    async function getContentData() {
      const res = await axios.get(process.env.GATSBY_CMS_HOST + "/red-tape/");
      setData(res["data"]);
    }
  
    useEffect(() => {
        localStorage.setItem("dd-one", "true");
        localStorage.setItem("pg-open", "red-tape");
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
                <h1>Red tape</h1>
                <div
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </>
        );
    }
}

export default RedTapePage;