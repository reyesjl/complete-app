import React from "react";
import {getCampgroundInfo} from "../lib/utils.js";
import Link from 'next/link';

class Home extends React.Component {
    // constructor
    constructor(props) {
        super(props);
        this.state = {search: "Apache"};
    }

    // input textbox
    handleUpdate(evt) {
        this.setState({search: evt.target.value});
    }

    // handle search from utils
    async handleSearch(evt) {
        const campground = await getCampgroundInfo(this.state.search);
        this.setState({campground});
    }

    // render body
    render() {
        return (
            <div>
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
            <div style={{ margin: "0px auto", width: "600px", textAlign: "center"}}>
                <img src="/camping-logo.jpg" alt="campground-logo" className="app-logo"/>
                <h2 className="title">CAMPA'ROUND</h2>
                <p><input type="text" value={this.state.search} onChange={this.handleUpdate.bind(this)}/></p>
                <div className="button-style" onClick={this.handleSearch.bind(this)}>Search</div>

                {this.state.campground ? 
                <div className="campgroundWrapper">
                    <div className="imgWrapper">
                        <img src={this.state.campground.path}/>
                    </div>

                    <div className="bodyWrapper">
                        <h3>{this.state.campground.name}</h3>
                        <p>{this.state.campground.summary}</p>
                    </div>
                </div> : <div className="campgroundWrapper">
                    <div className="imgWrapper">
                        <img src="/images/404.jpg"/>
                    </div>

                    <div className="bodyWrapper">
                        <h3>It is lonely here.</h3>
                <p><em>{this.state.search}</em> campground was not found</p>
                    </div>
                </div> }
                </div>
                
                <style jsx>{`
                    .navbar {
                        float: right;
                        padding: 10px 30px 0 0;
                        width: 100%;
                        margin-bottom: 100px;
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
                    .campgroundWrapper {
                        width: 100%;
                        margin: 100px auto;
                        font-family: Roboto;
                    }

                    .imgWrapper {
                        width: 50%;
                        float: right;
                        height: 120px;
                    }

                    .imgWrapper img {
                        width: 200px;
                        float: right;
                        border-radius: 5%;
                    }

                    .bodyWrapper {
                        width: 50%;
                    }

                    h1,
                    h2,
                    a,
                    p {
                        font-family: 'Roboto';
                    }

                    .title {
                        letter-spacing: 1em;
                        font-size: 2.3em;
                    }

                    .app-logo {
                        width: 250px;
                        height: 200px;
                        border-radius: 50%;
                    }

                    input {
                        margin-top: 5px;
                        margin-bottom: 20px;
                        font-family: Roboto;
                        font-weight: bold;
                        height: 32px;
                        width: 60%;
                        padding: 5px 20px;
                        border-radius: 31px;
                    }

                    .button-style {
                        font-family: Roboto;
                        text-transform: uppercase;
                        margin: auto auto;
                        background-color: black;
                        width: 100px;
                        letter-spacing: .3em;
                        color: white;
                        padding: 10px 30px;
                        border-radius: 31px;
                        transition: .3s;
                    }

                    .button-style:hover {
                        background-color: #F4782E;
                        color: #FFECC1;
                        cursor: pointer;
                        transition: .3s;
                    }
                `}</style>
            </div>
        )
    }
}

export default Home;