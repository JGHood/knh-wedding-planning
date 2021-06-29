import React from 'react';
import NavigationDesktop from './navigation/NavigationDesktop';
import NavigationMobile from './navigation/NavigationMobile';
import { useMediaQuery } from '@material-ui/core';


export default function Navigation() {
    const isDesktop = useMediaQuery('(min-width:768px)');
    if(isDesktop)
    {
        return (
            <NavigationDesktop/>
        )
    }
    else{
        return (
            <NavigationMobile/>
        )
    }
    
}