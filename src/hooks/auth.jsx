import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}){
    async function signIn({email, password}){
        const response = await api.post("/sessions", {email, password})
        console.log(response.data)
    }


    return(
        <AuthContext.Provider value={{email: "cassio@email.com", senha: "123"}}>
        {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context
}

export {AuthProvider, useAuth}