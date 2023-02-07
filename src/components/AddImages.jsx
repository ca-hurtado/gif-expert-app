import { Button } from "react-bootstrap"

export const AddImages = ({category, onUpdateImagesCategory}) => {
  return (
    <Button className="me-3" variant='success' onClick={() => onUpdateImagesCategory(category)}>Add Images</Button>
  )
}
