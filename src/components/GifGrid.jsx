import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Button, Container, Row } from 'react-bootstrap';
import { arrayBreak } from '../helpers/arrayBreaker';
import { useEffect } from 'react';

export const GifGrid = ({ category, onRemoveCategory }) => {

    const { images, isLoading } = useFetchGifs(category);
    const imagesArray = arrayBreak(images, 5);
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className='card-grid'>
                <Container>
                    {
                        imagesArray.map((images, i) => (
                            <Row key={i} className="spacer-vt">
                                {
                                    images.map((image, i) => (
                                        <GifItem
                                            index={i}
                                            key={image.id}
                                            {...image}
                                        />

                                    ))
                                }
                            </Row>
                        ))

                    }
                </Container>
            </div>
            <Button variant='danger' onClick={() => onRemoveCategory(category)}>Eliminar Categoría</Button>
        </>
    )
}
