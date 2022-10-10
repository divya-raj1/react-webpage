import React, { useState, useEffect } from 'react';
import './Home.css';
import Rect from '../assets/Rectangle.png';

export default function Home() {
    const [posts, setPosts] = useState({result:[], content:false});
    const [expand1, setExpand1] = useState(false);
    const [expand2, setExpand2] = useState(false);
    const [expand3, setExpand3] = useState(false);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts({result : data[0], content:false});
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const mobileContent = () => {
        if(posts.content) {
            setPosts(prevState => ({...prevState,content:false}))
        } else {
            setPosts(prevState => ({...prevState,content:true}))
        }
    }

    const Expand1 = (e, param) => {
        if(param == "plus") {
            setExpand1(true)
        }
        else {
            setExpand1(false)
        }
    }

    const Expand2 = (e, param) => {
        if(param == "plus") {
            setExpand2(true);
        }
        else {
            setExpand2(false);
        }
    }

    const Expand3 = (e, param) => {
        if(param == "plus") {
            setExpand3(true);
        }
        else {
            setExpand3(false);
        }
    }

    return (
        <div id="home">
            <div className="home-container">
                <nav className="home-nav-content">
                    <div className="home-nav-logo">
                        <div className="nav-logo">CHILLED GRAPE</div>
                    </div>
                    {/* Navbar on large screen */}
                    <div className="home-navigation">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Pricing</a>
                        <button className="home-login">Login</button>
                    </div>
                {/* Navbar on smaller screen */}
                <div className="nav-mobile">
                    <button onClick={mobileContent}><i className="fa fa-bars"></i></button>
                    {
                        posts.content ? <div className="mob-navigation">
                            <i className="fa fa-times" onClick={mobileContent}></i>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Pricing</a>
                        <button className="home-login">Login</button>
                    </div> : null
                    }
                </div>
                </nav>
                
                <div className="home-body-content">
                    <h1 className="home-body-head">Lorem ipsum<br /> dolor sit amet.</h1>
                    <button className="read-more">Read More</button>
                </div>
                <div className="home-body-section">
                    <h3 className="home-body-header">Lorem ipsum dolor sit<br /> amet.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.</p>
                    <button className="read-more">Read More</button>
                </div>
                <div className="container card-box">
                    {
                        posts.result.map((post) => {
                            return (
                                <div key={post.id} className="card-boxes">
                                    <div className="card shadow-lg h-100">
                                        <img className="card-img-top shadow-lg img-fluid" src={post.image} alt="image" />
                                        <div className="card-block">
                                            <h4 className="card-title">{post.product_name}</h4>
                                            <span className="card-text">${post.price}</span>
                                        </div>
                                    </div>
                                </div>)
                        })
                    }
                </div>
                <button className="load-more">Load More</button>
                <div className="home-footer">
                    <div className="home-footer-left">
                        <div className="home-footer-logo">Chilled Grape</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="home-footer-middle">
                        <ul>
                            <span>Company</span>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Our Work</li>
                            <li>Contact</li>
                        </ul>
                        <ul>
                            <span>Products</span>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Our Work</li>
                            <li>Contact</li>
                        </ul>
                        <ul className="home-social">
                            <span>Follow Us</span>
                            <div>
                                <a href="#" className="social-icon"><img src={Rect} alt="image" /><i
                                    className="fab fa-telegram fa-2x"></i></a>
                                <a href="#" className="social-icon"><img src={Rect} alt="image" /><i
                                    className="fab fa-twitter fa-2x"></i></a>
                                <a href="#" className="social-icon"><img src={Rect} alt="image" /><i
                                    className="fab fa-youtube fa-2x"></i></a>
                            </div>
                            <div>
                                <a href="#" className="social-icon"><img src={Rect} alt="image" /><i
                                    className="fab fa-facebook fa-2x"></i></a>
                                <a href="#" className="social-icon"><img src={Rect} alt="image" /><i
                                    className="fab fa-instagram fa-2x"></i></a>
                                <a href="#" className="social-icon"><img src={Rect} alt="image" /><i
                                    className="fab fa-tiktok fa-2x"></i></a>
                            </div>
                        </ul>
                    </div>
                    <div className="home-footer-middle-mobile">
                        <div>
                            <div className="footer-top">
                                <span>Company</span>
                                <span className={expand1 === false? "plus-show" : "plus-hide"}>
                                    <i className="fa fa-plus" onClick={(e) => Expand1(e, "plus")}></i>
                                </span>
                                <span  className={expand1 ? "minus-show" : "minus-hide"}>
                                    <i className="fa fa-minus" onClick={(e) => Expand1(e, "minus")}></i>
                                </span>
                                <div className={expand1 ? "list1-show" : "list1-hide"}>
                                    <li>About</li>
                                    <li>Careers</li>
                                    <li>Our Work</li>
                                    <li>Contact</li>
                                </div>
                            </div>
                            <div className="footer-top">
                                <span>Products</span>
                                <span className={expand2 === false? "plus-show" : "plus-hide"}>
                                    <i className="fa fa-plus" onClick={(e) => Expand2(e, "plus")}></i>
                                </span>
                                <span  className={expand2 ? "minus-show" : "minus-hide"}>
                                    <i className="fa fa-minus" onClick={(e) => Expand2(e, "minus")}></i>
                                </span>
                                <div className={expand2 ? "list2-show" : "list2-hide"}>
                                    <li>About</li>
                                    <li>Careers</li>
                                    <li>Our Work</li>
                                    <li>Contact</li>
                                </div>
                            </div>
                            <div className="footer-top">
                                <span>Follow Us</span>
                                <span className={expand3=== false? "plus-show" : "plus-hide"}>
                                    <i className="fa fa-plus" onClick={(e) => Expand3(e, "plus")}></i>
                                </span>
                                <span  className={expand3 ? "minus-show" : "minus-hide"}>
                                    <i className="fa fa-minus" onClick={(e) => Expand3(e, "minus")}></i>
                                </span>
                                <div className={expand3 ? "list3-show home-social" : "list3-hide home-social"}>
                                    <div>
                                        <a href="#" className="social-icon"><img src={Rect} alt="image" /><i
                                            className="fab fa-telegram fa-2x"></i></a>
                                        <a href="#" className="social-icon"><img src={Rect} alt="image" /><i
                                            className="fab fa-twitter fa-2x"></i></a>
                                        <a href="#" className="social-icon"><img src={Rect} alt="image" /><i
                                            className="fab fa-youtube fa-2x"></i></a>
                                    </div>
                                    <div>
                                        <a href="#" className="social-icon"><img src={Rect} alt="image" /><i
                                            className="fab fa-facebook fa-2x"></i></a>
                                        <a href="#" className="social-icon"><img src={Rect} alt="image" /><i
                                            className="fab fa-instagram fa-2x"></i></a>
                                        <a href="#" className="social-icon"><img src={Rect} alt="image" /><i
                                            className="fab fa-tiktok fa-2x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
