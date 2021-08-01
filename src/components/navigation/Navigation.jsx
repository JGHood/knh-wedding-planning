import { useMediaQuery } from '@material-ui/core';
import loadable from '@loadable/component';
const NavigationDesktop = loadable(() => import('./NavigationDesktop'));
const NavigationMobile = loadable(() => import('./NavigationMobile'));


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