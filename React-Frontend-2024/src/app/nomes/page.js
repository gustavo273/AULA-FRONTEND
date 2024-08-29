'use client'
import { Button } from "react-bootstrap";
import Pagina from "../components/Pagina";
import { useState } from "react";

export default function Page() {

    const [nome, setNome]= useState('Vitor')

function alterarNome (){
    const novoNome = nome == 'Vitor' ? 'Vitor Alves Modesto' : 'Vitor'
setNome(novoNome)
}

    return (
        <>
        <Pagina titulo="Nomes:">
            <h1>{nome}</h1>
            <Button onClick={alterarNome}>Alterar nome</Button>
            </Pagina>
        </>
    )
}