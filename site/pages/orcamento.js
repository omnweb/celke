import React, { useState } from 'react';
import Head from 'next/head';
import Menu from '../components/Menu'
import Rodape from '../components/Footer'


import { Container, Jumbotron, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

function Orcamento() {
    const [orcamento, setOrcamento] = useState({
        name: '',
        email: '',
        phone: '',
        whatsapp: '',
        project: ''
    })

    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: ''
    })

    const inputChangeHandler = (event) => setOrcamento({
        ...orcamento, //Pegando os valores do estado antigo
        [event.target.name]: event.target.value //Pegando os valores digitados
    })

    const sendOrcamento = async e => {
        e.preventDefault()
        setResponse({ formSave: true })

        try {
            const res = await fetch('http://localhost:3001/orcamento', {
                method: 'POST',
                body: JSON.stringify(orcamento),
                headers: { 'Content-Type': 'application/json' }
            })

            const responseEnv = await res.json()

            if (responseEnv.error) {
                setResponse({
                    formSave: false,
                    type: 'error',
                    message: responseEnv.message
                })
            } else {
                setResponse({
                    formSave: false,
                    type: 'success',
                    message: responseEnv.message
                })
            }
        }
        catch (err) {
            setResponse({
                formSave: false,
                type: 'error',
                message: 'Erro ao enviar Orçamento'
            })
        }
    }

    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Orçamento </title>
                <meta name="description" content="Página de Orçamento" />
            </Head>
            <Menu />
            <Jumbotron fluid className="descr-top">
                <style>
                    {
                        `.descr-top{
                            background-color: #B0C4D9;
                            color: #2E4359;
                            margin-bottom: 0rem !important;
                            padding: 2rem 0rem;
                        }                        
                        `
                    }
                </style>
                <Container className="text-center" >
                    <h1 className="display-4">Orçamento</h1>
                </Container>

            </Jumbotron>
            <Jumbotron fluid className="form-orcamento">
                <style>
                    {
                        `.form-orcamento{
                            background-color: #fefefe;
                            color: #2E4359;
                            margin-bottom: 0rem !important;
                            padding: 3rem 0rem;
                        }                        
                        `
                    }
                </style>
                <Container >
                    {response.type === 'error' ? <Alert color="danger">{response.message}</Alert> : ""}
                    {response.type === 'success' ? <Alert color="success">{response.message}</Alert> : ""}

                    <Form onSubmit={sendOrcamento}>
                        <FormGroup>
                            <Label for="name">Nome</Label>
                            <Input
                                type="text"
                                name="name" id="name"
                                placeholder="Preencha seu nome"
                                onChange={inputChangeHandler}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">E-Mail</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Preencha seu email"
                                onChange={inputChangeHandler}
                            />

                        </FormGroup>

                        <FormGroup>
                            <Label for="phone">Telefone</Label>
                            <Input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="(xx) xxxx-xxxx"
                                onChange={inputChangeHandler}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="whatsapp">Whatsapp</Label>
                            <Input
                                type="tel"
                                name="whatsapp"
                                id="whatsapp"
                                placeholder="(xx) xxxxx-xxxx"
                                onChange={inputChangeHandler}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="project">Projeto</Label>
                            <Input
                                type="textarea"
                                name="project"
                                id="project"
                                placeholder="Conte um pouco sobre seu projeto"
                                onChange={inputChangeHandler}
                            />
                        </FormGroup>
                        {response.formSave ? <Button disabled type="submit" color="secondary">Enviando...</Button> : <Button type="submit" color="dark">Enviar</Button>}

                    </Form>
                </Container>

            </Jumbotron>
            <Rodape />
        </div>
    )
}

export default Orcamento