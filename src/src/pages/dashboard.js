import React, {useEffect, useContext } from "react";

import ContextConsumer from "../components/Context";

const Dashboard = () => {
    
    const context = useContext(ContextConsumer);

    useEffect(() => {
        context.set({sideNavOpen: false});
      }, []);
    
    return (
        <>
            <p>Dashboard coming soon...</p>

            <div className="image-gallery">
                <img className="image-gallery-image" src="https://i.imgur.com/CzZR4NW.jpg"></img>
                <img className="image-gallery-image" src="https://i.imgur.com/4DtMgVj.jpg"></img>
                <img className="image-gallery-image" src="https://i.imgur.com/I8FOz9B.jpg"></img>
                <img className="image-gallery-image" src="https://i.imgur.com/Bd0jYtm.jpg"></img>
                <img className="image-gallery-image" src="https://i.imgur.com/w4HDx3m.jpg"></img>
                <img className="image-gallery-image" src="https://i.imgur.com/ZPyB4dF.jpg"></img>
                <img className="image-gallery-image" src="https://i.imgur.com/rVAdwkw.jpg"></img>
                <img className="image-gallery-image" src="https://i.imgur.com/3cseHKX.jpg"></img>
                <img className="image-gallery-image" src="https://i.imgur.com/7yK4ALa.jpg"></img>
                <img className="image-gallery-image" src="https://i.imgur.com/MOTuRTN.jpg"></img>
                <img className="image-gallery-image" src="https://i.imgur.com/FPPQIqz.jpg"></img>
                <img className="image-gallery-image" src="https://i.imgur.com/4G9kNJI.jpg"></img>
                <img className="image-gallery-image" src="https://i.imgur.com/7Cu5L4C.jpg"></img>
                <img className="image-gallery-image" src="https://i.imgur.com/1GgbUCF.jpg"></img>
            </div>
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
