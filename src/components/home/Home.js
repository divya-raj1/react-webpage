import React , {useState, useEffect} from 'react';
import './Home.css';
import Rect from '../assets/Rectangle.png';

export default function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data[0]);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div id="home">
            <div className="home-container">
                <nav class="home-nav-content">
                    <div class="home-nav-logo">
                        <div class="nav-logo">CHILLED GRAPE</div>
                    </div>
                    <div class="home-navigation">
                        <span>Home</span>
                        <span>About</span>
                        <span>Blog</span>
                        <span>Pricing</span>
                        <button class="home-login">Login</button>
                    </div>
                </nav>

                <div class="home-body-content">
                    <h1 class="home-body-head">Lorem ipsum<br/> dolor sit amet.</h1>
                    <button class="read-more">Read More</button>
                </div>
                <div class="home-body-section">
                    <h3 class="home-body-header">Lorem ipsum dolor sit<br /> amet.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.</p>
                    <button class="read-more">Read More</button>
                </div>
                <div class="container card-box">
                        {
                            posts.map((post) => {
                                return(
                                <div key={post.id} class="card-boxes">
                                    <div class="card shadow-lg h-100">
                                        <img class="card-img-top shadow-lg img-fluid" src={post.image} alt="image"/>
                                        <div class="card-block">
                                            <h4 class="card-title">{post.product_name}</h4>
                                            <span class="card-text">${post.price}</span>
                                        </div>
                                    </div>
                                </div>)
                            })
                        }
                </div>
                <button className="load-more">Load More</button>
                <div class="home-footer">
                    <div class="home-footer-logo">Chilled Grape</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Lorem ipsum dolor sit amet.</p>
                    <div class="home-footer-middle">
                        <ul class="heading">
                            <span>Company</span>
                            <span>Products</span>
                            <span>Follow Us</span>
                        </ul>
                        <div class="d-flex">
                            <ul>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Our Work</li>
                                <li>Contact</li>
                            </ul>
                            <ul>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Our Work</li>
                                <li>Contact</li>
                            </ul>
                            <ul class="home-social">
                                <a href="#" class="social-icon"><img src={Rect} alt="image" /><i
                                    class="fab fa-telegram fa-2x"></i></a>
                                <a href="#" class="social-icon"><img src={Rect} alt="image" /><i
                                    class="fab fa-twitter fa-2x"></i></a>
                                <a href="#" class="social-icon"><img src={Rect} alt="image" /><i
                                    class="fab fa-youtube fa-2x"></i></a><br />
                                <a href="#" class="social-icon"><img src={Rect} alt="image" /><i
                                    class="fab fa-facebook fa-2x"></i></a>
                                <a href="#" class="social-icon"><img src={Rect} alt="image" /><i
                                    class="fab fa-instagram fa-2x"></i></a>
                                <a href="#" class="social-icon"><img src={Rect} alt="image" /><i
                                    class="fab fa-tiktok fa-2x"></i></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
