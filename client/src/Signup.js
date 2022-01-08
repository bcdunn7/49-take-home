import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import './Signup.css';

const Signup = () => {
    const navigate = useNavigate();

    const INITIAL_STATE = {
        email: '',
        firstName: '',
        lastName: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        fetch('/users', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(() => {
                setFormData(INITIAL_STATE);
                navigate('/');
            })
            .catch(e => console.error(e))
    }

    return (
        <div>
            <h1>Yodlr Registration Portal</h1>
            <Form className="Signup-form" onSubmit={handleSubmit}>
                <FormGroup>
                    Email: <Input
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        name="email">
                    </Input>
                    First Name: <Input
                        value={formData.firstName}
                        onChange={handleChange}
                        type="text"
                        name="firstName">
                    </Input>
                    Last Name: <Input
                        value={formData.lastName}
                        onChange={handleChange}
                        type="text"
                        name="lastName">
                    </Input>
                    <br></br>
                    <Button type="submit">Submit</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Signup;