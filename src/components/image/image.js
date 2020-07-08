import React from "react";
import propTypes from "prop-types";
import classNames from "classNames";


const Image = ({src, alt, className, width, height, ...attrs}) => {

    const classes = classNames(className)

    if (!src) {
        src = `https://via.placeholder.com/${width}x${height}`
    }

    return (
        <img 
            src = {src}
            alt = {alt}
            className = {className}
            width = {width}
            height = {height}
            {...attrs}
        />
    );  
}

Image.propTypes = {
    src: propTypes.string,
    alt: propTypes.string,
    className: propTypes.string,
    width: propTypes.number,
    height: propTypes.number
}

export default Image;