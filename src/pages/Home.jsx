import React from 'react'
import "./home.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import SearchBar from '../components/searchBar';
import {Crosshair2,} from "react-bootstrap-icons";
import SunRise from "../assets/sunrise.png"
import SunSet from "../assets/sunset.png"
import Sunny from "../assets/clear.png"
import Humidity from "../assets/humidity.png"
import Wind from "../assets/wind.png"
import Pressure from "../assets/pressure.png"
import UV from "../assets/uv.png";
import Cloud from "../assets/clouds.png"
import Dizzle from "../assets/drizzle.png"
import Arrow from "../assets/arrow.png"

const Home = () => {
    return (
        <div className='home'>
            <Container fluid>
                <Row className='header-section'>
                    <Col xs={10}>
                        <SearchBar />
                    </Col>
                    <Col>
                        <Button className='location-button'>
                            <Crosshair2 /> Current Location
                        </Button>
                    </Col>
                </Row>
                <Row className='city-section'>
                    <Col xs={5} className='city-name-box'>
                        <h3>Colombo</h3>
                        <h2>09:03</h2>
                        <p>Thursday, 31 Aug</p>
                    </Col>
                    <Col className='city-detail-box'>
                        <Row>
                            <Col className='temp-col'>
                                <div className='temperature'>
                                    <h2>24°C</h2>
                                    <p>Feels like: <span style={{ fontSize: "1.2rem" }}>22°C</span></p>
                                </div>
                                <div className='sunrise-section'>
                                    <div className='sunrise'>
                                        <img src={SunRise} alt='sunrise' />
                                        <div>
                                            <h5>Sunrise</h5>
                                            <p>06:37 AM</p>
                                        </div>
                                    </div>
                                    <div className='sunrise'>
                                        <img src={SunSet} alt='sunset' />
                                        <div>
                                            <h5>Sunset</h5>
                                            <p>20:37 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className='sunny-section'>
                                <img src={Sunny} alt='clear' />
                                <h5>Sunny</h5>
                            </Col>
                            <Col className='details-section'>
                                <div className='humidity-section'>
                                    <div className='humidity'>
                                        <img src={Humidity} alt='humidity' />
                                        <p>41%</p>
                                        <p>Humidity</p>
                                    </div>
                                    <div className='humidity'>
                                        <img src={Wind} alt='humidity' />
                                        <p>2km/h</p>
                                        <p>Wind Speed</p>
                                    </div>
                                </div>
                                <div className='humidity-section'>
                                    <div className='humidity'>
                                        <img src={Pressure} alt='pressure' />
                                        <p>997hPa</p>
                                        <p>Pressure</p>
                                    </div>
                                    <div className='humidity'>
                                        <img src={UV} alt='UV' />
                                        <p>8</p>
                                        <p>UV</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='bottom-section'>
                    <Col xs={4} className='forecast-section'>
                        <h2>5 Days Forecast</h2>
                        <div className='forecast-details'>
                            <img src={Cloud} alt='cloud' />
                            <h5>20°c</h5>
                            <h5>Friday, 1 Sep</h5>
                        </div>
                        <div className='forecast-details'>
                            <img src={Cloud} alt='cloud' />
                            <h5>20°c</h5>
                            <h5>Friday, 1 Sep</h5>
                        </div>
                        <div className='forecast-details'>
                            <img src={Cloud} alt='cloud' />
                            <h5>20°c</h5>
                            <h5>Friday, 1 Sep</h5>
                        </div>
                        <div className='forecast-details'>
                            <img src={Cloud} alt='cloud' />
                            <h5>20°c</h5>
                            <h5>Friday, 1 Sep</h5>
                        </div>
                        <div className='forecast-details'>
                            <img src={Cloud} alt='cloud' />
                            <h5>20°c</h5>
                            <h5>Friday, 1 Sep</h5>
                        </div>
                    </Col>
                    <Col className='hourly-forecast'>
                        <h2>Hourly Forecast</h2>
                        <div className='hourly-section'>
                            <div className='hourly-detail'>
                                <p>12:00</p>
                                <img src={Sunny} alt='sunny' />
                                <p>26°C</p>
                                <img src={Arrow} alt='arrow' />
                                <p>3km/h</p>
                            </div>
                            <div className='hourly-detail'>
                                <p>12:00</p>
                                <img src={Sunny} alt='sunny' />
                                <p>26°C</p>
                                <img src={Arrow} alt='arrow' />
                                <p>3km/h</p>
                            </div>
                            <div className='hourly-detail'>
                                <p>12:00</p>
                                <img src={Sunny} alt='sunny' />
                                <p>26°C</p>
                                <img src={Arrow} alt='arrow' />
                                <p>3km/h</p>
                            </div>
                            <div className='hourly-detail'>
                                <p>12:00</p>
                                <img src={Sunny} alt='sunny' />
                                <p>26°C</p>
                                <img src={Arrow} alt='arrow' />
                                <p>3km/h</p>
                            </div>
                            <div className='hourly-detail'>
                                <p>12:00</p>
                                <img src={Sunny} alt='sunny' />
                                <p>26°C</p>
                                <img src={Arrow} alt='arrow' />
                                <p>3km/h</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home