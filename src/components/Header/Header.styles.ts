import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

interface StyledProps {
  $open?: boolean;
  $current?: boolean;
}

export const HeaderStyled = styled.header`
  padding: 5px 0;

  border-bottom: 1px solid #ccc;
  background-color: #040914;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperNav = styled.div`
  display: flex;
`;

export const LogoLink = styled(Link)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Form = styled.form`
  padding: 10px 0;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  position: relative;

  &::after {
    position: absolute;
    top: 100%;
    content: '';
    display: block;
    height: 1px;
    width: 110%;

    background-color: #fff;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const Input = styled.input`
  font-size: 16px;

  border: none;
  color: #fff;
  background-color: transparent;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #ccc;
  }
`;

export const ButtonSubmit = styled.button`
  font-size: 20px;

  border: none;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  transform: scale(1);
  transition: color 250ms, transform 250ms;

  &:hover {
    color: #ff3b5f;
    transform: scale(1.1);
  }
`;

export const WrapperLinks = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    margin-left: 80px;
    display: flex;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-right: 35px;
  }
`;

export const LinkStyled = styled(Link)<StyledProps>`
  font-size: 16px;

  color: ${props => (props.$current ? '#ff3b5f' : '#fff')};
  transition: color 250ms;

  &:hover {
    color: #ff3b5f;
  }
`;

export const ButtonMenu = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 22px;

  z-index: 5;
  border: none;
  color: #fff;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const CloseButton = styled(AiOutlineClose)<StyledProps>`
  position: absolute;
  opacity: ${props => (props.$open ? 1 : 0)};
  color: #fff;
  transform: ${props => (props.$open ? 'rotate(0)' : 'rotate(50deg)')};
  transition: transform 300ms, opacity 450ms;
`;

export const MenuOpen = styled(AiOutlineMenu)<StyledProps>`
  opacity: ${props => (props.$open ? 0 : 1)};

  transition: opacity 450ms;
`;

export const MobileMenu = styled.div<StyledProps>`
  position: absolute;
  top: 55px;
  left: 0;
  width: 100vw;
  padding: 15px 15px;
  z-index: 4;

  transform: ${props => (props.$open ? 'translateX(0)' : 'translateX(-100%)')};
  ${props => props.$open && 'overflow: hidden'};
  ${props => !props.$open && 'pointer-events: none;'};
  border-top: 1px solid #ff3b5f;
  border-right: 4px solid #ff3b5f;
  background-color: #040914;
  transition: transform 550ms;
`;

export const WrapperMobileLinks = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const MobileLink = styled(Link)<StyledProps>`
  width: calc((100% - 45px) / 2);

  font-size: 20px;
  font-weight: 600;
  text-align: center;

  color: ${props => (props.$current ? '#ff3b5f' : '#fff')};
  transition: color 250ms;

  &:nth-child(2n -1) {
    margin-right: 15px;
  }
  &:nth-child(-n + 4) {
    margin-bottom: 10px;
  }

  &:hover {
    color: #ff3b5f;
  }
`;
