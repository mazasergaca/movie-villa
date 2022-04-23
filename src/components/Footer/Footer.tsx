import React from 'react';
import { Container } from '@mui/material';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from 'react-icons/ai';

import { FooterStyled, Wrapper, List, Item, Text } from './Footer.style';

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Wrapper>
          <List>
            <Item>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook size="24px" color="#fff" />
              </a>
            </Item>
            <Item>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size="24px" color="#fff" />
              </a>
            </Item>
            <Item>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <AiOutlineTwitter size="24px" color="#fff" />
              </a>
            </Item>
            <Item>
              <a
                href="https://www.youtube.com/?&ab_channel=OtherMusic"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillYoutube size="24px" color="#fff" />
              </a>
            </Item>
          </List>
          <List>
            <Item>Conditions of Use</Item>
            <Item>Privacy & Policy</Item>
            <Item>Press Room</Item>
          </List>
          <Text>© 2022 MovieVilla by Tanmay Jitendra Thakare</Text>
        </Wrapper>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
