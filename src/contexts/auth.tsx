import { createContext, useEffect, useState } from "react";
import api from "../services/api";


// Provider -> Englobar os componentes
// Context -> Contexto especifico

interface AuthContextData {
    signed: boolean;
    setSigned: (signed: boolean) => void,
    signIn: () => void,
    loading: boolean,
    user: User
}

interface Props {
    children: React.ReactNode;
}

interface User {
    name: string;
}

const initialContext = {
    signed: false,
    setSigned: () => { },
    signIn: () => { },
    loading: false,
    user: {
        name: ''
    },
    token: null
}

const AuthContext = createContext<AuthContextData>(initialContext);

function AuthProvider({ children }: Props) {

    async function signIn() {
        setLoading(true);

        setTimeout(() => {
            setUser({
                name: 'Douglas'
            });

            setToken('tokenaksakjsakjsa');

            setSigned(true);
            setLoading(false);
        }, 4000)
    }

    const [signed, setSigned] = useState(initialContext.signed);
    const [user, setUser] = useState<User>(initialContext.user);
    const [token, setToken] = useState<string | null>(initialContext.token);
    const [loading, setLoading] = useState(initialContext.loading);


    useEffect(() => {
        console.log(loading === true ? 'carregando' : 'parado')

    }, [loading])

    return (
        <AuthContext.Provider value={{
            signed,
            setSigned,
            signIn,
            loading,
            user
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider }

