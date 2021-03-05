import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ContactForm = (props) => {
  return (
    <div className="col">
        <Form>
            <Label className="contactLabel align-center">Оценете ни, вашето мнение има значение:</Label>
            <FormGroup>
                <Label for="exampleEmail">E-mail</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Въведете е-mail адреса си.." />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Оценка</Label>
                <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Коментар</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button>Изпрати</Button>
        </Form>
    </div>
  );
}

export default ContactForm;