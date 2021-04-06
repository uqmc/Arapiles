import React, {useEffect, useState, useContext} from "react";
import axios from "axios"

import Spinner from "../components/Spinner";
import ContextConsumer from "../components/Context";

const TheTeam = () => {

  const context = useContext(ContextConsumer);
  const [data, setData] = useState(null);

  async function getExecData() {
    const res = await axios.get(process.env.GATSBY_CMS_HOST  + "/execs/");
    setData(res["data"]);
  }

  useEffect(() => {
    context.set({sideNavOpen: false});
    getExecData();
  }, []);

  if(!data) {
    return(
      <Spinner></Spinner>
    );
  } else {
    return (
      <>
        <h1>The Team</h1>
        <div className="head-divider"></div>
        {
          data.map((exec) => {
            return(
              <>
                <h2>{exec.name} - {exec.role}</h2>
                <img src={process.env.GATSBY_CMS_HOST + exec.pfp.formats.small.url}></img>
                <p>{exec.bio}</p>
              </>
            )
          })
        }
  
      </>
    );
  }
};

export default TheTeam;
