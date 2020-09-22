import React from "react";
import PrimaryLayout from "../layouts/primaryLayout";
import {PageHeader} from "antd";

const TheTeam = () => {
  return(
    <PrimaryLayout>
      <PageHeader
        title="The Team"
        onBack={() => window.history.back()}
      ></PageHeader>

      <p>Executives list and bios</p>
    </PrimaryLayout>
  );
};

export default TheTeam;
