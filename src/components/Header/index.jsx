import { Container, Profile } from './styles'

import { Input } from '../Input'

export function Header(){
    return(
    <Container>
        <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo titulo"/>
        <Profile to="/profile">
                <div>
                    <strong>José Cássio</strong>
                    <span>Sair</span>
                </div>
                 <img 
                src="https://github.com/Jcassio-dev.png" 
                alt="Foto do usuário"/>
        </Profile>
    </Container>
)
}