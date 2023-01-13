import { Card, CardImg, Col, Row } from "react-bootstrap"

export const GifItem = ({ id, title, url, index }) => {
  return (
    //{(index) && (<Row>)}
      <Col>
        <Card>
          <CardImg variant="top" src={url} alt={title} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    //{(index) && </Row>}

  )
}
