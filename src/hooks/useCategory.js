import { useState } from "react";
import { useFetchGifs } from "./useFetchGifs";

export const useCategory = () => {

    const [categories, setCategories] = useState(
        [{
            name: 'Megaman',
            limit: 10,
            offset: 0,
            images: []
        }]
    );

    const onAddCategory = (newCategory) => {
        if (categories.some(category => category.name.includes(newCategory.name))) return;
        setCategories([newCategory, ...categories]);
    }

    const onRemoveCategory = (actualCategory) => {
        if (!categories.some(category => category.name.includes(actualCategory.name))) return;
        console.log(actualCategory)
        setCategories(prevCategories => {
            return prevCategories.filter(category => !category.name.includes(actualCategory.name))
        });
    }

    const onUpdateImagesCategory = (category) => {
        setCategories(prevCategories => {
            return prevCategories.map(prevCategory => {
                if (prevCategory.name.includes(category.name)) category.offset = prevCategory.offset + prevCategory.limit
                return category;
            })
        })
        /*console.log(images)
        if (images.length > 0) { category['images'] = [images, ...category['images']] } else return
        category.images = [images, ...category['images']]
        console.log(category)
        /*const newCategories = categories.map((actualCategory) => {
            if (actualCategory.name == category.name) actualCategory = category;
            return category
        })
        console.log(categories)
        console.log(newCategories)*/
        //setCategories(newCategories);
    }

    return {
        categories,
        onAddCategory,
        onRemoveCategory,
        onUpdateImagesCategory
    }
}
