import { ReactNode } from 'react';
import color, { ColorScheme } from './color';
import { ThemeProvider } from 'styled-components';

interface Props {
  children: ReactNode;
}

const theme = {
  color,
};

export interface Theme {
  color: ColorScheme;
}

const ThemeWrapper = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
