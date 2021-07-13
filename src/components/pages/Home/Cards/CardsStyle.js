import styled from 'styled-components';

export const CardSection = styled.section`
    padding:4rem 0rem;
`;
export const CardHeading = styled.h1`
    font-size:35px;
    padding:0rem 0.5rem;
    margin-left:1.6rem;

    @media(min-width:900px){
        margin-left:6rem;
    }
`;

export const CardContainer= styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-direction:column;
    align-items:center;
    width:90vw;
    margin:auto;

    @media(min-width: 900px){
        flex-direction:row;
    }
`;

export const CardText = styled.p`
    &.heading{
        font-size:30px;
        text-transform:uppercase;
    }
    &.data{
        font-size:40px;
        font-weight:600;
        margin:0;
    }
    &.date{
        font-weight:600;
        font-size:18px;
    }
`;

export const CardColumn = styled.div`
    width:85vw;
    height:300px;
    margin:0.7rem 0rem;
    padding:0rem 1.5rem;
    box-sizing:border-box;
    box-shadow: -1px 2px 23px 4px rgba(0,0,0,0.35);
    text-align:center;

    @media(min-width: 900px){
        width:25vw;
    }
    &:nth-child(1){
        border-bottom:10px solid #1303fc;
    }
    &:nth-child(2){
        border-bottom:10px solid #1e8f33;
    }
    &:nth-child(3){
        border-bottom:10px solid #c42d2d;
    }
    
    &:nth-child(1) ${CardText}.data{
        color:#1303fc;
    }
    &:nth-child(2) ${CardText}.data{
        color:#1e8f33;
    }
    &:nth-child(3) ${CardText}.data{
        color:#c42d2d;
    }
`;

export const CardContent = styled.div`

`;

