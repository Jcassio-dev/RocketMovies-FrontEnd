import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [data, setData] = useState({});

    async function signIn({email, password}){
        try{
        const response = await api.post("/sessions", {email, password})
        const {token, user} = response.data;

        localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
        localStorage.setItem("@rocketmovies:token", token)

        api.defaults.headers.common['Authorization'] = `Barrer ${token}`
        setData({user, token})

        }catch(error){

            if(error.response){
                toast.error(error.response.data.message);
            }else{
                toast.error("Não foi possível fazer login")
            }
        }
    }


    async function signOut(){
        localStorage.removeItem("@rocketmovies:user");
        localStorage.removeItem("@rocketmovies:token");

        setData({});
    }

    async function updateProfile({user}){
        try{
            await api.put("/users", user);
            
            user.password='';
            user.old_password='';

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
            
            setData({user, token:data.token});

            toast.success("Perfil atualizado!")


        } catch(error){

            if(error.response){
                toast.error(error.response.data.message);
            }else{
                toast.error("Não foi possível fazer login")
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketmovies:token");
        const user = localStorage.getItem("@rocketmovies:user");

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Barrer ${token}`
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return(
        <AuthContext.Provider value={{signIn, signOut, updateProfile, user: data.user}}>
        {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context
}

export {AuthProvider, useAuth}