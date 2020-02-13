import React from 'react';
import { Switch } from 'react-router-dom';
import CustomRouter from './CustomRouter';
import Landingpage from '../../layouts/Landingpage';

const routes =[
    {
        path: '/',
        exact: true,
        component: Landingpage
    },
]

export default function Routes(){
    return (
        <Switch>
            {routes.map(route=> (
                <CustomRouter {...route} key={route.path}/>
            ))}          
            
        </Switch>
    )
};
