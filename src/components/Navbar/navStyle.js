import styled from 'styled-components';

export const NavigationBar = styled.nav`
    height:calc(100vh - 59px);
    width:70%;
    background:#0f1340;
    position:fixed;
    bottom:0%;
    right:-70%;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    z-index:100;
    display:flex;
    transition:all 1s;

    &.open{
        right:0;
    }
`;

export const NavItems = styled.div`
    display:flex;
    height:60vh;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
`;

export const NavItem = styled.div`
    
`;

export const NavLink = styled.a`
    color:#f1f1f1;

    &:hover{
        color:#33d6e8;
    }
`;

export const BottomNavItem = styled.div`
        background-color:#f1f1f1;
        border:none;
        padding:3px 20px;

        & ${NavLink}{
            color:#000;
        }
`;



