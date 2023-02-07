import { Row } from "react-bootstrap";
import { arrayBreak } from "../helpers/arrayBreaker";
import { GifGridItem } from "./GifGridItem"

const limitBreak = 5;

export const GifGridItems = ({ images }) => {
    const imagesArray = arrayBreak(images, limitBreak);
    return (
        <>
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
        </>
    )
}
