import React from 'react'
export const UserContext = React.createContext()

export function ThemeProvider({value, children}){
    return (<>
         <UserContext.Provider value={value}>
             {children}
         </UserContext.Provider>
        </>)
}