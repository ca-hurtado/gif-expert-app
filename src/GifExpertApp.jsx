import React, { useState } from 'react'
import { Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import { AddCategory, GifGrid, GifItem } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(
        [{
            name: 'Megaman',
            limit: 10,
            offset: 0,
            images: []
        }]
    );

    const [inputValue, setInputValue] = useState("");

    const filteredcategories = categories.filter(categories => categories['name'].toLowerCase().includes(inputValue.toLowerCase()));

    const onAddCategory = (newCategory) => {
        if (categories.some(category => category['name'].includes(newCategory['name']))) return;
        setCategories([newCategory, ...categories]);
    }

    const onRemoveCategory = (actualCategory) => {
        if (!categories.some(category => category['name'].includes(actualCategory))) return;
        setCategories(prevCategories => {
            return prevCategories.filter(category => !category['name'].includes(actualCategory))
        });
    }

    const onUpdateImagesCategory = (category) => {
        const newCategories = categories.map((actualCategory, i) => {
            console.log(actualCategory['name']);
            if(actualCategory.name == category.name) 
                actualCategory = category;
        })
        setCategories(newCategories);
    }

    return (
        <>
            <Navbar bg='dark' variant='dark' expand='lg'>
                <Container>
                    <Navbar.Brand href='#home'>GIF Expert App</Navbar.Brand>
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
                    filteredcategories.map(category => (
                        <Container fluid className='bg-light' key={category['name']}>
                            <GifGrid
                                type="query"
                                category={category}
                                onRemoveCategory={onRemoveCategory}
                                onUpdateImagesCategory={onUpdateImagesCategory} />
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
