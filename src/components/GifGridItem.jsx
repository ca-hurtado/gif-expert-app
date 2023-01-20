import { Card, CardImg, Col } from "react-bootstrap"

export const GifGridItem = ({ title, url }) => {

  return (
    <Col>
      <Card>
        <CardImg variant="top" src={url} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}
