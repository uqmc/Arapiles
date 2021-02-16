import React, {useEffect, useState} from "react";
import axios from "axios"
import marked from "marked";

import Spinner from "../../components/Spinner";

const YellowTapePage = () => {
    const [data, setData] = useState(null);

    async function getContentData() {
      const res = await axios.get(process.env.GATSBY_CMS_HOST + "/yellow-tape/");
      setData(res["data"]);
    }
  
    useEffect(() => {
        localStorage.setItem("dd-one", "true");
        localStorage.setItem("pg-open", "yellow-tape");
        getContentData();
    }, []);

    const htmlContent = data ? marked(data.content) : undefined;

    if(!htmlContent) {
        return(
            <Spinner />
        )
    } else {
        return(
            <>
                <h1>Yellow Tape</h1>
                <div className="head-divider"></div>
                <div
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </>
        );
    }
}

export default YellowTapePage;