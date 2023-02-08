import { useFetchGifs } from '../hooks/useFetchGifs';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { GifGridItems } from './GifGridItems';
import { useEffect } from 'react';

export const GifGrid = ({ type, category, onRemoveCategory, onUpdateImagesCategory }) => {

    const { images, isLoading } = useFetchGifs(type, category['name'], category['limit'], category['offset']);
    //onUpdateImagesCategory(category, images)

    /*useEffect(() => {
        onUpdateImagesCategory(category)
    }, [images])*/


    return (
        <>
            <Row className='py-5 border border-top-0'>
                <Col>
                    <Container>
                        <h3>{category['name']}</h3>
                        {
                            isLoading && (<h2>Cargando...</h2>)
                        }
                        <div>
                            <GifGridItems  
                            images={images} />
                        </div>
                    </Container>
                </Col>
            </Row>
            <Row className='py-3 border border-top-0 bg-white'>
                <Col>
                    <Container>
                        <Button className="me-3" variant='success' onClick={() => onUpdateImagesCategory(category, images)}>Add Images</Button>
                        <Button variant='danger' onClick={() => onRemoveCategory(category)}>Delete Category</Button>
                    </Container>
                </Col>
            </Row>
            <p>{category.offset}</p>
        </>
    )
}
