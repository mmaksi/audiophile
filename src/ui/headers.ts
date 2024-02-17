import { Theme } from '@/infrastructure/theme';
import styled from 'styled-components';

interface StyledButtonProps {
  theme: Theme;
}

export const H1 = styled.h1<StyledButtonProps>`
  font-size: 5.6rem;
  line-height: 5.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: ${(props) => props.theme.color.text.primary};
`;

export const H2 = styled.h2<StyledButtonProps>`
  font-size: 4rem;
  line-height: 4.4rem;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  color: ${(props) => props.theme.color.text.primary};
`;

export const SubTitle = styled.h2<StyledButtonProps>`
  font-size: 1.3rem;
  line-height: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: ${(props) => props.theme.color.text.secondary};
`;

// TODO set rem to 10 px
export const H3 = styled.h3<StyledButtonProps>`
  font-size: 3.2rem;
  line-height: 3.6rem;
  text-transform: uppercase;
  letter-spacing: 0.115rem;
  color: ${(props) => props.theme.color.text.primary};
`;

export const H4 = styled.h4<StyledButtonProps>`
  font-size: 2.8rem;
  line-height: 3.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: ${(props) => props.theme.color.text.primary};
`;

export const H5 = styled.h5<StyledButtonProps>`
  font-size: 2.4rem;
  line-height: 3.3rem;
  text-transform: uppercase;
  letter-spacing: 0.17rem;
  color: ${(props) => props.theme.color.text.primary};
`;

export const H6 = styled.h6<StyledButtonProps>`
  font-size: 1.8rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  letter-spacing: 0.13rem;
  color: ${(props) => props.theme.color.text.primary};
`;

export const Overline = styled.span<StyledButtonProps>`
  font-size: 1.4rem;
  line-height: 1.9rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
  color: ${(props) => props.theme.color.text.secondary};
`;

export const Body = styled.p<StyledButtonProps>`
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: ${(props) => props.theme.color.text.primary};
`;

// TODO change rem to 10px , add font family
