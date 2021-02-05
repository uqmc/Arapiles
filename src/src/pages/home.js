import React from "react";
import PrimaryLayout from "../layouts/primaryLayout";

const Home = () => {
    localStorage.setItem("pg-open", "home");

    return (
        <PrimaryLayout> 
            Home
        </PrimaryLayout>
    );
};

export default Home;
