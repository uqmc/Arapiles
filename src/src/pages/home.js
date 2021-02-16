import React , { useEffect }from "react";

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

export default Home;
