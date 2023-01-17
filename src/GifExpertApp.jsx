import React, { useState } from 'react'
import { Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import { AddCategory, GifGrid } from './components';

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
                        <Form className='d-flex'>
                            <Form.Control type='text'
                                className='bg-transparent text-light'
                                value={inputValue}
                                placeholder={inputValue}
                                onChange={e => setInputValue(e.target.value)} />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Row className='my-3'>
                    <AddCategory
                        onNewCategory={onAddCategory} />
                </Row>
                {
                    filteredCategories.map(category => (
                        <Row className='my-5' key={category}>
                            <GifGrid
                                key={category}
                                category={category}
                                onRemoveCategory={onRemoveCategory} />
                        </Row>
                    ))
                }

            </Container>
        </>
    )
}
