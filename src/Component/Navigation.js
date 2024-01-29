import React, { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas, ListGroup, FormControl, InputGroup } from 'react-bootstrap';

function Navigation() {
    const [showCart, setShowCart] = useState(false);

    const handleCartClick = () => setShowCart(true);
    const handleCloseCart = () => setShowCart(false);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <div className="container">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/store">Store</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button onClick={handleCartClick} className="bg-danger text-white">Cart</Button>

                <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ListGroup>
                            <ListGroup.Item>
                                <div className="d-flex justify-content-between">
                                    <span>Item 1</span>
                                    <span>$20</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Quantity</span>
                                    <InputGroup className="mb-3" style={{ maxWidth: '80px' }}>
                                        <FormControl type="number" defaultValue="1" />
                                    </InputGroup>
                                </div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <div className="d-flex justify-content-between">
                                    <span>Item 2</span>
                                    <span>$30</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Quantity</span>
                                    <InputGroup className="mb-3" style={{ maxWidth: '80px' }}>
                                        <FormControl type="number" defaultValue="1" />
                                    </InputGroup>
                                </div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <div className="d-flex justify-content-between">
                                    <span>Total</span>
                                    <span>$50</span>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>

                        <Button variant="success" className="mt-3">Purchase</Button>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </Navbar>
    );
}

export default Navigation;
