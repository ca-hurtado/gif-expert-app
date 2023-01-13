import React, { useState } from 'react'
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
            <h1>GIF Expert App</h1>
            <h2>Buscar Categoría</h2>
            <input type="text"
                value={inputValue}
                placeholder={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <AddCategory
                onNewCategory={onAddCategory} />
            {
                filteredCategories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                        onRemoveCategory={onRemoveCategory} />
                ))
            }
        </>
    )
}
