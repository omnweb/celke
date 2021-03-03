import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <div>
                <style>
                    {`
                        .menu-custom{
                            background-color: #2E4359;
                        }
                    `}
                </style>
                <Navbar className="menu-custom" dark expand="md">
                    <Container>
                        <NavbarBrand href="/">Celke</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/orcamento">Orçamento</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default Menu