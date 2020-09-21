import React from "react";
import PrimaryLayout from "../layouts/primaryLayout";
import { Button } from "antd";

const Home = () => {
  return(
    <PrimaryLayout>
      <h1>Main Page</h1>
      <Button type="primary">Test Button</Button>
    </PrimaryLayout>
  );
};

export default Home;
