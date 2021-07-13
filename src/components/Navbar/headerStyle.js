import styled from "styled-components";

export const HeaderBar= styled.header`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    height:60px;
    background:#0f1340;
`;
export const Logo = styled.div`
    width:60px;
    height:60px;
`;
export const LogoText = styled.div`
    font-family:'Lobster',cursive;
    font-size:40px;
    color:#f1f1f1;
    margin-bottom:3.4rem;
    position:relative;
`;
export const LogoSpan = styled.span`
    position:absolute;
    height:30px;
    width:100px;
    top:-50%;
    right:-18%;
`;
export const LogoImg = styled.img`
    height:100%;
    width:100%;
`;
export const Bar = styled.div`
    height:3px;
    width:20px;
    background-color:#f1f1f1;
    margin:5px 0px;
    transform:rotate(0);
    transition:all 1s;

`;
export const Bars = styled.div`
    position:absolute;
    top:1rem;
    left:10px;

    &.cross{
        left:5px;
        top:1.5rem;
    }
    &.cross ${Bar}:nth-child(1){
        transform:rotate(45deg);
    }
    &.cross ${Bar}:nth-child(2){
        width:25px;
    }
    &.cross ${Bar}:nth-child(3){
        transform:rotate(-45deg);
    }
    &.cross ${Bar}:nth-child(2n+1){
        width:15px;
        margin:0;
        margin-left:10px;
       
    }
`;
