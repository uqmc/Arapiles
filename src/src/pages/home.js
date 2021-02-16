import React , { useEffect } from "react";

import ContextConsumer from "../components/Context";

const Home = () => {
    useEffect(() => {
        localStorage.setItem("pg-open", "home");
    }, []);

    return (
        <>
            <ContextConsumer>
                {({ data, set }) => (
                    <div onClick={() => set({ menuOpen: !data.menuOpen })}>
                        {data.menuOpen ? `Opened Menu` : `Closed Menu`}
                    </div>
                )}
            </ContextConsumer>
            <p>Home</p>
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

export default Home;
