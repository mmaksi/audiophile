import { Theme } from '@/infrastructure/theme';
import styled from 'styled-components';

interface StyledProps {
  theme: Theme;
}

export const Hero = styled.div`
  background-image: url('home/desktop/image-hero.jpg');
  display: flex;
  align-items: center;
  height: 100vh;
  height: 100dvh;
  background-size: cover;
  background-position: center;
`;

export const Container = styled.div<StyledProps>`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-left: ${(props) => props.theme.padding[0]}rem;
`;
