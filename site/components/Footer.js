import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Rodape = () => {
    return (
        <Jumbotron fluid className="rodape">
            <style>
                {
                    `
                    .rodape {
                        background-color: #2E4359;
                        color: #B0C4D9;
                        margin-bottom: 0rem !important;
                        padding: 1rem 0rem !important;
                    }
                    `
                }
            </style>
            <Container className="text-center">
                <h2 className="lead">Rodapé</h2>
            </Container>
        </Jumbotron>
    )
}

export default Rodape