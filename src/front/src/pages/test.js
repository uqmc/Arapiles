import React, {useEffect, useState} from "react";
import axios from "axios"
import PrimaryLayout from "../layouts/primaryLayout";

import Spinner from "../components/Spinner";

const Test = () => {
  const [data, setData] = useState(null);

  async function getImageData() {
    const res = await axios.get(process.env.GATSBY_CMS_HOST + "/images/");
    setData(res["data"]);
  }

  useEffect(() => {
    getImageData();
  }, []);

  if(!data) {
    return(
      <PrimaryLayout><Spinner /></PrimaryLayout>
    )
  } else {
    return(
      <PrimaryLayout>
        {
          data.map((image) => {
            return (
              <>
                <h1>{image.title}</h1>
                <img alt={image.Title} src={process.env.GATSBY_CMS_HOST + image.picture.formats.thumbnail.url}/>
                <p>Created at: {image.picture.createdAt}</p>
              </>
            )
          })
        }
      </PrimaryLayout>
    )
  }
};

export default Test;
