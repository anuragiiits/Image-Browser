//Create the component
//Step 1: import React
import React from 'react';
import ImageDetail from './image_detail';
//Step 2: Create the component

const IMAGES = [
    {title:'pen', link:'https://dummyimage.com/600x400'},
    {title:'paper', link:'https://dummyimage.com/600x400'},
    {title:'book', link:'https://dummyimage.com/600x400'},
    {title:'laptop', link:'https://dummyimage.com/600x400'}
];

const ImageList = () =>{

    const RenderedImages = IMAGES.map(function(image){
        return (
            <ImageDetail image = {image}/> 
        );
    });
    return (
        <ul>
            {RenderedImages}
        </ul>
    ); 
};
//Step 3: Export the component created
export default ImageList;