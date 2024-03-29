import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios"

import Spinner from "../components/Spinner";

const TheTeam = () => {

  /*
  He felt that his whole life was some kind of dream
  and he sometimes wondered whose it was and whether
  they were enjoying it.
  */

  const [data, setData] = useState(null);

  async function getExecData() {
    const res = await axios.get(process.env.GATSBY_CMS_HOST  + "/execs/");
    setData(res["data"]);
  }

  useEffect(() => {
    getExecData();
  }, []);

  if(!data) {
    return(
      <main className="content-container">
        <Helmet title="UQMC | The Team" />
        <Spinner />
      </main>
    );
  } else {
    return (
      <main>
        <Helmet title="UQMC | The Team" />

        <div className="content-container">
          <h1 className="">The Team</h1>
        </div>
        
        <div className="content-container">
          {
            data.map((exec) => {
              return(
                <>
                  <div className="exec-profile-left">
                    <h2>{exec.name} - {exec.role}</h2>
                    <div className="media-container">
                      <img src={exec.pfp.formats.small.url}></img>
                    </div>
                  </div>
                  <p className="vertical-center-self">{exec.bio}</p>
                </>
              )
            })
          }
        </div>
      </main>
    );
  }
};

export default TheTeam;
