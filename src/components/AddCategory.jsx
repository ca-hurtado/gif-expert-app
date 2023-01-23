import { useState } from "react"
import { Button, Container, Form, Modal, Nav } from "react-bootstrap";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = () => {
        event.preventDefault();

        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return;
        onNewCategory({
            name: newInputValue,
            limit: 10,
            offset: 0
        });
        setInputValue('');
        handleClose();
    }

    return (
        <Container fluid className="border border-bottom-0 bg-dark">
            <Nav className="py-2 container">
                <Nav.Item>
                    <Nav.Link className="text-white" onClick={handleShow}>New Category</Nav.Link>
                </Nav.Item>
            </Nav>
            <Modal show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="text"
                        placeholder='New Category'
                        onChange={onInputChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>Close</Button>
                    <Button variant="success" onClick={onSubmit}>Create</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}
