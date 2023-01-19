import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Button, Container, Row } from 'react-bootstrap';
import { arrayBreak } from '../helpers/arrayBreaker';

const limitBreak = 5;

export const GifGrid = ({ type, category, onRemoveCategory }) => {

    const { images, isLoading } = useFetchGifs(type, category, 10);
    const imagesArray = arrayBreak(images, limitBreak);
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
                            <Row key={i} className='my-3 g-'{...limitBreak}>
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
            </Container>
        </>
    )
}
