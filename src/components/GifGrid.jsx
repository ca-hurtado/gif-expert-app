import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Col, Container, Row } from 'react-bootstrap';
import { arrayBreak } from '../helpers/arrayBreaker';
import { AddImages } from './AddImages';
import { DeleteCategory } from './DeleteCategory';

const limitBreak = 5;

export const GifGrid = ({ type, category, onAddImages, onRemoveCategory, onUpdateImagesCategory }) => {
    
    const { images, isLoading } = useFetchGifs(type, category['name'], category['limit'], category['offset']);

    if(images.length > 0){
        category['images'] = [...category['images'], images]
        onUpdateImagesCategory(category);
    }

    const imagesArray = arrayBreak(category['images'], limitBreak);

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
                </Col>
            </Row>
            <Row className='py-3 border border-top-0 bg-white'>
                <Col>
                    <Container>
                        <AddImages category={category['name']}
                            onRemoveCategory={onAddImages} />
                        <DeleteCategory category={category['name']}
                            onRemoveCategory={onRemoveCategory} />
                    </Container>
                </Col>
            </Row>
        </>
    )
}
