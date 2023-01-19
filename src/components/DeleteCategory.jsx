import { Button, Container } from 'react-bootstrap'

export const DeleteCategory = ({category, onRemoveCategory}) => {
    return (
        <Container>
            <Button variant='danger' onClick={() => onRemoveCategory(category)}>Delete Category</Button>
        </Container>
    )
}
