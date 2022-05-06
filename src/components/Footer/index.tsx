import React, { FC } from 'react';
import { Container } from '@mui/material';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from 'react-icons/ai';

import { Wrapper, List, Item, Text, Link } from './Footer.styles';

const Footer: FC = () => {
  return (
    <footer>
      <Container>
        <Wrapper>
          <List>
            <Item>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook size="24px" />
              </Link>
            </Item>
            <Item>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size="24px" />
              </Link>
            </Item>
            <Item>
              <Link
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineTwitter size="24px" />
              </Link>
            </Item>
            <Item>
              <Link
                href="https://www.youtube.com/?&ab_channel=OtherMusic"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillYoutube size="24px" />
              </Link>
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
    </footer>
  );
};

export default Footer;
