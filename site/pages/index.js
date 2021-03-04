import Menu from '../components/Menu'
import Rodape from '../components/Footer'
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);



import Head from 'next/head';

function Home({ data }) {
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
                    <h1 className="display-4">{data.home.topTitulo}</h1>
                    <p className="lead">{data.home.topSubtitulo}</p>
                    <p className="lead">
                        <a href={data.home.topLinkBtn} className="btn btn-outline-dark btn-lg mt-4">{data.home.topTextoBtn}</a>
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
                        <h2 className="display-4 mb-4">{data.home.serTitulo}</h2>
                        <p className="lead pb-4">{data.home.serSubtitulo} </p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon={data.home.serUmIcone} />
                            </div>
                            <h2 className="mt-4 mb-4">{data.home.serUmTitulo}</h2>
                            <p className="text-center">{data.home.serUmDesc}</p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon={data.home.serDoisIcone} />
                            </div>
                            <h2 className="mt-4 mb-4">{data.home.serDoisTitulo}</h2>
                            <p className="text-center">{data.home.serDoisDesc}</p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon={data.home.serTresIcone} />
                            </div>
                            <h2 className="mt-4 mb-4">{data.home.serTresTitulo}</h2>
                            <p className="text-center">{data.home.serTresDesc}</p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <Rodape />
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3001/home`)
    const data = await res.json()

    return { props: { data } }
}



export default Home