import React from 'react'

function validation(values) {
    let errors={}

    if(!values.username.trim()){
        errors.username="username required"
    }else if(values.username.match(/[@.]/)){
        errors.username="Not valid"
    }
    if(!values.email){
        errors.email="Email required"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,}$/i.test(values.email)){
errors.email="Email is invalid"
    }


    if(!values.password){
        errors.password="Password is required"
    }
    else if(values.password!==values.password2){
        errors.password="Password don't match"
    }else if(values.password.length<=7){
        errors.password="minimum of 8 characters "
    }
    return errors;
}

export default validation
