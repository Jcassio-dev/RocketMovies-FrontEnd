import { useState } from "react";

import { Container, Form, Background } from "./styles"

import {FiMail, FiLock} from "react-icons/fi"

import { Input } from '../../components/Input';
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useAuth } from "../../hooks/auth";

export function SignIn(){
    const data = useAuth()
    console.log(data)

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                />

                <Input
                placeholder="Senha"
                type="password"
                icon={FiLock}
                />
                
                <Button title="Entrar" />
                
                <ButtonText link="/register" title="Criar conta"/>

            </Form>
            <Background/>
        </Container>
    )
}