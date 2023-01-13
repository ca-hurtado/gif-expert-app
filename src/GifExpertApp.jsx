import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
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
            <Container>
                <Row>
                    <h1>GIF Expert App</h1>
                </Row>
                <Row>
                    <Col>
                        <h2>Buscar Categoría</h2>
                    </Col>
                    <Col>
                        <input type="text"
                            value={inputValue}
                            placeholder={inputValue}
                            onChange={e => setInputValue(e.target.value)} />
                    </Col>
                </Row>
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
