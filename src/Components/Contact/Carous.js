import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carous = () => {
    return (
        <div >
            <Carousel prevIcon={<span aria-hidden="true" className="carousel-control-prev" />} nextIcon={<span aria-hidden="true" className="carousel-control-next" />}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require(`../../Images/4.jpg`)}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require(`../../Images/15.jpg`)}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require(`../../Images/13.jpg`)}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require(`../../Images/9.jpg`)}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require(`../../Images/11.jpg`)}
                        alt="Fived slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Carous;