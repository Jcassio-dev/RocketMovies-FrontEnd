import { useNavigate } from 'react-router-dom';

import { Container, Profile, LinkTag } from './styles'

import { Input } from '../Input';

import { useAuth } from '../../hooks/auth';

export function Header(){

    const { signOut } = useAuth();

    const navigate = useNavigate();

   function handlesignOut(){
        navigate("/")
        signOut();
    }
    return(
    <Container>
        <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo titulo"/>
        <Profile>
                <div>
                    <LinkTag to="/profile">
                    <strong>José Cássio</strong>
                    </LinkTag>
                    <span onClick={handlesignOut}>Sair</span>
                </div>
                <LinkTag to="/profile">
                 <img 
                src="https://github.com/Jcassio-dev.png" 
                alt="Foto do usuário"/>
                </LinkTag>
        </Profile>
    </Container>
)
}