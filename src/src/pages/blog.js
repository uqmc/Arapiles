import React from "react";
import PrimaryLayout from "../layouts/primaryLayout";

const Blog = () => {
    localStorage.setItem("pg-open", "blog");

    return (
        <PrimaryLayout> 
            Blog
        </PrimaryLayout>
    );
};

export default Blog;
