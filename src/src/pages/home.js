import React , { useEffect }from "react";

const Home = () => {
    useEffect(() => {
        localStorage.setItem("pg-open", "home");
    }, []);

    return (
        <p>Home</p>
    );
};

export default Home;
