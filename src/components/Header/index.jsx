import { Container, Profile, LinkTag } from './styles'

import { Input } from '../Input'

export function Header(){
    return(
    <Container>
        <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo titulo"/>
        <Profile>
                <div>
                    <LinkTag to="/profile">
                    <strong>José Cássio</strong>
                    </LinkTag>
                    <span>Sair</span>
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