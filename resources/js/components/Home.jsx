import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Container, Row, Col, Card, Carousel } from 'react-bootstrap';

function Home() {
    const [formValue, setformValue] = useState({
        email: '',
        password: ''
    })
    const [email, setEmail] = useState('')
    const [users, setUsers] = useState([])

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault()
        const formData = new FormData()
        formData.append("email", formValue.email)
        formData.append("password", formValue.password)
        formData.append("name", formValue.name)
        axios.post("http://localhost/lygi.web/public/api/students_show",
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
                setUsers(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <section className="categories">
            <Container>
                <Carousel variant = "dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://localhost/lygi.web/resources/images/products/product5.jpg"
                            alt="First slide"
                            width={900} height={450}
                        />
                        <Carousel.Caption>
                            <h3>Classic Cars</h3>
                            <p>Attention car enthusiasts: Make your wildest car ownership dreams come true. </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://localhost/lygi.web/resources/images/products/product1.jpg"
                            alt="Second slide"
                            width={300} height={450}
                        />

                        <Carousel.Caption>
                            <h3>Motorcycles</h3>
                            <p>Our motorcycles are state of the art replicas of classic as well as contemporary motorcycle legends such as Harley Davidson, Ducati and Vespa.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://localhost/lygi.web/resources/images/products/product22.jpg"
                            alt="Third slide"
                            width={900} height={450}
                        />

                        <Carousel.Caption>
                            <h3>Planes</h3>
                            <p>
                            Unique, diecast airplane and helicopter replicas suitable for collections, as well as home, office or classroom decorations.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://localhost/lygi.web/resources/images/products/product63.jpg"
                            alt="Third slide"
                            width={900} height={450}
                        />

                        <Carousel.Caption>
                            <h3>Ships</h3>
                            <p>
                            The perfect holiday or anniversary gift for executives, clients, friends, and family.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://localhost/lygi.web/resources/images/products/product9.jpg"
                            alt="Third slide"
                            width={900} height={450}
                        />

                        <Carousel.Caption>
                            <h3>Trucks and Buses</h3>
                            <p>
                            The Truck and Bus models are realistic replicas of buses and specialized trucks produced from the early 1920s to present.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://localhost/lygi.web/resources/images/products/product19.jpg"
                            alt="Third slide"
                            width={900} height={450}
                        />

                        <Carousel.Caption>
                            <h3>Vintage Cars</h3>
                            <p>
                            Our Vintage Car models realistically portray automobiles produced from the early 1900s through the 1940s.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
}

export default Home;

