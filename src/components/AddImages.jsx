import { Button } from "react-bootstrap"

export const AddImages = () => {
  return (
    <Button className="me-3" variant='success' onClick={() => onRemoveCategory(category)}>Add Images</Button>
  )
}
