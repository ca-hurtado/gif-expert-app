import { Button } from 'react-bootstrap'

export const DeleteCategory = ({ category, onRemoveCategory }) => {
    return (
        <Button variant='danger' onClick={() => onRemoveCategory(category)}>Delete Category</Button>
    )
}
