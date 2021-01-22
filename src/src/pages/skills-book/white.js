import React, {useEffect, useState} from "react";
import axios from "axios"
import marked from "marked";

import PrimaryLayout from "../../layouts/primaryLayout";

const WhiteTapePage = () => {
    const [data, setData] = useState(null);

    async function getContentData() {
      const res = await axios.get(process.env.GATSBY_CMS_HOST + "/white-tape/");
      setData(res["data"]);
    }
  
    useEffect(() => {
        getContentData();
    }, []);

    let htmlContent;
    if(data) {
        htmlContent = marked(data.content);
    }

    if(!htmlContent) {
        return(
            <PrimaryLayout>Loading...</PrimaryLayout>
        )
    } else {
        return(
            <PrimaryLayout>
                <h1>White tape</h1>
                <div
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </PrimaryLayout>
        );
    }
}

export default WhiteTapePage;