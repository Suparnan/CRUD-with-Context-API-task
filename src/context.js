import React, { createContext, useState} from "react";

export const mycontext = createContext();

export default function DataProvider({ children }) {
    const [userData, setUserData] = useState([
        {
            id:1,   
            name:"Vadivelu",
            punchline:"Sonamuthaa Pochaaaa",
        }
    ])

    return(
        <>
            <mycontext.Provider value={{ userData, setUserData }}>
                {children}
            </mycontext.Provider>
        </>
    )
}