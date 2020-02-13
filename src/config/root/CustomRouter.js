import { Route } from 'react-router-dom';
import React from 'react';

export default function CustomRouter({ options={}, ...rest}){
    return(
        <Route {...rest}/>
    )
}