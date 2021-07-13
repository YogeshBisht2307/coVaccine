import styled from 'styled-components';

export const HeroSection = styled.section`

`;
export const HeroContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:column-reverse;
    width:80vw;
    margin:0 auto;

    @media(min-width: 900px){
        flex-direction:row;
    }
`;
export const HeroColumn = styled.div`
    width:85vw;
    margin:auto;
`;
export const HeroMainHeading = styled.h1`
    color:#0f1340;
    font-size:2.5rem;
    font-weight:600;
    padding:0;
    margin:0;
`;
export const HeroSubHeading = styled.h5`
    font-size:2rem;
    color:#3b3f6b;
    margin:-10px 0;
    padding:0;
`;
export const HeroText = styled.p`
    font-size:14px;
`;
export const HeroButton = styled.button`
    border:none;
    background-color:#0f1340;
    outline:none;
    padding:0.7rem 2rem;
    color:#f1f1f1;
    text-transform:upppercase;
    text-transform:uppercase;
`;
export const HeroImg = styled.img`
    height:100%;
    width:100%;
`;