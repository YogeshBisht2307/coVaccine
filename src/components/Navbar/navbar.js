import React from 'react'
import { NavigationBar, NavItems, NavItem, NavLink, BottomNavItem} from './navStyle';

 const Navigation = ({navOpen, setNavOpen }) => {
    return (
       <NavigationBar className={navOpen ? "open" : "close" }>
           <NavItems>
            <NavItem onClick={() => setNavOpen(!navOpen)}>
                    <NavLink>
                        Home
                    </NavLink>
            </NavItem>
            <NavItem onClick={() => setNavOpen(!navOpen)}>
                    <NavLink>
                        About
                    </NavLink>
            </NavItem>
            <NavItem onClick={() => setNavOpen(!navOpen)}>
                    <NavLink>
                        Service
                    </NavLink>
            </NavItem>
            <NavItem onClick={() => setNavOpen(!navOpen)}>
                    <NavLink>
                        Pricing
                    </NavLink>
            </NavItem>
            <NavItem onClick={() => setNavOpen(!navOpen)}>
                    <NavLink>
                        Blog
                    </NavLink>
            </NavItem>
           </NavItems>
           <BottomNavItem>
               <NavItem onClick={() => setNavOpen(!navOpen)}>
                   <NavLink>
                       Contact
                   </NavLink>
               </NavItem>
           </BottomNavItem>
       </NavigationBar>
    );
}
export default Navigation;