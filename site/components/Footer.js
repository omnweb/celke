import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Rodape = () => {
    return (
        <Jumbotron fluid className="rodape">
            <style>
                {
                    `
                    .rodape {
                        background-color: #343a40;
                        color: #e2e2e2;
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