import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Container } from 'react-bootstrap';

export const GifGrid = ({ category, onRemoveCategory }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className='card-grid'>
                <Container>
                    {
                        images.map((image, i) => (
                            <GifItem
                                index={i}
                                key={image.id}
                                {...image}
                            />
                        ))

                    }
                </Container>
            </div>
            <button onClick={() => onRemoveCategory(category)}>Eliminar Categoría</button>
        </>
    )
}
