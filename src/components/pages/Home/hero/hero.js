import React from 'react'
import CoImage from '../../../images/hero.png';
import {HeroSection, HeroContainer,HeroColumn,HeroMainHeading, HeroSubHeading,HeroText,HeroButton, HeroImg} from './heroStyle';

 const Hero = () => {
    return (
        <HeroSection>
            <HeroContainer>
                <HeroColumn>
                    <HeroMainHeading>
                        CoronaVirus
                    </HeroMainHeading>
                    <HeroSubHeading>
                        Vaccine
                    </HeroSubHeading>
                    <HeroText>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                    </HeroText>
                    <HeroButton>
                        More Info
                    </HeroButton>
                </HeroColumn>
                <HeroColumn>
                    <HeroImg src={CoImage}/>
                </HeroColumn>
            </HeroContainer>
        </HeroSection>
        
    );
}
export default Hero;