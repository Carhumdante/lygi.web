import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Container, Row, Col, Card, Input } from 'react-bootstrap';

function Example() {
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
        
    );
}

export default Example;

