import { useContext } from "react";
import { Navigate, Route, RouterProps } from "react-router-dom";
import { AuthContext } from "../contexts/auth";


interface Props {
    component: React.ComponentType
    isPrivate: boolean;
    isSigned: boolean;
}

export function CustomRouter({ isPrivate, isSigned, component: RouteComponent }: Props) {

    const { loading } = useContext(AuthContext)

    if (loading) {
        return <div>Carregando</div>
    }

    if (isPrivate && isSigned) {
        return <RouteComponent />
    }

    return <Navigate to='/login' />
}