import React from 'react';
import Link from 'next/link';

class About extends React.Component {
    // constructor
    constructor(props) {
        super(props);
    }

    // render display
    render () {
        return (
            <div className="container">
                <div className="navbar">
                    <Link href="/search">
                        <a>SEARCH</a>
                    </Link>
                    <Link href="/about">
                        <a>ABOUT</a>
                    </Link>
                    <Link href="/">
                        <a>HOME</a>
                    </Link>
                </div>
                <div className="content">
                    <h1>ABOUT US</h1>
                    <p>Our passion is providing you with the right campground information. See for yourself!</p>
                    <p><img src="images/PuebloPark.jpg"/></p>
                </div>

            <style jsx>{`
                .container {
                    font-family: Roboto;
                    margin: 0;
                }
                
                .navbar {
                    float: right;
                    padding: 10px 30px 0 0;
                    width: 100%;
                    margin-bottom: 250px;
                }

                a {
                    float: right;
                    padding: 4px 10px 4px 10px;
                    text-decoration: none;
                    color: black;
                    transition: .2s;
                    margin-left: 20px;
                    border-radius: 6px;
                }

                a:hover {
                    transition: .2s;
                    color: #F4782E;
                    background-color: #eee;
                }

                .content {
                    text-align: center;
                }

                h1 {
                    margin: 0 auto;
                    font-size: 2.6em;
                    letter-spacing: 1.3em;
                }

                p {
                    letter-spacing: .2em;
                    margin-top: 40px;
                }

                img {
                    margin-top: 60px;
                    width: 200px;
                    border-radius: 20px;
                }
            `}</style>
            </div>
        );
    }
}

export default About;