import { Theme } from '@/infrastructure/theme';
import styled from 'styled-components';
import { SubTitle } from './ui/headers';
import Logo from 'public/shared/desktop/logo.svg';
import Cart from 'public/shared/desktop/icon-cart.svg';
import Image from 'next/image';

interface Props {
  theme: Theme;
}

const Container = styled.div<Props>`
  position: fixed;
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: ${(props) => props.theme.padding[0]}rem;
  width: calc(100% - ${(props) => props.theme.padding[0]}rem * 2);
  height: 9.7rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const TextContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3.4rem;
`;

const NavigationBar = () => {
  return (
    <Container>
      <Image src={Logo} alt="audiophile logo" width={143} height={25} />
      <TextContainer>
        <SubTitle color="tertiary">Home</SubTitle>
        <SubTitle color="tertiary">HEADPHONES</SubTitle>
        <SubTitle color="tertiary">SPEAKERS</SubTitle>
        <SubTitle color="tertiary">EARPHONES</SubTitle>
      </TextContainer>
      <Image src={Cart} alt="cart icon" width={23} height={20} />
    </Container>
  );
};

export default NavigationBar;
