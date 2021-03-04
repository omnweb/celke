import Menu from '../components/Menu'
import Rodape from '../components/Footer'
import Head from 'next/head';


import { Container, Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap'

function Orcamento() {
    return (
        <div>
            <Menu />
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Orçamento </title>
                <meta name="description" content="Página de Orçamento" />
            </Head>
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
                    <Form>
                        <FormGroup>
                            <Label for="name">Nome</Label>
                            <Input type="text" name="name" id="name" placeholder="Preencha seu nome" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">E-Mail</Label>
                            <Input type="email" name="email" id="email" placeholder="Preencha seu email" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="phone">Telefone</Label>
                            <Input type="tel" name="phone" id="phone" placeholder="(xx) xxxx-xxxx" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="whatsapp">Whatsapp</Label>
                            <Input type="tel" name="whatsapp" id="whatsapp" placeholder="(xx) xxxxx-xxxx" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="project">Projeto</Label>
                            <Input type="textarea" name="project" id="project" placeholder="Conte um pouco sobre seu projeto" />
                        </FormGroup>

                        <Button type="submit" color="dark">Submit</Button>
                    </Form>
                </Container>

            </Jumbotron>
            <Rodape />
        </div>
    )
}

export default Orcamento