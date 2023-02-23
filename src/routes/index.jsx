import { BrowserRouter } from "react-router-dom";

import {AuthRoutes} from './Auth.routes'
import { AppRoutes } from "./App.routes";

export function Routes(){
    return(
        <BrowserRouter>
        <AuthRoutes/>
        </BrowserRouter>
    )
}