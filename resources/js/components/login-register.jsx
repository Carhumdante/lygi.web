import React, { useState } from 'react';

function LogReg() {

    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    return (
        // <Container className="p-3 my-5 d-flex flex-column w-50">

        //     <Tabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        //         <TabsItem>
        //             <TabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
        //                 Login
        //             </TabsLink>
        //         </TabsItem>
        //         <TabsItem>
        //             <TabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
        //                 Register
        //             </TabsLink>
        //         </TabsItem>
        //     </Tabs>

        //     <TabsContent>

        //         <TabsPane show={justifyActive === 'tab1'}>

        //             <div className="text-center mb-3">
        //                 <p>Sign in with:</p>

        //                 <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
        //                     <Button tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        //                     </Button>

        //                     <Button tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        //                     </Button>

        //                     <Button tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        //                     </Button>

        //                     <Button tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        //                     </Button>
        //                 </div>

        //                 <p className="text-center mt-3">or:</p>
        //             </div>

        //             <Form>
        //                 <Form.Group className="mb-3" controlId="formBasicEmail">
        //                     <Form.Label>Email address</Form.Label>
        //                     <Form.Control type="email" placeholder="Enter email" />
        //                     <Form.Text className="text-muted">
        //                         We'll never share your email with anyone else.
        //                     </Form.Text>
        //                 </Form.Group>

        //                 <Form.Group className="mb-3" controlId="formBasicPassword">
        //                     <Form.Label>Password</Form.Label>
        //                     <Form.Control type="password" placeholder="Password" />
        //                 </Form.Group>
        //                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //                     <Form.Check type="checkbox" label="Check me out" />
        //                 </Form.Group>
        //                 <Button variant="primary" type="submit">
        //                     Submit
        //                 </Button>
        //             </Form>


        //             <Button className="mb-4 w-100">Sign in</Button>
        //             <p className="text-center">Not a member? <a href="#!">Register</a></p>

        //         </TabsPane>

        //         <TabsPane show={justifyActive === 'tab2'}>

        //             <div className="text-center mb-3">
        //                 <p>Sign un with:</p>

        //                 <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
        //                     <Button tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        //                     </Button>

        //                     <Button tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        //                     </Button>

        //                     <Button tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        //                     </Button>

        //                     <Button tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        //                     </Button>
        //                 </div>

        //                 <p className="text-center mt-3">or:</p>
        //             </div>

        //             <Form>
        //                 <Form.Group className="mb-3" controlId="formBasicEmail">
        //                     <Form.Label>Email address</Form.Label>
        //                     <Form.Control type="email" placeholder="Enter email" />
        //                     <Form.Text className="text-muted">
        //                         We'll never share your email with anyone else.
        //                     </Form.Text>
        //                 </Form.Group>

        //                 <Form.Group className="mb-3" controlId="formBasicPassword">
        //                     <Form.Label>Password</Form.Label>
        //                     <Form.Control type="password" placeholder="Password" />
        //                 </Form.Group>
        //                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //                     <Form.Check type="checkbox" label="Check me out" />
        //                 </Form.Group>
        //                 <Button variant="primary" type="submit">
        //                     Submit
        //                 </Button>
        //             </Form>

        //             <Button className="mb-4 w-100">Sign up</Button>

        //         </TabsPane>

        //     </TabsContent>

        // </Container>
        <></>
    );
}

export default LogReg;
