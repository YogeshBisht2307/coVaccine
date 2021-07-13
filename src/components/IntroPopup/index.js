import React, {useState} from 'react';
import {IntroModel, ImageContainer, IntroImage, IntroContent, IntroText, IntroHeading, IntroPara, IntroButtonBox, NextButton} from './introStyle.js';
import MainHero from '../images/mainHero.png';

const IntroPopup = () => {
	const [open, setOpen] = useState(true);
	function handleClick(){
		setOpen(!open);
	}
  return (
   		<IntroModel className = {open ? '':'close'}>
			<ImageContainer>
				<IntroImage src={MainHero}/>
			</ImageContainer>
			<IntroContent>
				<IntroText>
					<IntroHeading>The Best Specialization!</IntroHeading>
					<IntroPara>lorem ipsum jipsum tipsum ghispum gholispum chipsum tipsum taapsam</IntroPara>
				</IntroText>
				<IntroButtonBox>
					<NextButton onClick={handleClick} id="next">Go to Next</NextButton>
				</IntroButtonBox>
			</IntroContent>
		</IntroModel>
  );
}

export default IntroPopup;
