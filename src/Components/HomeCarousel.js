/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const HomeCarousel = () => {
    return (
        <section>
            <div className="carousel w-full h-96">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="w-full" alt='missing' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6A6wU6l87AyBJx_kTiKAySKT6Q0sfvFdj34FV9oFjw&s" className="w-full" alt='missing' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="w-full" alt='missing' />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6A6wU6l87AyBJx_kTiKAySKT6Q0sfvFdj34FV9oFjw&s" className="w-full" alt='missing' />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2 mt-4">
                <a href="#item1" className="w-7 h-1 rounded-xl bg-gray-400/50" />
                <a href="#item2" className="w-7 h-1 rounded-xl bg-gray-400/50" />
                <a href="#item3" className="w-7 h-1 rounded-xl bg-gray-400/50" />
                <a href="#item4" className="w-7 h-1 rounded-xl bg-gray-400/50" />
            </div>
        </section>
    );
};

export default HomeCarousel;