import { useState } from 'react'
import {FiArrowLeft, FiUser, FiLock, FiMail, FiCamera} from 'react-icons/fi'

import { Container, Form, Avatar } from './styles'
import { useAuth } from "../../hooks/auth"

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'



export function Profile (){
    const {user, updateProfile} = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState("")
    const [passwordNew, setPasswordNew] = useState("")

    async function handleUpdate(){
        const user ={
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        await updateProfile({user})
    }

    return(
        <Container>
            <header>
                <ButtonText title={"Voltar"} icon={FiArrowLeft} link={-1}/>
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

                <Input 
                placeholder="Nome" 
                type="text" 
                icon={FiUser}
                value={name}
                onChange={e => setName(e.target.value)}
                />

                <Input 
                placeholder="E-Mail" 
                type="text" 
                icon={FiMail}
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <Input 
                placeholder="Senha atual" 
                type="password" 
                icon={FiLock}
                onChange={e => setPasswordOld(e.target.value)}
                />

                <Input 
                placeholder="Nova senha" 
                type="password" 
                icon={FiLock}
                onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar"  onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}