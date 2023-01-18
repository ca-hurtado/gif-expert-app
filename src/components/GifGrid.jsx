import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Button, Container, Row } from 'react-bootstrap';
import { arrayBreak } from '../helpers/arrayBreaker';

export const GifGrid = ({ type, category, onRemoveCategory }) => {

    const { images, isLoading } = useFetchGifs(type, category, 10);
    const imagesArray = arrayBreak(images, 5);
    return (
        <>
            <Container>
                <h3>{category}</h3>
                {
                    isLoading && (<h2>Cargando...</h2>)
                }
                <div>
                    {
                        imagesArray.map((images, i) => (
                            <Row key={i} className="my-3">
                                {
                                    images.map((image, i) => (
                                        <GifGridItem
                                            key={image.id}
                                            {...image}
                                        />

                                    ))
                                }
                            </Row>
                        ))
                    }
                </div>
                <Button variant='danger' onClick={() => onRemoveCategory(category)}>Eliminar Categoría</Button>
            </Container>
        </>
    )
}
