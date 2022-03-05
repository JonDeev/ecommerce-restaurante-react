import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href='https://www.linkedin.com/in/john-pertuz-72a27b103/'
                target='_blank'
                arial-label='Facebook'
                rel='noopener noreferrer'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/in/john-pertuz-72a27b103/'
                target='_blank'
                arial-label='Instagram'
                rel='noopener noreferrer'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/in/john-pertuz-72a27b103/'
                target='_blank'
                arial-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='https://twitter.com/JohnDevp'
                target='_blank'
                arial-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/in/john-pertuz-72a27b103/'
                target='_blank'
                arial-label='Linkedin'
                rel='noopener noreferrer'
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};
