// import React, { useState, useEffect } from 'react'
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const {data: images, loading} = useFetchGifs(category);

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages);
    //         // .then(imgs => setImages(imgs));
    // }, [category])    

    return (
        <>
            <h3 className='animate__animated animate__flash'> {category} </h3>

            {/* {loading ? <p>Loading...</p> : null} */}
            {loading && <p className='animate__animated animate__pulse'>Loading...</p>}
            <div className="card-grid">

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}
