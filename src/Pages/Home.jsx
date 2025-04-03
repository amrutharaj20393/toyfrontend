import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Carousel } from "react-bootstrap";

function Home() {


    return (
        <>

            <Carousel interval={5000} controls={true} indicators={false} fade={true}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.bookswagon.com/bannerimages/1_inr.jpg?v=4.1"
                        alt="First slide" height={'400px'}
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.bookswagon.com/bannerimages/2_inr.jpg?v=4.1"
                        alt="Second slide" height={'400px'}
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.bookswagon.com/bannerimages/81_inr.jpg?v=4.1"
                        alt="Third slide" height={'400px'}
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.bookswagon.com/bannerimages/70_inr.jpg?v=4.1"
                        alt="Third slide" height={'400px'}
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.bookswagon.com/bannerimages/83_inr.jpg?v=4.1"
                        alt="Third slide" height={'400px'}
                    />

                </Carousel.Item>
            </Carousel>


            <Container className='mt-4 d-flex justify-content-center align-items-center '>
                <Row className='mt-4 w-100'>
                    <Col md={6}>
                        <h1 className='fs-1 mt-4'>Discover Your Next Great Read</h1>
                        <p className='mt-4' style={{ textAlign: 'justify' }}>
                            A novel concept which brings life to static images for an engaged and immersive experience to the readers. These are 6D books. They use augmented and virtual reality so the readers can experience what is printed in the book.
                            We strive for customer satisfaction by offering a user-friendly search engine, efficient payment options and seamless delivery systems. Apart from all this, we also provide great deals and discounts on our products.<br></br><br></br>

                            All the Publishers, Distributors and Authors around the country are welcome to partner with us and grow the Bookswagon family. We would like to thank our customers for shopping with us. You can write to us on our e-mail id to share any suggestions or feedback you might have regarding our website or services.
                        </p>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center'>
                        <img src="https://img.freepik.com/free-vector/library-interior-empty-room-reading-with-books-wooden-shelves_33099-1722.jpg?t=st=1743420874~exp=1743424474~hmac=77d5d81609e2d0f6c4cbd39ebcf688e060bd4ac7e1b23557b13b67da86dcd9b9&w=1380" alt="" className='w-100' />
                    </Col>
                </Row>

            </Container>

            <Container className='mt-5'>

                <img src="https://www.bookswagon.com/images/promotionimages/web/awardwinning.jpg?v=5.9" alt="" className='w-100' />

            </Container>
            <Container className='mt-4 d-flex justify-content-center align-items-center '>
                <Row>
                    <Col md={1}>
                    </Col>
                    <Col md={10} className='d-flex justify-content-center align-items-center flex-column p-md-5 p-3'>
                        <Row className='mt-5 '>
                            <h4 className='text-center fs-4 mb-5'>Our New Arrivals</h4>
                            <Col md={3}>
                                <Card style={{ width: '100%' }} className='p-3'>
                                    <Card.Img variant="top" src="https://www.bookswagon.com/productimages/images200/742/9789365697742.jpg" height={'300px'} />
                                    <Card.Body>
                                        <Card.Title> SHAH RUKH KHAN (Hardback) </Card.Title>
                                        <Card.Text>
                                            Released: 15 Dec 2024
                                            By: Mohar Basu (Author) | Publisher: HarperCollins India
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card style={{ width: '100%' }} className='p-3 mt-4 mt-md-0'>
                                    <Card.Img variant="top" src="https://manybooks.net/sites/default/files/styles/220h330sc_new/public/webform/ebook_feature_application/11014/gitels-freedom.jpeg?itok=97Ua2k1J" height={'300px'} />
                                    <Card.Body>
                                        <Card.Title>Too Good To Be True</Card.Title>
                                        <Card.Text>

                                            By: Prajakta Koli(Author) | Publisher: Harpercollins | Released: 13 Feb 2025 |
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card style={{ width: '100%' }} className='p-3  mt-4 mt-md-0'>
                                    <Card.Img variant="top" src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/166/9780241583166.jpg" height={'300px'} />
                                    <Card.Body>
                                        <Card.Title>Diary of a Wimpy Kid</Card.Title>
                                        <Card.Text>

                                            By:Jeff Kinney(Author)|Publisher: Penguin Random House|
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card style={{ width: '100%' }} className='p-3  mt-4 mt-md-0'>
                                    <Card.Img variant="top" src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/834/9781529923834.jpg" height={'300px'} />
                                    <Card.Body>
                                        <Card.Title>The Coming Wave (Paperback) </Card.Title>
                                        <Card.Text>
                                            | Released: 03 Oct 2024
                                            By: Michael Bhaskar (Author), Mustafa Suleyman (Author)|
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
                <h4 className='text-center fs-4 mb-5'>Browse Genres</h4>
                <Row className='p-3'>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-white ">
                            <Card.Img src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-1.png?itok=0guEjINJ" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center'>

                                <Card.Text className=' fs-4'>
                                    ROMANCE
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-white">
                            <Card.Img src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-2.png?itok=iYg1o-UB" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='  fs-4'>
                                    ADVENTURES
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-white">
                            <Card.Img src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-3.png?itok=DTx5oPEe" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='bg-transparent  fs-4'>
                                    MYSTERY
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-white">
                            <Card.Img src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-4.png?itok=GnwAOhnC" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='bg-transparent  fs-4'>
                                    BIOGRAPHIES
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-white">
                            <Card.Img src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-5.png?itok=ZsV-_DoX" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='bg-transparent  fs-4'>
                                    CHILDREN'S
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-white">
                            <Card.Img src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-7.png?itok=D-eS0PNM" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='bg-transparent  fs-4'>
                                    FANTASY
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-4 p-3'>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-white ">
                            <Card.Img src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-8.png?itok=ac6V9m1y" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center'>

                                <Card.Text className='bg-transparent  fs-4'>
                                    HISTORY
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-white">
                            <Card.Img src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-9.png?itok=Qde8jfw-" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className=' bg-transparent  fs-4'>
                                    HORROR
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-white">
                            <Card.Img src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-10.png?itok=6J4gkBMc" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='bg-transparent  fs-4'>
                                    LITERARY FICTION
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-white">
                            <Card.Img src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-4.png?itok=GnwAOhnC" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='bg-transparent  fs-4'>
                                    BIOGRAPHIES
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-white">
                            <Card.Img src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-11.png?itok=g4ML-Jmk" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='bg-transparent  fs-4'>
                                    NONFICTION
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={2} className='mb-2'>
                        <Card style={{ width: '100%' }} className="bg-dark text-white">
                            <Card.Img src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-12.png?itok=kmUC9Aiq" alt="Card image" height={'200px'} />
                            <Card.ImgOverlay className='text-center '>

                                <Card.Text className='bg-transparent  fs-4'>
                                    SCIENCE FICTION
                                </Card.Text>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home