import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../css/link.css";

const LinkUrl = ({ url, name }) => {

    return (
        <Link to="/About" className="link">{name}</Link>   
    );
}

export default LinkUrl;
