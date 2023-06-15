import * as $ from 'jquery';
import Post from "@models/Post";
// import json from "./assets/json";
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';
import WebpackLogo from "./assets/webpack-logo.png";
import React from "react";
import {render} from "react-dom";
import './babel';
import css from './styles/styles.css';
import './styles/index.scss';

const post = new Post('Webpack post title', WebpackLogo);

console.log('Post to String: ', post.toString());

const App = () => (
        <div className="container">
            <h1>Webpack complied!</h1>

            <hr />
            <div className="logo" />

            <hr />

            <pre></pre>
            <hr />
            <div className="box">
                <h2>SCSS</h2>
            </div>
        </div>
)

render(<App/>, document.getElementById('app'));

// console.log("JSON: ", json);
//
// console.log("XML: ", xml);
//
// console.log("CSV: ", csv);

