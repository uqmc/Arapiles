import React, { useEffect } from "react";

const TheTeam = () => {
  useEffect(() => {
    localStorage.setItem("pg-open", "the-team");
  }, []);

  return (
    <p>Execs array</p>
  );
};

export default TheTeam;
