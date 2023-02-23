import {FiArrowLeft, FiUser, FiLock, FiMail, FiCamera} from 'react-icons/fi'
import { Container, Form, Avatar } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile (){
    return(
        <Container>
            <header>
                <ButtonText title="Voltar" icon={FiArrowLeft} link="/"/>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src="https://www.github.com/Jcassio-dev.png" 
                    alt="Foto do usuário" 
                    />
                    <label htmlFor="Avatar">
                        <FiCamera/>

                        <input 
                        type="file" 
                        id="avatar"
                        />
                    </label>
                </Avatar>

                <Input placeholder="Nome" type="text" icon={FiUser}/>
                <Input placeholder="E-Mail" type="text" icon={FiMail}/>
                <Input placeholder="Senha atual" type="password" icon={FiLock}/>
                <Input placeholder="Nova senha" type="password" icon={FiLock}/>
                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}