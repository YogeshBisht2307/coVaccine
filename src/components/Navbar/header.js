import React from 'react'
import { Logo, HeaderBar,LogoText,LogoSpan,LogoImg,Bars,Bar } from './headerStyle';

 const Header = ({navOpen,setNavOpen}) => {
    return (
        <HeaderBar>
            <Logo>
                <LogoText>
                    coVaccine
                </LogoText>
                <LogoSpan><LogoImg src=""/></LogoSpan>
            </Logo>
            <Bars className={navOpen ? "cross" : ""} onClick={() => setNavOpen(!navOpen)}>
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
            </Bars>
        </HeaderBar>
    );
}
export default Header;
