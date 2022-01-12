import { useContext } from 'react';
import { useAuth } from '../../contexts/auth';
import logo from '../../logo.svg';
import { Container, Img, Input, Button } from './styles';



function SignIn() {

    const context = useAuth()

    function handleSignIn() {
        context.signIn();
    }

    return (
        <Container>
            <Img src={logo} alt="logo" />
            <Input type="text" defaultValue="test@email.com" />
            <Input type="password" defaultValue="12345678" />
            <Button onClick={handleSignIn}>
                {context.loading ? 'Carregando ...' : 'Entrar'}
            </Button>
        </Container>
    )
}

export default SignIn;