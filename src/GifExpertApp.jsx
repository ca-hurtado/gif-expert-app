import React, { useState } from 'react'
import { Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import { AddCategory, GifGrid, GifItem } from './components';
import { AddImages } from './components/AddImages';
import { DeleteCategory } from './components/DeleteCategory';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    const [inputValue, setInputValue] = useState("");

    const filteredCategories = categories.filter(category => {
        return category.toLowerCase().includes(inputValue.toLowerCase())
    });

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    const onRemoveCategory = (category) => {
        if (!categories.includes(category)) {
            return;
        }
        setCategories(prevCategories => {
            return prevCategories.filter(item =>
                !item.includes(category)
            )
        })
    }

    return (
        <>
            <Navbar bg='dark' variant='dark' expand='lg'>
                <Container>
                    <Navbar.Brand href='#home'>GIF Expert App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end">

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='bg-light'>
                <Container className='py-5 px-0 d-flex'>
                    <Container className='d-flex align-self-center flex-column'>
                        <Row>
                            <Col><h1>Expect the unexpected</h1></Col>
                        </Row>
                        <Row>
                            <Col><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non ex efficitur, auctor ipsum sit amet, porta tellus. Vestibulum at porttitor est. Aenean nec ipsum justo. Donec consectetur euismod purus sed elementum. Aliquam sed odio elementum, facilisis sem non, lobortis tortor.</p></Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row className='d-flex'>
                            <Col className='align-self-end'>
                                <GifItem
                                    type="random"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
            <AddCategory onNewCategory={onAddCategory} />
            <div className='border'>
                <Container className='py-3'>
                    <Form>
                        <Form.Label>Search...</Form.Label>
                        <Form.Control type='text'
                            value={inputValue}
                            placeholder={inputValue}
                            onChange={e => setInputValue(e.target.value)} />
                    </Form>
                </Container>
            </div>
            <div>
                {
                    filteredCategories.map(category => (
                        <Container fluid className='bg-light' key={category}>
                            <Row className='py-5 border border-top-0'>
                                <Col>
                                    <GifGrid
                                        key={category}
                                        type="query"
                                        category={category} />
                                </Col>
                            </Row>
                            <Row className='py-3 border border-top-0 bg-white'>
                                <Col>
                                    <Container>
                                        <AddImages category={category}
                                            onRemoveCategory={onRemoveCategory} />
                                        <DeleteCategory category={category}
                                            onRemoveCategory={onRemoveCategory} />
                                    </Container>
                                </Col>

                            </Row>
                        </Container>
                    ))
                }
            </div>
            <footer className='bg-dark text-white'>
                <Container className='py-3'>
                    <p>Phasellus non blandit leo. Cras consequat magna eu justo pulvinar, eget ullamcorper risus lobortis. Praesent non orci id arcu aliquam dignissim ut id tortor.</p>
                </Container>
            </footer>
        </>
    )
}
