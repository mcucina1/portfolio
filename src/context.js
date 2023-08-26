import React, { useContext, useEffect, useState } from "react"
import { projects }  from './assets/static/data.js'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  
    return (
        <AppContext.Provider
        value={{
            projects
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}