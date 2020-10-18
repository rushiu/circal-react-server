import React, {useState} from 'react';
import {Alert} from 'react-bootstrap';

function ErrorSuccessDisplay({validated, nextClicked, errorMessage}) {
    console.log("next clicked");
    console.log(nextClicked);
    console.log("validated");
    console.log(validated)
    if (validated && nextClicked) {
        return(
            <Alert className = "w-100" variant = "success">Success!</Alert>
        );
    } else if (nextClicked && !validated) {
        return(
            <Alert className = "w-100" variant = "warning">{errorMessage}</Alert>
        );
    } else {
        return(
            <h6></h6>
        );
    }
}

export default ErrorSuccessDisplay;