import React, {createContext, useState} from 'react';


const LoginContext = createContext()

const LoginProviderWrapper = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>{children}</LoginContext.Provider>
}

export {LoginContext, LoginProviderWrapper}