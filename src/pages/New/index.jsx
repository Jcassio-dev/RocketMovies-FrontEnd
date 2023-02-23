import { Container, Form, Section } from "./styles";

import {FiArrowLeft} from 'react-icons/fi'

import {Header} from '../../components/Header';
import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText';
import {Input} from '../../components/Input';
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";

export function New(){
    return(
        <Container>
            <Header/>
            <Form>
                <ButtonText icon={FiArrowLeft} title="Voltar" link="/"/>
                <h1>Novo filme</h1>

                <div className="Wrapper">
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                </div>

                <Textarea placeholder="Observação"/>

                <Section>
                    <h2>Marcadores</h2>

                    <div>
                        <NoteItem value='React'/>
                        <NoteItem placeholder='Novo marcador' isNew />
                    </div>
                </Section>

                <div className="Wrapper">
                    <Button title='Excluir filme' dark/>
                    <Button title='Salvar alterações'/>
                </div>
            </Form>
        </Container>
    );
}