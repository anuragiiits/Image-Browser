//Create the component
//Step 1: import React
import React from 'react';
import ImageDetail from './image_detail';
//Step 2: Create the component


const ImageList = (props) =>{

    const validImages = props.images.filter((image) => !image.is_album);

    const RenderedImages = validImages.map((image) => {
        return (
            <ImageDetail key={image.title} image = {image}/> 
        );
    });
    return (
        <ul className = "media-list list-group">
            {RenderedImages}
        </ul>
    ); 
};
//Step 3: Export the component created
export default ImageList;