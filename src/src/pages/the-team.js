import React from "react";
import PrimaryLayout from "../layouts/primaryLayout";

const TheTeam = () => {
  localStorage.setItem("pg-open", "the-team");

  return (
    <PrimaryLayout>
      Execs array
    </PrimaryLayout>
  );
};

export default TheTeam;
