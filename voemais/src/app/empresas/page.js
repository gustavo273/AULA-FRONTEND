'use client'

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { IoIosAirplane } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";




export default function Page() {

    const[empresas, setEmpresas] = useState([])
    useEffect(() => {
        setEmpresas(JSON.parse(localStorage.getItem('empresas')) || [])
    }, [])

    function excluir(id){
        if (confirm('Deseja realmente excluir?')){
         const dados = empresas.filter(item=>item.id != id)
         localStorage.setItem('empresas', JSON.stringify(dados))
         setEmpresas(dados)
        }
    }

    return (
        <Pagina titulo="Empresas">

            <div className="d-flex justify-content-start mb-3">
                <Link href="/empresas/form" className="btn btn-dark me-2"><FaPlus /></Link>
            </div>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Logo</th>
                    </tr>
                </thead>
                <tbody>
                    {empresas.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={`/empresas/form/${item.id}`}>
                                <FaPen 
                                title='Editar' className="ms-2 me-2 text-primary" />
                                </Link>

                                <FaTrashAlt
                                title='Excluir' 
                                className="text-danger"
                                onClick={() => excluir(item.id)} />
                            </td>
                            <td>{item.nome}</td>
                            <td>
                                <Link href={item.site}>
                                    <img src={item.logo} alt={item.nome} height={"70px"} width={"100px"} />
                                </Link></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}