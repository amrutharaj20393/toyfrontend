import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Carousel } from "react-bootstrap";

function Home() {


    return (
        <>

            <Carousel interval={3000} controls={true} indicators={false} fade={true}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1734602312Home-Page-banner-Desktop-1817x747-px.webp"
                        alt="First slide" height={'700px'}
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1744195213Desktop_Banner_(9).webp"
                        alt="Second slide" height={'700px'}
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1736248799Desktop_banner_(5).webp"
                        alt="Third slide" height={'700px'}
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1743782694Home_Page_Banner_(summer)_-_Desktop_version-01.webp"
                        alt="Third slide" height={'700px'}
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"

                        src=" https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1739787258Hamleys_Novelty_Web_Banner_1817x747px.webp"
                        alt="Third slide" height={'700px'}
                    />

                </Carousel.Item>
            </Carousel>


            <Container className='mt-4 d-flex justify-content-center align-items-center '>
                <Row className='mt-4 w-100'>
                    <Col md={6}>
                        <h1 className='fs-1 mt-4'>Discover Your Toy Store</h1>
                        <p className='mt-4' style={{ textAlign: 'justify' }}>
                            Toycra is one of the largest Toys and Baby gears distributors in India.

                            We are currently doing exclusive pan India distribution for more than 15 international brands including - Magnatiles, Fat Brain Toys, Hape, Battat, Micro Scooter, Jarmelo, Tooky, Top Bright, Mindware, Popular Playthings, Rolly Toys,Blue Orange, Smoby, Doodle Hog, Razbaby etc.
                            <br></br>
                            If you are a toy or baby gear brand looking for a Pan India distribution or a retail store in India, reach out to us at - Info@toycra.com to explore potential collaboration.

                            But more than anything, we are still a small, family owned and operated business that takes great pride in our ability to offer exceptional service to each and every customer. We hope to count you among our satisfied customers soon!
                        </p>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center'>
                        <img src="https://toycra.com/cdn/shop/files/Smoby_1710x570.jpg?v=1639478171" alt="" className='w-100' />
                    </Col>
                </Row>

            </Container>

            <Container className='mt-5'>

                <img src="https://toycra.com/cdn/shop/files/Toycra_Open_Ended_1709x570.jpg?v=1732529000" alt="" className='w-100' />

            </Container>
            <Container className='mt-4 d-flex justify-content-center align-items-center '>
                <Row>
                    <Col md={1}>
                    </Col>
                    <Col md={10} className='d-flex justify-content-center align-items-center flex-column p-md-5 p-3 w-100'>
                        <Row className='mt-5 w-100 '>
                            <h4 className='text-center fs-3 text-dark mb-5'>Our New Arrivals</h4>
                            <Col md={3}>
                                <Card style={{ width: '100%' }} className='p-3 shadow border border-info rounded'>
                                    <Card.Img variant="top" src="https://toycra.com/cdn/shop/files/Backyard-Discovery-Cedar-Cove-Swing-Set-Outdoor-Toys-Step2-Toycra-2_297x297.webp?v=1744241684" height={'300px'} />
                                    <Card.Body>
                                        <Card.Title> Backyard Discovery Cedar Cove Swing Set With Tools</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card style={{ width: '100%' }} className='p-3 mt-4 mt-md-0 shadow border border-info rounded'>
                                    <Card.Img variant="top" src="https://toycra.com/cdn/shop/files/PlayMagic-Kids-Keyboard-with-37-Keys-Red-Musical-Toys-Play-Magic-Toycra-2_297x297.jpg?v=1744041107" height={'300px'} />
                                    <Card.Body>
                                        <Card.Title>PlayMagic Kids Keyboard with 37 Keys-Red</Card.Title>
                                        <Card.Text>


                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card style={{ width: '100%' }} className='p-3  mt-4 mt-md-0 shadow border border-info rounded'>
                                    <Card.Img variant="top" src="https://toycra.com/cdn/shop/files/Imagimake-Unicorn-Craft-Kit-20Mess-Free-Activities-Arts-Crafts-Imagimake-Toycra-2_297x297.jpg?v=1744041005" height={'300px'} />
                                    <Card.Body>
                                        <Card.Title>Imagimake Unicorn Craft Kit 20+Mess Free Activities</Card.Title>
                                        <Card.Text>


                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card style={{ width: '100%' }} className='p-3  mt-4 mt-md-0 shadow border border-info rounded'>
                                    <Card.Img variant="top" src="https://toycra.com/cdn/shop/files/Joy-Junction-124-Scale-Metal-Engineering-Series-Truck-Vehicles-Joy-Junction-Toycra-2_297x297.jpg?v=1743781718" height={'300px'} />
                                    <Card.Body>
                                        <Card.Title>Joy Junction 1:24 Scale Metal Engineering Series Truck </Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Col>
                    <Col md={1}>
                    </Col>
                </Row>

            </Container>

            <Container fluid className='mt-4'>
                <h4 className='text-center text-dark  fs-3 mb-5'>Our Exclusive Toys Category</h4>
                <Row className='p-3'>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="text-info bg-dark">
                            <Card.Img src="https://toycra.com/cdn/shop/files/Play_Houses_40d4a0ed-c2d7-4919-98c6-fdd09ce538ea_404x404.jpg?v=1613518505" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center'>

                                <Card.Text className='  fs-3'>
                                    House
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="text-info bg-dark">
                            <Card.Img src="https://toycra.com/cdn/shop/files/Slide_2cf92426-58b0-45d0-99e1-4b85f1c32f47_404x404.jpg?v=1613518505" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='  fs-4'>
                                    Slides
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-info">
                            <Card.Img src="https://toycra.com/cdn/shop/files/Tram_404x404.jpg?v=1613518506" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='bg-transparent  fs-4'>
                                    Outdoor Fun
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-info">
                            <Card.Img src="https://toycra.com/cdn/shop/files/Rolly1_74d66518-6216-4f40-8fa4-1cb5c22cc31f_404x404.jpg?v=1613518307" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='bg-transparent  fs-4'>
                                    Ride On
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-info">
                            <Card.Img src="https://toycra.com/cdn/shop/files/Open-Ended-Wooden-Multi-Functional-Radish-cart-Vehicles-Open-Ended-Toycra-2_297x297.jpg?v=1743177067" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='bg-transparent  fs-4'>
                                    Wooden Toys
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-info">
                            <Card.Img src="https://toycra.com/cdn/shop/files/Lil-Diva-6-Dolls-Dolls-Lil-Diva-Toycra-2_297x297.jpg?v=1740844093" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='bg-transparent  fs-4'>
                                    Dolls
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-4 p-3'>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-info ">
                            <Card.Img src="https://toycra.com/cdn/shop/files/Open-Ended-Bead-Balance-Tree-Game-Kids-Games-Open-Ended-Toycra-2_297x297.jpg?v=1743090671" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center'>

                                <Card.Text className='bg-transparent  fs-4'>
                                    Games
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-info">
                            <Card.Img src="https://toycra.com/cdn/shop/files/CocoMoco-Kids-The-World-Box-Learning-Education-Cocomoco-Toycra-2_297x297.jpg?v=1744040994" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className=' bg-transparent  fs-4'>
                                    Learning
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-info">
                            <Card.Img src="https://toycra.com/cdn/shop/files/Chanak-Play-Dough-Ice-Cream-Maker-Set-Pretend-Play-Chanak-Toycra-2_297x297.webp?v=1743611617" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='bg-transparent  fs-4'>
                                    Pretend Play
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-info">
                            <Card.Img src="https://toycra.com/cdn/shop/files/Winfun-Shakin-N-Wobble-Crab-Active-Play-Winfun-Toycra-2_297x297.jpg?v=1735660054" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='bg-transparent  fs-4'>
                                    Active Play
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-info">
                            <Card.Img src="https://toycra.com/cdn/shop/files/Chanak-Magnetic-Building-Stick-Ball-Blocks-76-Piece-Construction-Chanak-Toycra-2_297x297.jpg?v=1743611559" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='bg-transparent  fs-4'>
                                    Construction
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-info">
                            <Card.Img src="https://toycra.com/cdn/shop/products/Majorette-Volvo-Transporter-Vehicles-Majorette-Toycra-2_297x297.webp?v=1744221702" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='bg-transparent  fs-4'>
                                    Vehicles
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className='mt-5'>

                <img src="https://toycra.com/cdn/shop/files/Wooden_Toys_1710x570.jpg?v=1681476513" alt="" className='w-100' />

            </Container>
        </>
    )
}

export default Home