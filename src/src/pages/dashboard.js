import React , { useEffect } from "react";

const Dashboard = () => {
    useEffect(() => {
        localStorage.setItem("pg-open", "dashboard");
    }, []);

    return (
        <>
            <p>Dashboard</p>
        </>
    );
};

/*

Flu bomb recipe:
 - 1 clove of garlic, minced
 - A significant amount of ginger, grated fine
 - A nugget of turmeric, grated fine
 - 1 lemon, juiced
 - 1 tablespoon of honey
 - Half a glass of warm water
 - Love

Combine and consume twice per day as soon as flu/
cold symptoms come about.

*/

export default Dashboard;
