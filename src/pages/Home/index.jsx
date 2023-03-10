import { Container, Content, LinkButton, Menu } from "./styles";

import { api } from "../../services/api";

import {FiPlus} from 'react-icons/fi'

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { MovieCard } from "../../components/MovieCard";
import { useEffect, useState } from "react";

export function Home(){
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);
    
    useEffect(()=> {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data)
        }

        fetchNotes();
    }, [search])
    return(
        <Container>
            <Header>
                <Input placeholder="Pesquisar pelo titulo" onChange={e => setSearch(e.target.value)}/>
            </Header>
            <Content>
                <div>
                    <h1>Meus filmes</h1> 
                    <LinkButton to="/new"> <FiPlus/> Adicionar filme</LinkButton>
                </div>  

                <Menu>
                    {
                        notes && 
                        notes.map(note => (
                            <MovieCard
                            key={String(note.id)}
                            data={note}
                            />
                        ))
                    }
                   
                </Menu> 
            </Content>

        </Container>
    );
}