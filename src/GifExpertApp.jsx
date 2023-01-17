import React, { useState } from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap';
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
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='#home'>GIF Expert App</Navbar.Brand>
                </Container>
                <Navbar.Collapse>
                    <input type="text"
                        value={inputValue}
                        placeholder={inputValue}
                        onChange={e => setInputValue(e.target.value)} />
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Row>
                    <AddCategory
                        onNewCategory={onAddCategory} />

                </Row>
                <Row>
                    {
                        filteredCategories.map(category => (
                            <GifGrid
                                key={category}
                                category={category}
                                onRemoveCategory={onRemoveCategory} />
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}
