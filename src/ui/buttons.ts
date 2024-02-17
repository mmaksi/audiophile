import { Theme } from '@/infrastructure/theme';
import styled from 'styled-components';

interface StyledButtonProps {
  theme: Theme;
}

const BaseButton = styled.button`
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  padding: 1.5rem 3rem;
  cursor: pointer;
  border: none;
`;

export const Button_Primary = styled(BaseButton)<StyledButtonProps>`
  color: ${(props) => props.theme.color.text.tertiary};
  background-color: ${(props) => props.theme.color.brand.tertiary};

  &:hover {
    background-color: ${(props) => props.theme.color.button.primary_hover};
  }
`;

export const Button_Secondary = styled(BaseButton)<StyledButtonProps>`
  border: 2px solid ${(props) => props.theme.color.brand.secondary};
  color: ${(props) => props.theme.color.text.primary};
  background-color: ${(props) => props.theme.color.brand.primary};

  &:hover {
    background-color: ${(props) => props.theme.color.button.secondary_hover};
    color: ${(props) => props.theme.color.text.tertiary};
  }
`;
