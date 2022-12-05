import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Shop() {
    const [shop, setShop] = useState([])
    const productCode = useParams()
    const [show, setShow] = useState(false);

    useEffect(() => {
        const formData = new FormData()
        formData.append("productCode", productCode['product'])
        axios.post("http://localhost/lygi.web/public/api/product_index",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            if (response.status == 200) {
                console.log(response.data)
                //setEmail(response.data)
                setShop(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <>
        <Container>
            <Col>
                <Card className="text-center">
                    <Card.Header>{shop.productCode}</Card.Header>
                    <Card.Img
                        variant="top"
                        src={"http://localhost/lygi.web/resources/images/products/" + shop.image_name + ".jpg"}
                        height='250'
                    />
                    <Card.Body>
                        <Card.Title>{shop.productName}</Card.Title>
                        <Card.Text>
                            {shop.productDescription}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">Stock: {shop.quantityInStock}</Card.Footer>
                    <Alert show={show} variant="success">
                        <Alert.Heading>Congratulations!!!</Alert.Heading>
                        <p>
                        You have just bought the best scale product on the web, we assure you that you will not regret it.
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Close me y'all!
                            </Button>
                        </div>
                    </Alert>
                    {!show && <Button size = 'lg' onClick={() => setShow(true)}>Buy</Button>}
                </Card>
            </Col>
        </Container >
        </>
    )
}

export default Shop
