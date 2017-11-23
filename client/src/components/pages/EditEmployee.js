import React from 'react';
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';

export default class EditEmployee extends React.Component {
    constructor() {
        this.state = {
            employee: {
                id: null,
                name: null,
                email: null
            }
        }
    }

    handleSubmit() {

    }

    render() {
        return (
            <div>
                <Container>
                    <Form>
                        <FormGroup>
                            <Label for="nameInput">Name</Label>
                            <Input type="text" id="nameInput" placeholder="Edit employee name"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="emailInput">Email</Label>
                            <Input type="email" id="emailInput" placeholder="Edit employee email"/>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>

                </Container>
            </div> 
        )
    }
}