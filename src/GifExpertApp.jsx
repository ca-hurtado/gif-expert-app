import React, { useState } from 'react'
import { Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import { AddCategory, GifGrid, GifItem } from './components';
import { AddImages } from './components/AddImages';
import { DeleteCategory } from './components/DeleteCategory';

export const GifExpertApp = () => {
    const [categories2, setCategories2] = useState
        ([{
            name: 'One Punch',
            limit: 10,
            offset: 0
        }]);

    const [inputValue, setInputValue] = useState("");

    const filteredCategories2 = categories2.filter(categories => categories['name'].toLowerCase().includes(inputValue.toLowerCase()));

    const onAddCategory2 = (newCategory) => {
        if (categories2.some(category => category['name'].includes(newCategory['name']))) return;
        setCategories2([newCategory, ...categories2]);
    }

    const onRemoveCategory2 = (actualCategory) => {
        if (!categories2.some(category => category['name'].includes(actualCategory))) return;
        setCategories2(prevCategories => {
            return prevCategories.filter(category => !category['name'].includes(actualCategory))
        });
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
            <AddCategory onNewCategory={onAddCategory2} />
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
                    filteredCategories2.map(category => (
                        <Container fluid className='bg-light' key={category['name']}>
                            <Row className='py-5 border border-top-0'>
                                <Col>
                                    <GifGrid
                                        key={category['name']}
                                        type="query"
                                        category={category['name']} />
                                </Col>
                            </Row>
                            <Row className='py-3 border border-top-0 bg-white'>
                                <Col>
                                    <Container>
                                        <AddImages category={category['name']}
                                            onRemoveCategory={onRemoveCategory2} />
                                        <DeleteCategory category={category['name']}
                                            onRemoveCategory={onRemoveCategory2} />
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
