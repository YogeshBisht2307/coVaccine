import styled from 'styled-components';


export const FooterSection = styled.footer`
    padding:2rem 0rem;  
    margin:2rem 0rem 0rem 0rem; 
    background-color:#0f1340; 
`;

export const FooterContainer = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:column;
    width:80vw;
    margin:auto;

    @media(min-width:900px){
        flex-direction:row;
    }
`;

export const FooterColumn = styled.div`
    margin:0.5rem;
    width:80vw;
    
    @media(min-width:900px){
        width:35vw;
    }
`;

export const FooterText = styled.p`
    color:#f1f1f1;

    &.MainHeading{
        font-size:40px;
        font-weight:600;
        margin:0;
        padding:0;
    }
    &.plainText{
        font-size:14px;
    }
    &.SecondaryHeading{
        font-size:32px;
        margin:0;
        padding:0;
        font-family:'Lobster',cursive;
    }
    &.copyrightText{
        font-size:16px;
        text-transform:italic;
    }
`;
