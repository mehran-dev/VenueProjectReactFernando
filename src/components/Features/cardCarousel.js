import React from 'react';
import Slider from 'react-slick';
import slide_1 from '../../resources/images/slide_one.jpg'
import slide_2 from '../../resources/images/slide_two.jpg'
import slide_3 from '../../resources/images/slide_three.jpg'
import slide_4 from '../../resources/images/slide_four.jpg'




const cardCarousel = () => {

    const setting={
        dots:false,
        infinite:true,
        autoplay:true,
        speed:500



    }




    return (
        <div
         className="carrousel-wrapper"
            style={{
                overflow:'hidden',
                height:'100vh',    /*`${window.innerHeight}px`,*/ 
            backgroundColor:'#000'//'#3d3d3d'
            }}
        >
            <Slider {...setting} >
                <div>
                    <div 
                    className="carrousel_image"
                    style={{
                       background:`url(${slide_1})`,
                       opacity:0.2,
                       height:'100vh'
                    }}
                    >

                    </div>
                </div>
            
                <div>
                <div 
                    className="carrousel_image"
                    style={{
                               background:`url(${slide_2})`,
                            opacity:0.2,
                        height:'100vh'
                    }}
                    >

                    </div>
                </div>
                <div>
                <div 
                    className="carrousel_image"
                    style={{
                        background:`url(${slide_3})`,
                        opacity:0.2,
                        height:'100vh'
                    }}
                    >

                    </div>
                </div>
            
                <div>
                <div 
                    className="carrousel_image"
                    style={{
                      background:`url(${slide_4})`,
                      opacity:0.2,  
                      height:'100vh'
                    }}
                    >

                    </div>
                </div>
            
            </Slider>





        </div>
    );
};

export default cardCarousel;