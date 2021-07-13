import React, {Fragment,useState} from 'react';
import Navigation from './navbar';
import Header from './header';

export default function Navbar() {
    const [navOpen , setNavOpen] = useState(false);
    return (
        <Fragment>
            <Header navOpen={navOpen} setNavOpen={setNavOpen}/>
            <Navigation navOpen={navOpen} setNavOpen={setNavOpen}/>
            
        </Fragment>
    );
}
