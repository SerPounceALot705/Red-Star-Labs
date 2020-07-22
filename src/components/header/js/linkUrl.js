import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

import "../css/link.css";

const LinkUrl = ({ url, name, className }) => {

    return (
        <Link to={`/${url}`} className={className}>{name}</Link>   
    );
}

export default LinkUrl;
