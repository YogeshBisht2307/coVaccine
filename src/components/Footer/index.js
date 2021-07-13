import React from 'react'
import { FooterSection,FooterContainer, FooterColumn, FooterText } from './footerStyle';
const Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <FooterColumn>
                    <FooterText className="MainHeading">About</FooterText>
                    <FooterText className="plainText">lorem ipsum jipsume tipsumgipsum jalapsum talapsum gopisum isplay:flex;
                    justify-content:space-around;
                    align-items:center;
                    flex-direction:column;
                    </FooterText>
                </FooterColumn>
                <FooterColumn>
                    <FooterText className="SecondaryHeading">coVaccine</FooterText>
                    <FooterText className="plainText">lorem ipsum jipsume tipsumgipsum jalapsum talapsum gopisum </FooterText>
                    <FooterText className="copyrightText">All right reserved to coVaccine (Developed By Yogesh Bisht) @2021</FooterText>
                </FooterColumn>
            </FooterContainer>
        </FooterSection>
    )
}

export default Footer;
