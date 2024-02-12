import { createContext, useState } from "react";

export const Email = createContext({});

export default function EmailProvider ({children}){
    const[emailAuth , setEmailAuth ] = useState({});
    console.log()
    return <Email.Provider value={{emailAuth , setEmailAuth }}>{children}</Email.Provider>;
}