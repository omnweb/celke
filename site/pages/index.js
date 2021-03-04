import Menu from '../components/Menu'
import Rodape from '../components/Footer'
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);



import Head from 'next/head';

function Home() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Home | Celke</title>
                <meta name="description" content="Site desenvolvido na semana de Imersão React da Celke" />
                <link rel="shortcut icon" href="favicon.png" />
            </Head>
            <Menu />
            <Jumbotron fluid className="descr-top">
                <style>
                    {
                        `.descr-top{
                            background-color: #f2f2f2;
                            color: #2E4359;
                            margin-bottom: 0rem !important;
                            padding: 1rem 0rem;
                        }                        
                        `
                    }
                </style>
                <Container className="text-center" >
                    <h1 className="display-4">Temos a solução que sua empresa precisa.</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p className="lead">
                        <a href="/orcamento" className="btn btn-outline-dark btn-lg mt-4">Orçamento</a>
                    </p>
                </Container>
            </Jumbotron>

            <Jumbotron className="servicos" >
                <style>
                    {
                        `.servicos{
                            background-color: #486A8C;
                            color: #B0C4D9;
                            margin-bottom: 0 !important;
                        }
                        .circulo{
                            width:140px;
                            height:140px;
                            background-color: #B0C4D9;
                            font-size:3rem;
                            color: #2E4359;;
                            padding:24px;
                        }
                        .centralizar{
                            margin: 0 auto !important;
                            float: none !important;
                        }
                        `

                    }
                </style>
                <Container className="text-center" >
                    <div>
                        <h2 className="display-4 mb-4">Serviços</h2>
                        <p className="lead pb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu est mattis, ornare felis eu,
                            fermentum ipsum. Suspendisse mollis diam a est pellentesque imperdiet sit amet et ligula. Donec
                            volutpat est urna, pellentesque bibendum mi dapibus ac. Nullam a egestas justo. Sed porttitor
                            tortor mattis, aliquet sem et, congue arcu. Cras nec est vel nunc sagittis tristique.
                            Etiam bibendum fermentum suscipit.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="cogs" />
                            </div>
                            <h2 className="mt-4 mb-4"> Serviço 1</h2>
                            <p className="text-center">
                                Donec eu est mattis, ornare felis eu, fermentum ipsum. Suspendisse mollis diam a est pellentesque
                                imperdiet sit amet et ligula
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="code" />
                            </div>
                            <h2 className="mt-4 mb-4"> Serviço 2</h2>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu est mattis, ornare felis eu,
                                fermentum ipsum. Suspendisse
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="network-wired" />
                            </div>
                            <h2 className="mt-4 mb-4"> Serviço 3</h2>
                            <p className="text-center">
                                fermentum ipsum. Suspendisse mollis diam a est pellentesque imperdiet sit amet et ligula.
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <Rodape />
        </div>
    )
}

export default Home