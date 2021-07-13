import styled,{ createGlobalStyle } from 'styled-components';

//global style which will apply to all element in navbar
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
  }`;

export const IntroModel = styled.div`
	height:100vh;
	width:100vw;
	position:fixed;
	z-index:10000;
	margin-left:0;
	background-color:#f1f1f1;
	transition:all 1s;
	
	&.close{
		margin-left:-120%;
	}

	@media(min-width:900px){
		display:none;
	}
`;

export const ImageContainer = styled.div`
	height:55vh;
	width:100%;
	background:linear-gradient(to bottom,#1832fa,#3d6af6);
	z-index:10000;
	border-radius:0 0 50% 50% ;
`;

export const IntroImage = styled.img`
	height:100%;
	width:100%;
`;

export const IntroContent = styled.div`
	padding-top:2rem;
`;

export const IntroText = styled.div`
		text-align: center;
`;

export const IntroHeading = styled.h4`
	font-size:1.5rem;
	margin:0;
`;

export const IntroPara = styled.p`
	font-size:14px;
	padding:0.5rem 0.6rem;
	margin:0;
`;

export const IntroButtonBox = styled.div`
	padding-top:1rem;
	width:100%;
	text-align:center;
`;

export const NextButton = styled.button`
	width:70vw;
	padding:0.5rem;
	color:#f1f1f1;
	font-size:1rem;
	font-family: 'Poppins', sans-serif;
	border:none;
	outline:none;
	border-radius:10px;
	background:linear-gradient(to right,#1832fa,#3d6af6);
	
	&:focus{
		outline:none;
	}
`;