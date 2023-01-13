import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch')
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    const onSubmit = () => {
        event.preventDefault();

        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return;
        onNewCategory(newInputValue);
        setInputValue('');
    }

    return (
        <div>
            <h2>Agregar Categoría</h2>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder={inputValue}
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
        </div>
    )
}
