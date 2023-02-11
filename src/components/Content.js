import React, { useState } from "react";
import ReactDOM  from "react-dom/client";
import Home from "./Home";
import Technology from "./Technology";
import Destination from "./Destination";
import Crew from "./Crew";

export default function Content({page , setPage}){
    const [entered , setEntered] = useState(true);
    let displayedContent = '';
    if (page == 'home')
    {
        displayedContent = <Home />;
    }else if (page == 'destinations'){
        displayedContent=<Destination />
    } else if (page == 'crew')
    {
        displayedContent = <Crew />
    }else if (page == 'technology'){
        
        displayedContent = <Technology />
    }
    return(
    
        <main className="content" >
            {displayedContent}
        </main>
    )
}