import { Navigate } from "react-router";

export function PublicRoute({isAuth, component: Comopnent}){
    return(
        <>
        <h1>PUBLIC</h1>
        {isAuth ? <Navigate to="/" /> : <Comopnent />}
        </>
    )
}